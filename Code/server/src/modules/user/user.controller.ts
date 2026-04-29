import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { SetUsernameDto } from './dto/set-username.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 👤 GET /users/me
  @Get('me')
  getMe(@Req() req) {
    return this.userService.getMe(req.user.id);
  }

  // ✏️ PATCH /users
  @Patch()
  update(@Req() req, @Body() dto: UpdateUserDto) {
    return this.userService.update(req.user.id, dto);
  }

  // 🧪 GET /users/check-username?username=abc
  @Get('check-username')
  checkUsername(@Query('username') username: string) {
    return this.userService.isUsernameAvailable(username);
  }

  // 👤 POST /users/username
  @Post('username')
  setUsername(@Req() req, @Body() dto: SetUsernameDto) {
    return this.userService.setUsername(req.user.id, dto.username);
  }

  // 🗑️ DELETE /users
  @Delete()
  remove(@Req() req) {
    return this.userService.remove(req.user.id);
  }
}
