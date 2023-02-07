import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserPreferenceDto } from './dto';
import {
  UserPreference,
  UserPreferencesDocument,
} from './user-preferences.schema';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private UserPreferencesModel: Model<UserPreferencesDocument>,
  ) {}

  async create(): Promise<UserPreference> {
    const createdUserPreference = new this.UserPreferencesModel();
    createdUserPreference.items = [
      { name: 'В моем городе', isActive: false, icons: '' },
      { name: 'Открыты к общению', isActive: false, icons: '' },
      { name: 'Ищут друзей', isActive: false, icons: '' },
      { name: 'Любят движуху', isActive: false, icons: '' },
      { name: 'Можем выпить по пиву', isActive: false, icons: '' },
      { name: 'Могу показать офис', isActive: false, icons: '' },
      { name: 'Могу показать город', isActive: false, icons: '' },
      { name: 'Могу приютить на ночь', isActive: false, icons: '' },
      { name: 'Могу зареферить в компанию', isActive: false, icons: '' },
      { name: 'Ищу сотрудников', isActive: false, icons: '' },
      { name: 'Ищу работу', isActive: false, icons: '' },
      { name: 'Ищу удаленку', isActive: false, icons: '' },
      { name: 'Хочу релокацию', isActive: false, icons: '' },
      { name: 'FAANG', isActive: false, icons: '' },
    ];
    return (await createdUserPreference.save()).id;
  }

  async update(
    id: string,
    UpdateUserPreferenceDto: UpdateUserPreferenceDto,
  ): Promise<UserPreference> {
    return this.UserPreferencesModel.findOneAndUpdate({ _id: id }, {});
  }

  async findAll(): Promise<UserPreference[]> {
    return this.UserPreferencesModel.find().exec();
  }
}
