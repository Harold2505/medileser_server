import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTestingErrorDto } from './dto/create-testing_error.dto';
import { UpdateTestingErrorDto } from './dto/update-testing_error.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TestingError } from './entities/testing_error.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestingErrorService {
  constructor(
    @InjectRepository(TestingError)
    private readonly testingErrorRepository: Repository<TestingError>,
  ) {}

  create(createTestingErrorDto: CreateTestingErrorDto) {
    try {
      const testing = this.testingErrorRepository.create(createTestingErrorDto);
      return this.testingErrorRepository.save(testing);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return `This action returns all testingError`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testingError`;
  }

  update(id: number, updateTestingErrorDto: UpdateTestingErrorDto) {
    return `This action updates a #${id} testingError`;
  }

  remove(id: number) {
    return `This action removes a #${id} testingError`;
  }
}
