import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeMessage(): string {
    return 'Welcome to e2e messaging!';
  }
}
