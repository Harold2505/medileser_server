import { Module } from '@nestjs/common';
import { TestingErrorService } from './testing_error.service';
import { TestingErrorController } from './testing_error.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingError } from './entities/testing_error.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestingError])],
  controllers: [TestingErrorController],
  providers: [TestingErrorService],
})
export class TestingErrorModule {}
