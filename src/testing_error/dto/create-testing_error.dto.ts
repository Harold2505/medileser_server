import { IsNumber, IsString } from 'class-validator';

export class CreateTestingErrorDto {
  @IsString()
  type: string;

  @IsString()
  medidor: string;

  @IsNumber()
  temperature: number; //

  @IsNumber()
  input_pressure: number;

  @IsNumber()
  output_pressure: number;

  @IsNumber()
  initial_flow: number;

  @IsNumber()
  end_flow: number;

  @IsString()
  time: string;

  @IsNumber()
  vol_p: number;
}
