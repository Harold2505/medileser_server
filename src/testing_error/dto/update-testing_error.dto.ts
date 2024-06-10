import { PartialType } from '@nestjs/mapped-types';
import { CreateTestingErrorDto } from './create-testing_error.dto';

export class UpdateTestingErrorDto extends PartialType(CreateTestingErrorDto) {}
