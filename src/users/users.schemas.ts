import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";
import { BaseSchema } from "src/base/base.schema";

export type UserDocument = HydratedDocument<User>;

// Nested Schema
@Schema()
export class Address extends Document {
    @Prop({ required: true})
    country: string;

    @Prop({ required: true})
    province: string;

    @Prop({ required: true})
    district: string;

    @Prop({ required: true})
    ward: string;

    @Prop({ required: true})
    street: string;

    @Prop({ required: true})
    home_number: string;
}

@Schema()
export class User extends BaseSchema { 
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;
    
    @Prop({ required: true })
    email: string;
    
    @Prop({ required: true })
    phone_number: string;
    
    @Prop({ type: Address })
    address: Address
    
    constructor(init?: Partial<User>) {
        super(init);
        Object.assign(this, init);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);
