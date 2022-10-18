import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jsonwebtoken from 'jsonwebtoken';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];
    const decoded = jsonwebtoken.decode(token);
    return decoded.sub;
  },
);
