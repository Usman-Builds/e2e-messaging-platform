import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔍 Get current user
  async getMe(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        profilePhoto: true,
        bio: true,
        darkMode: true,
        readReciepts: true,
        onlineStatus: true,
        groupAdd: true,
        isUsername: true,
        provider: true,
        createdAt: true,
      },
    });
  }

  // ✏️ Update profile / settings
  async update(userId: number, data: any) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  // 🧪 Check username availability
  async isUsernameAvailable(username: string) {
    const existing = await this.prisma.user.findUnique({
      where: { username },
    });

    return {
      available: !existing,
    };
  }

  // 👤 Set username + mark isUsername = true
  async setUsername(userId: number, username: string) {
    // check if already taken
    const existing = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existing) {
      throw new BadRequestException('Username already taken');
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        username,
        isUsername: true,
      },
    });

    return user;
  }

  // 🗑️ Delete account
  async remove(userId: number) {
    return this.prisma.user.delete({
      where: { id: userId },
    });
  }
}