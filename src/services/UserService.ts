import User from "../models/User";
import { readFileJSON, writeFileJSON } from "../utils/HandlerJSON";
import { MyPaths } from "../utils/MyPaths";

class UserService {
   
    public static getAllUsers(): Array<User> {
        const usersData = readFileJSON(MyPaths.DATA_DIR, MyPaths.USER_FILE) as Array<any>;
        return usersData.map(u => new User(u.name, u.email,u.id));
    }

    private static isExist(email: string): boolean {
        const users = this.getAllUsers();
        return  users.some(u => u.getEmail() === email);
        ;
    }

    public static getUserByEmail(email: string): User | null {
        const users = this.getAllUsers();
        return users.find(u => u.getEmail() === email) || null;
    }

    public static getUserById(id: string): User | null {
        const users = this.getAllUsers();
        return users.find(u => u.getId() === id) || null;
    }

    public static getUserByName(name: string): User | null {
        const users = this.getAllUsers();
        console.log(users);
        return users.find(u => u.getName().toUpperCase() === name.toUpperCase()) || null;
    }

    public static updateUser(user: User): void {
        const users = this.getAllUsers();
        const index = users.findIndex(u => u.getId() === user.getId());
        if(index !== -1){
            users[index] = user;
            writeFileJSON(users, MyPaths.DATA_DIR, MyPaths.USER_FILE);
        }
    }


    public static addUser(user: User): void {
        const users = this.getAllUsers();

        if(this.isExist(user.getEmail())){
            return;
        }
        users.push(user);
        writeFileJSON(users, MyPaths.DATA_DIR, MyPaths.USER_FILE);
    }
    
    
}

export default UserService; 