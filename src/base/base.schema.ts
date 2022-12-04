export abstract class BaseSchema {
    public _id ?: string;
    public created_at: Date;
    public updated_at: Date;

    constructor(init?: Partial<BaseSchema>) {
        Object.assign(this, init);
    }
}
