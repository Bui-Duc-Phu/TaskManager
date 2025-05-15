import Base from "./Base";

namespace Model {
  export class User extends Base {
    private email: string;

    constructor(name: string, email: string) {
      super(name);
      this.email = email;
    }

    public getEmail(): string {
      return this.email;
    }

    public setEmail(email: string): void {
      this.email = email;
    }
  }
}

export default Model;
