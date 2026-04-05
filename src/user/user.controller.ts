import { Controller, Get} from '@nestjs/common';


@Controller('user')  // decorator as defined with @ and user is route 
export class UserController {
    @Get()
    getUser(){
        return "User controller fetched successfully!!!"
    }
}
