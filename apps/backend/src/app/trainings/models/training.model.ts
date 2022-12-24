import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TrainingInterface } from '../interfaces/training.interface';

@Schema({ collection: 'trainings', timestamps: true })
export class TrainingModel extends Document implements TrainingInterface {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  workTime: number;

  @Prop({ required: true })
  restTime: number;

  @Prop({ required: true })
  resetTime: number;

  @Prop({ required: true })
  exercises: number;

  @Prop({ required: true })
  repeats: number;
}

export const TrainingSchema = SchemaFactory.createForClass(TrainingModel);
