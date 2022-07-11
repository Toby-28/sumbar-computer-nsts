import { Injectable } from '@nestjs/common';
import { CategoryService } from './modules/category/category.service';
import { UsersService } from './modules/users/users.service';

@Injectable()
export class AppService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly usersService: UsersService) { }

  async getInitial(): Promise<Object> {
    const categories = await this.categoryService.findAll({})
    const users = await this.usersService.findAll({})

    return { categories: categories, users: users };
  }
}
