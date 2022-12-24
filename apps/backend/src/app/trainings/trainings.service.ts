import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TrainingDto } from './dto/training.dto';
import { TrainingModel } from './models/training.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class TrainingsService {
  constructor(
    @InjectModel(TrainingModel.name)
    private readonly trainingModel: Model<TrainingModel>,
    private readonly userService: UsersService
  ) {}

  async createTraining(userId, trainingDto: TrainingDto) {
    const task = await this.trainingModel.create(trainingDto);
    await this.userService.setTrainingToCurrentUser(userId, task._id);
    return task;
  }

  async getAllTrainings(trainingId) {
    return await this.trainingModel.find().where('_id').in(trainingId).exec();
  }

  async getTraining(trainings, id: string) {
    if (this.trainingsExistence(trainings, id)) {
      return await this.trainingModel.findOne({ _id: id }).exec();
    }
  }

  async deleteTraining(user, id) {
    if (this.trainingsExistence(user.trainings, id)) {
      await this.userService.deleteTrainingToCurrentUser(user._id, id);
      return await this.trainingModel.deleteOne({ _id: id }).exec();
    }

    throw new HttpException('Training not found', HttpStatus.NOT_FOUND);
  }

  async updateTraining(user, body) {
    if (this.trainingsExistence(user.tasks, body._id)) {
      return await this.trainingModel.updateOne(body).exec();
    }
    throw new HttpException('Training not found', HttpStatus.NOT_FOUND);
  }

  private trainingsExistence(userTrainings, trainingId) {
    return userTrainings.find((id) => trainingId === id.toString());
  }
}
