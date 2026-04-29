import { IsString, MinLength } from 'class-validator';

export class SetUsernameDto {
  @IsString()
  @MinLength(3)
  username: string;
}