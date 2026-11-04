import 'dotenv/config';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { defineConfig } from '@mikro-orm/postgresql';
import type { Options } from '@mikro-orm/postgresql';

const config: Partial<Options> = defineConfig({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dbName: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: ['./dist/infrastructure/database/entities/*.entity.js'],
    entitiesTs: ['./src/infrastructure/database/entities/*.entity.ts'],
    metadataProvider: ReflectMetadataProvider,
    migrations: {
        path: './dist/infrastructure/database/migrations',
        pathTs: './src/infrastructure/database/migrations',
        transactional: true,
        allOrNothing: true
    }
});

export const mikroOrmConfig: Partial<Options> = { ...config };

export default mikroOrmConfig;