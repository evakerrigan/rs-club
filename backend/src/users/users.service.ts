import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  async findAll(): Promise<UserDocument[]> {
    return await this.UserModel.find();
  }

  async findOne(id: string) {
    return await this.UserModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.UserModel.findByIdAndUpdate({ _id: id }, updateUserDto);
  }

  async remove(id: string) {
    return await this.UserModel.deleteOne({ _id: id });
  }
}
