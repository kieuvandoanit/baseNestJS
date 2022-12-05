import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY ?? "secret",
      signOptions: { expiresIn: process.env.EXPIRE_TIME ? `${process.env.EXPIRE_TIME}s` : "60s" },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
