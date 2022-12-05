import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_KEY ?? "secret",
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
} // SEARCH: Add the new JwtStrategy as a provider in the AuthModule
