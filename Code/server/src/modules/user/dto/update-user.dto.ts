import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() bio?: string;
  @IsOptional() @IsString() profilePhoto?: string;

  // permissions
  @IsOptional() @IsBoolean() darkMode?: boolean;
  @IsOptional() @IsBoolean() readReciepts?: boolean;
  @IsOptional() @IsBoolean() onlineStatus?: boolean;
  @IsOptional() @IsBoolean() groupAdd?: boolean;
}