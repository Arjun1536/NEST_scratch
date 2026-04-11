import { Injectable } from '@nestjs/common';
import { single } from 'rxjs';

@Injectable()
export class DatabaseService {

    private isConnected = false;
    onModuleInit(){
        this.isConnected = true;
        console.log("database connected")
    }
    onApplicationShutdown(signal:string){
        this.isConnected = false;
        console.log(`database disconneted : ${signal}`)
    }
    getStatus(){
        return this.isConnected ? "Connected": "Disconnected"
    }
}
