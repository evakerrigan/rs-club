import { PartialType } from '@nestjs/mapped-types';
import { Preference } from '../users.schema';
import { CreateUserDto } from './create-user.dto';

export class UpdateProfileDto extends PartialType(CreateUserDto) {
  technology?: string[];
  courses?: string[];
  preferences?: Preference[];
}
