import { IsEmail, IsString, MaxLength } from "class-validator";

export class createCustomerDto {
    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MaxLength(10)
    phone!: string;

    @IsString()
    address!: string;

    @IsString()
    city!: string;
}