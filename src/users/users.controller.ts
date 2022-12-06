import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos';
import { User } from './users.schemas';
import { UsersService } from './users.service';
import { LoadSource } from 'src/base/common.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ){}

    @Post('')
    public async createUser(@Body() user: CreateUserDto): Promise<User>{
        return await this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('')
    public async getAllUser(@Query() {offset, limit}: LoadSource): Promise<any> {
        return await this.userService.load({offset, limit});
    }
}
