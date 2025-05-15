import Base  from "./Base";

export default class User extends Base {
    private email: string;

    constructor(name: string, email: string,id?:string) {
        super(name,id);
        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
}
