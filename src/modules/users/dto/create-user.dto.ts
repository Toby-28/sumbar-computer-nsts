import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    phone: number

    @IsEmail()
    email: string

    name: string


}
