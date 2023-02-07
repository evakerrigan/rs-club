import { MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
  name: string;

  image?: string;
  role: 'user';
}
