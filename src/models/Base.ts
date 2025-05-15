class Base {
   protected id: string;
   protected name: string;

    constructor(id: string, name: string) {
        this.id = id;
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