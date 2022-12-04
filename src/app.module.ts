import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

import configuration from '../configs/configuration';


@Module({
  imports: [
    // import configs
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule
  ],
})
export class AppModule {}
