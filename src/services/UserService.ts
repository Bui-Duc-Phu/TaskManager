import Model from "../models/User";
import { readFileJSON, writeFileJSON } from "../utils/HandlerJSON";
import { MyPaths } from "../utils/MyPaths";

class UserService {
   
    public static getAllUsers(): Array<Model.User> {
        const users = readFileJSON(MyPaths.DATA_DIR, MyPaths.USER_FILE) as Array<Model.User>;
        return users;
    }

    private static isExist(email: string): boolean {
        const users = this.getAllUsers();
        return users.find(u => u.getEmail() === email) !== undefined;
    }

    public static addUser(user: Model.User): void {
        const users = this.getAllUsers();

        if(this.isExist(user.getEmail())){
            return;
        }
        users.push(user);
        writeFileJSON(users, MyPaths.DATA_DIR, MyPaths.USER_FILE);
    }
    
    
}

export default UserService; 