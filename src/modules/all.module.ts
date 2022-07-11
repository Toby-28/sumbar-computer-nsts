import { Module } from "@nestjs/common";
import { CartsModule } from "./carts/carts.module";
import { CategoryModule } from "./category/category.module";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";

@Module({
    imports: [CartsModule, ProductsModule, UsersModule, CategoryModule],
    exports: [CategoryModule, UsersModule]
})

export class AllModules { }