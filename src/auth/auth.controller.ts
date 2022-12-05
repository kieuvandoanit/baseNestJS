import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ApiBody({
        schema: {
            example: {
                username: 'kieuvandoan',
                password: '12345678'
            }
        }
    })
    public async login(@Body() info: {username: string, password: string}, @Request() req) {
        return await this.authService.login(req.user);
    }
}
