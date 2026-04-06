import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './role.decorator';
import { Role } from './role.enum';
//import { UserController } from '../../user/user.controller';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor (private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const requiredRole = this.reflector.getAllAndOverride(
      ROLES_KEY, [
        context.getClass(),
        context.getHandler()
      ]
    )
    if(!requiredRole){
      return true
    }

    const request = context.switchToHttp().getRequest<{headers: Record<string,string>}>()
    const userRole = request.headers["x-user-role"];
    return requiredRole.includes(userRole)
    
    return true;
  }
}
