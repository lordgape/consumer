import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { AppResponse } from 'app.response.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, AppResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<AppResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        if (!data) return;

        return {
          code: 'SUCCESS',
          response: data.response ? data.response : data,
          errors: [],
        };
      }),
    );
  }
}
