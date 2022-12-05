import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { UserRepository } from './users.repository';
import { User } from './users.schemas';

@Injectable()
export class UsersService extends BaseService<User>{
    constructor(
        private userRepository: UserRepository
    ){
        super(userRepository);
    }

    public async load(paging: {offset: number, limit: number}) {
        const { offset = 1, limit = 40 } = paging;

        let result = await this.userRepository.find({
            offset,
            limit,
            selectedFields: ['_id', 'username'],
            filter: {
                created_at: {
                    $lte: new Date(),
                },
            },
        });
        return result;
    }
}
