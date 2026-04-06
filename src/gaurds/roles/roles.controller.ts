import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './role.decorator';
import { Role } from './role.enum';
@Controller('roles')
export class RolesController {

@Get('admin-data')
@UseGuards(RolesGuard)
@Roles(Role.Admin)
adminRole(){
return ("gettting access of ADMIN role")
}


@Get("user")
userRole(){
    return ("user access provided")
}
}
