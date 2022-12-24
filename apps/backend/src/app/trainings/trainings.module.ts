import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { TrainingModel, TrainingSchema } from './models/training.model';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      {
        name: TrainingModel.name,
        schema: TrainingSchema,
      },
    ]),
  ],
  providers: [TrainingsService],
  controllers: [TrainingsController],
})
export class TrainingsModule {}
