import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UsersModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
