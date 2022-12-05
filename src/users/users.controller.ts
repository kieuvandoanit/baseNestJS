import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dtos';
import { User } from './users.schemas';
import { UsersService } from './users.service';
import { LoadSource } from 'src/base/common.dto';



@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private configService: ConfigService,
        private userService: UsersService,
    ){}

    @Post('')
    public async createUser(@Body() user: CreateUserDto): Promise<User>{
        return await this.userService.create(user);
    }

    @Get('')
    public async getAllUser(@Query() {offset, limit}: LoadSource): Promise<any> {
        return await this.userService.load({offset, limit});
    }
}
