import { v4 as uuidv4 } from 'uuid';
class Base {
   protected id: string;
   protected name: string;

    constructor( name: string) {
        this.id = uuidv4();
        this.name = name;
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

export default Base;