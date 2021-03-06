import { Injectable } from '@nestjs/common';
import { Carts, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) { }

  async cart(cartWhereUniqueInput: Prisma.CartsWhereUniqueInput): Promise<Carts> {
    return this.prisma.carts.findUnique({ where: cartWhereUniqueInput })
  }

  async carts(params: {
    skip?: number
    take?: number
    cursor?: Prisma.CartsWhereUniqueInput
    where?: Prisma.CartsWhereInput
    orderBy?: Prisma.CartsOrderByWithRelationInput
  }): Promise<Carts[]> {
    const { cursor, orderBy, skip, take, where } = params
    return this.prisma.carts.findMany({ cursor, orderBy, skip, take, where })
  }

  async createCart(data: Prisma.CartsCreateInput): Promise<Carts> {
    return this.prisma.carts.create({ data })
  }

  async updateCart(params: { where: Prisma.CartsWhereUniqueInput, data: Prisma.CartsUpdateInput }): Promise<Carts> {
    const { data, where } = params
    return this.prisma.carts.update({ where, data })
  }

  async deleteCart(where: Prisma.CartsWhereUniqueInput): Promise<Carts> {
    return this.prisma.carts.delete({ where })
  }

  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
