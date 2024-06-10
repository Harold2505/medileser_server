import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';
import { TestingErrorModule } from './testing_error/testing_error.module';
import { TestingError } from './testing_error/entities/testing_error.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.hostDB,
      port: envs.portDB,
      username: envs.userDB,
      password: envs.passDB,
      database: envs.nameDB,
      entities: [TestingError],
      synchronize: true,
    }),
    TestingErrorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
