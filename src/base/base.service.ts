import { Inject } from "@nestjs/common";
import { ConfigService } from '@nestjs/config'
import { BaseSchema } from "./base.schema";
import { BaseRepository } from "./base.repository";

export abstract class BaseService<T extends BaseSchema> {
    @Inject()
    protected configService: ConfigService;

    constructor(private baseRepository: BaseRepository<T>){}

    public async find(options: {
        offset?: number;
        limit?: number;
        filter?: any;
        sort?: any;
        selectedFields?: Array<string>;
        populates?: Array<{
            collection: string;
            fields: Array<string>;
        }>;
    }): Promise<{
        total: number;
        items: T[];
    }> {
        return this.baseRepository.find(options);
    }

    public async findOne(options?: {filter?: any; selectedFields?: Array<string> }): Promise<T> {
        return this.baseRepository.findOne(options);
    }

    public async updateById(id: string, data: Partial<T>): Promise<T> {
        return this.baseRepository.updateById(id, data);
    }

    public async update(filter: Partial<T>, data: Partial<T>): Promise<T> {
        return this.baseRepository.update(filter, data);
    }

    public async updateMany(filter: Partial<T>, data: Partial<T>): Promise<void> {
        return this.baseRepository.updateMany(filter, data);
    }

    public async create(data: Partial<T>): Promise<T> {
        return this.baseRepository.create(data);
    }

    public async bulkUpsert(
        docs: any[],
        upsert?: {
            conditions?: Array<string>;
            operator?: string;
            selectedFields?: Array<string>;
        },
    ): Promise<void> {
        await this.baseRepository.bulkUpsert(docs, upsert);
    }
}
