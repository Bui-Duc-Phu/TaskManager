import Base from "./Base";

class User extends Base {
    private email: string;
  
    constructor(id:string, name: string, email: string,) {
        super(id,name);
       this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }
    
    public setEmail(email: string): void {
        this.email = email;
    }
    
}

export default User;