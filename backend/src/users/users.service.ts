import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryParamDto } from './dto/searh-param.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
  ) {}

  private async updateRole(id: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      { _id: id },
      {
        role: 'admin',
      },
    );
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.UserModel(createUserDto).save();
  }

  async findAll(): Promise<{
    items: UserDocument[];
    count: number;
  }> {
    const items = await this.UserModel.find({ status: 'active' });
    const count = await this.UserModel.count();
    return {
      items,
      count,
    };
  }
  async findByAccessToken(rsAccessToken: string) {
    return await this.UserModel.findOne({ rsAccessToken });
  }
  
  async getAllUsers() {
    return await this.UserModel.find({ status: 'active' });
  }

  async findByFilter(filterDto: QueryParamDto): Promise<UserDocument[]> {
    const { stack, courses, pref } = filterDto;
    const query: {
      [key: string]: object;
    } = {};

    if (pref) {
      query.$and = pref.split(',').map((value) => ({
        preferences: {
          $elemMatch: { value, isActive: true },
        },
      }));
    }

    if (stack) query.technology = { $all: stack.split(',') };
    if (courses) query.courses = { $all: courses.split(',') };
    return await this.UserModel.find(query);
  }

  /* ПОДКЛЮЧИТЬ GUARD */

  async findOne(id: string) {
    return await this.UserModel.findOne({ _id: id });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return await this.UserModel.findByIdAndUpdate(
      { _id: id },
      updateProfileDto,
    );
  }

  async remove(id: string) {
    return await this.UserModel.deleteOne({ _id: id });
  }
}
