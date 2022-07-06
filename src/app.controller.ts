import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CartsService } from './carts/carts.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly usersService: UsersService,
    private readonly cartsService: CartsService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
