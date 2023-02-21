import { MaxLength, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @MinLength(3, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
  githubName: string;
  profilePicture?: string;
  rsAccessToken: string;
}
