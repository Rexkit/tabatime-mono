import { IsNotEmpty } from 'class-validator';

export class TrainingDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  workTime: number;

  @IsNotEmpty()
  restTime: number;

  @IsNotEmpty()
  resetTime: number;

  @IsNotEmpty()
  exercises: number;

  @IsNotEmpty()
  repeats: number;
}
