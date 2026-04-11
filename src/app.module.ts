import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { RolesController } from './gaurds/roles/roles.controller';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EmployeeModule, StudentModule, CustomerModule, DatabaseModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:"postgres",
      url:process.env.DATABASE_URL,
      autoLoadEntities:true,
      synchronize:true
    })

  ],
  controllers: [AppController, UserController, ProductController, RolesController, DatabaseController],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule {}
