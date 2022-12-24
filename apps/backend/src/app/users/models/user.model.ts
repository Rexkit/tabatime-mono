import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TrainingModel } from '../../trainings/models/training.model';
import { IUser } from '../interfaces/user.interface';

@Schema({ collection: 'users', timestamps: true })
export class UserModel extends Document implements IUser {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [Types.ObjectId], ref: TrainingModel.name })
  trainings: TrainingModel[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
