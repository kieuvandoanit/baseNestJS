import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, isNotEmpty, IsNumberString, IsObject, IsOptional, IsString } from "class-validator";
import { Address } from "../users.schemas";

export class CreateUserDto {
    @ApiProperty({
        default: '1234567890'
    })
    @IsOptional()
    id: string;

    @ApiProperty({
        default: 'kieuvandoan'
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        default: '12345678'
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        default: 'kieuvandoanit@gmail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        default: '0975908445'
    })
    @IsString()
    @IsNumberString()
    phone_number: string;

    @ApiProperty({
        default: {
            country: "Việt Nam",
            province: "Lâm Đồng",
            district: "Lâm Hà",
            ward: "Tân Hà",
            street: "Thạch Thất 1",
            home_number: 100
        }
    })
    @IsObject()
    @IsNotEmpty()
    address: Address;
}

// export interface Address {
//     country: string;
//     province: string;
//     district: string;
//     ward: string;
//     street: string;
//     home_number: string;
// }
