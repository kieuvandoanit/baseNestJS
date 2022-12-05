import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";
import { BaseRepository } from "../base/base.repository";
import { User, UserSchema } from "./users.schemas"

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(@InjectModel(User.name) userModel: Model<Document<User>>) {
        super(userModel);
    }
}
