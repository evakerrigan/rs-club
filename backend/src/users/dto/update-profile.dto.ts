import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateProfileDto extends PartialType(CreateUserDto) {
  technology?: string[];
  courses?: string[];
}
