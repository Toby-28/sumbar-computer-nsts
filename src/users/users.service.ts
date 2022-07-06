import { Injectable } from '@nestjs/common';
import { Prisma, users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async user(userWhereUniqueInput: Prisma.usersWhereUniqueInput): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: userWhereUniqueInput
    })
  }

  async users(params: {
    skip?: number
    take?: number
    cursor?: Prisma.usersWhereUniqueInput
    where?: Prisma.usersWhereInput
    orderBy?: Prisma.usersOrderByWithRelationInput
  }): Promise<users[]> {
    const { cursor, orderBy, skip, take, where } = params
    return this.prisma.users.findMany({ cursor, orderBy, skip, take, where })
  }

  async createUser(data: Prisma.usersCreateInput): Promise<users> {
    return this.prisma.users.create({ data })
  }

  async updateUser(params: {
    where: Prisma.usersWhereUniqueInput
    data: Prisma.usersUpdateInput
  }): Promise<users> {
    const { data, where } = params
    return this.prisma.users.update({
      where,
      data
    })
  }

  async deleteUser(where: Prisma.usersWhereUniqueInput): Promise<users> {
    return this.prisma.users.delete({ where })
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
