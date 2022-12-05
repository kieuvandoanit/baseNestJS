import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoadSource {
    @ApiProperty({
        default: 1,
    })
    @IsString()
    offset: number;

    @ApiProperty({
        default: 40,
    })
    @IsString()
    limit: number;
}
