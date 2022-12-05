import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import configuration from '../configs/configuration';


@Module({
  imports: [
    // import configs
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
