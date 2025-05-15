import { v4 as uuidv4 } from 'uuid';

export default class Base {
    protected id: string;
    protected name: string;

    constructor(name: string,id?:string) {
        this.name = name;
        this.id = id ? id : uuidv4();
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setId(id: string): void {
        this.id = id;
    }
}