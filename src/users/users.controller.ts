import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dtos';
import { User } from './users.schemas';



@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private configService: ConfigService
    ){}

    @Post('')
    public async createUser(@Body() user: CreateUserDto): Promise<any>{
        
    }
}
