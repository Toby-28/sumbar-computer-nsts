import { Injectable } from '@nestjs/common';
import { Prisma, Users, } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async user(userWhereUniqueInput: Prisma.UsersWhereUniqueInput): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: userWhereUniqueInput
    })
  }

  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({ data })
  }

  async updateUser(params: {
    where: Prisma.UsersWhereUniqueInput
    data: Prisma.UsersUpdateInput
  }): Promise<Users> {
    const { data, where } = params
    return this.prisma.users.update({
      where,
      data
    })
  }

  async deleteUser(where: Prisma.UsersWhereUniqueInput): Promise<Users> {
    return this.prisma.users.delete({ where })
  }

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: Prisma.UsersWhereUniqueInput
    where?: Prisma.UsersWhereInput
    orderBy?: Prisma.UsersOrderByWithRelationInput
  }) {
    const { cursor, orderBy, skip, take, where } = params
    return this.prisma.users.findMany({ cursor, orderBy, skip, take, where })
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
