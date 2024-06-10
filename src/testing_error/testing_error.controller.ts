import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestingErrorService } from './testing_error.service';
import { CreateTestingErrorDto } from './dto/create-testing_error.dto';
import { UpdateTestingErrorDto } from './dto/update-testing_error.dto';

@Controller('testing-error')
export class TestingErrorController {
  constructor(private readonly testingErrorService: TestingErrorService) {}

  @Post()
  create(@Body() createTestingErrorDto: CreateTestingErrorDto) {
    return this.testingErrorService.create(createTestingErrorDto);
  }

  @Get()
  findAll() {
    return this.testingErrorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testingErrorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestingErrorDto: UpdateTestingErrorDto) {
    return this.testingErrorService.update(+id, updateTestingErrorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testingErrorService.remove(+id);
  }
}
