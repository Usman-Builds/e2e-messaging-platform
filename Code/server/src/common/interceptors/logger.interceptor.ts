import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ReqResLoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const request = context.switchToHttp().getRequest();
    const { method, url, body, query, params } = request;

    console.log('--- Incoming Request ---');
    console.log({
      method,
      url,
      body,
      query,
      params,
      timestamp: new Date().toISOString(),
    });

    return next.handle().pipe(
      tap((responseData) => {
        const responseTime = Date.now() - now;

        console.log('--- Outgoing Response ---');
        console.log({
          method,
          url,
          responseTime: `${responseTime}ms`,
          response: responseData,
        });
      }),
    );
  }
}