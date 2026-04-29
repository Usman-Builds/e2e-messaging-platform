import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // -------------------------
  // REGISTER
  // -------------------------
  async register(data: { name: string; email: string; password: string }) {
    const existingEmail = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingEmail) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        provider: 'LOCAL',
        name: data.name,
        avatar: null, // optional
      },
    });

    return this.generateTokens(user);
  }

  // -------------------------
  // LOGIN VALIDATION
  // -------------------------
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  login(user: any) {
    return this.generateTokens(user);
  }

  // -------------------------
  // GOOGLE LOGIN (FIXED)
  // -------------------------
  async googleLogin(data: {
    email: string;
    name: string;
    avatar?: string;
  }) {
    let user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          provider: 'GOOGLE',
          avatar: data.avatar, // ✅ SAVE IMAGE
        },
      });
    } else {
      // keep profile synced
      user = await this.prisma.user.update({
        where: { email: data.email },
        data: {
          name: data.name,
        },
      });
    }

    return this.generateTokens(user);
  }

  // -------------------------
  // JWT GENERATION
  // -------------------------
  generateTokens(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar, // ✅ IMPORTANT
        provider: user.provider,
        isUsername: user.isUsername,
      },
    };
  }
}