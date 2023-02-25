import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateProfileDto extends PartialType(CreateUserDto) {
  technology: string[];
  courses: string[];
  preferences: string[];
  name: string;
  gender: 'male' | 'female';
  location: [number, number];
  address: string;
  cources: string[];
}
