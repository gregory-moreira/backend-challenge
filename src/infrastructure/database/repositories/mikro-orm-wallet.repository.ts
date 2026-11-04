import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';

import { WalletRepository } from '../../../application/ports/wallet-repository.js';
import { Money } from '../../../domain/shared/money.js';
import { Wallet } from '../../../domain/wallet/wallet.js';
import { WalletEntity } from '../entities/wallet.entity.js';

@Injectable()
export class MikroOrmWalletRepository implements WalletRepository {
    constructor(
        @InjectEntityManager('default')
        private readonly em: EntityManager
    ) {}

    async findById(id: string): Promise<Wallet | null> {
        const entity = await this.em.findOne(WalletEntity, { id });

        return entity ? this.toDomain(entity) : null;
    }

    async findByPlayerIdAndCurrency(
        playerId: string,
        currency: string
    ): Promise<Wallet | null> {
        const entity = await this.em.findOne(WalletEntity, {
            playerId,
            currency
        });

        return entity ? this.toDomain(entity) : null;
    }

    async save(wallet: Wallet): Promise<void> {
        const entity = await this.em.findOne(WalletEntity, {
            id: wallet.id
        });

        if (!entity) {
            const newEntity = this.em.create(WalletEntity, {
                id: wallet.id,
                playerId: wallet.playerId,
                currency: wallet.balance.currency,
                balance: wallet.balance.toString(),
                version: wallet.version,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            this.em.persist(newEntity);
            await this.em.flush();

            return;
        }

        if (entity.version === wallet.version) {
            if (entity.balance !== wallet.balance.toString()) {
                throw new Error('Wallet version conflict.');
            }

            return;
        }

        if (entity.version !== wallet.version - 1) {
            throw new Error('Wallet was modified concurrently.');
        }

        const affectedRows = await this.em.nativeUpdate(
            WalletEntity,
            {
                id: wallet.id,
                version: entity.version
            },
            {
                balance: wallet.balance.toString(),
                version: wallet.version,
                updatedAt: new Date()
            }
        );

        if (affectedRows !== 1) {
            throw new Error('Wallet was modified concurrently.');
        }

        entity.balance = wallet.balance.toString();
        entity.version = wallet.version;
        entity.updatedAt = new Date();
    }

    private toDomain(entity: WalletEntity): Wallet {
        return Wallet.restore({
            id: entity.id,
            playerId: entity.playerId,
            balance: Money.from({ amount: entity.balance, currency: entity.currency }),
            version: entity.version
        });
    }
}