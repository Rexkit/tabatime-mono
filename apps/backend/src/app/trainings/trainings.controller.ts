import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { AuthGuard } from '@nestjs/passport';
import { TrainingDto } from './dto/training.dto';
import { UsersService } from '../users/users.service';

@Controller('trainings')
export class TrainingsController {
  constructor(
    private readonly trainingsService: TrainingsService,
    private readonly usersService: UsersService
  ) {}

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createTraining(@Req() req, @Body() trainingDto: TrainingDto) {
    return await this.trainingsService.createTraining(
      req.user._id,
      trainingDto
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllTrainings(@Req() req) {
    return await this.trainingsService.getAllTrainings(req.user.trainings);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getTraining(@Req() req, @Param('id') id) {
    return await this.trainingsService.getTraining(req.user.trainings, id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async deleteTraining(@Req() req, @Body() body) {
    return await this.trainingsService.deleteTraining(req.user, body.id);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard('jwt'))
  @Put()
  async updateTraining(@Req() req, @Body() trainingDto: TrainingDto) {
    return await this.trainingsService.updateTraining(req.user, trainingDto);
  }
}
