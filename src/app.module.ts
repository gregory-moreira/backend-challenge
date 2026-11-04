/* ARQUIVOS GERADOS PELO PACOTE

import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

*/

/* INTEGRANDO MIKRO-ORM */
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { mikroOrmConfig } from './mikro-orm.config.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { WALLET_REPOSITORY } from './application/ports/wallet-repository.js';
import { MikroOrmWalletRepository } from './infrastructure/database/repositories/mikro-orm-wallet.repository.js';

@Module({
    imports: [
        MikroOrmModule.forRoot(mikroOrmConfig)
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: WALLET_REPOSITORY,
            useClass: MikroOrmWalletRepository
        }
    ]
})
export class AppModule {}
