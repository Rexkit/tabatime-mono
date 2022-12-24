import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { genSalt, hash, compare } from 'bcrypt';

import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/user.create.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { toUserDto } from '../shared/mapper';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userModel.findOne(options).exec();
    return toUserDto(user);
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userModel.findOne({ username }).exec();

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ username }: any): Promise<UserDto> {
    return await this.findOne({ username });
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    const userInDb = await this.userModel.findOne({ username }).exec();
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    const user: UserModel = await new this.userModel({
      username,
      password: hashPassword,
      email,
    });

    await user.save();

    return toUserDto(user);
  }

  async setTrainingToCurrentUser(_id, trainingId) {
    await this.userModel.updateOne(
      { _id },
      { $push: { trainings: trainingId } }
    );
  }

  async deleteTrainingToCurrentUser(_id, trainingId) {
    await this.userModel.updateOne(
      { _id },
      { $pull: { trainings: trainingId } }
    );
  }

  private _sanitizeUser(user: UserModel) {
    delete user.password;
    return user;
  }
}
