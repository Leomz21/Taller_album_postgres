import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotosModule } from './fotos/fotos.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // lee el .env
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true, // registra las entidades de cada módulo
        synchronize: true, // crea/altera tablas: SOLO en desarrollo
      }),
    }),
    FotosModule,
  ],
})
export class AppModule {}