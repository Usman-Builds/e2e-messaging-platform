import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // 🧩 Register new local user
  async register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hashed,
        provider: 'LOCAL',
      },
    });
    return this.generateTokens(user);
  }

  // 🔑 Validate local user
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !user.password)
      throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  // 🚪 Login (JWT)
  login(user: any) {
    return this.generateTokens(user);
  }

  // 🔁 Token generation
  generateTokens(user: any) {
    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        provider: user.provider,
      },
    };
  }

  // 🌐 Google Login or Register
  async validateGoogleUser(profile: any) {
    const email = profile.emails?.[0]?.value;

    let user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          firstName: profile.name?.givenName || '',
          lastName: profile.name?.familyName || '',
          email,
          googleId: profile.id,
          profilePhoto: profile.photos?.[0]?.value,
          provider: 'GOOGLE',
        },
      });
    }

    return this.generateTokens(user);
  }
}
