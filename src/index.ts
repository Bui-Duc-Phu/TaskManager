 import Model from "./models/User";
import UserService from "./services/UserService";
import { askNonEmpty } from "./utils/AskNonEmpty";



 function addUser() {
    const name = askNonEmpty("Nhập tên: ", "string") as string;
    const email = askNonEmpty("Nhập email: ", "string") as string;
    const user = new Model.User(name, email);
    UserService.addUser(user);
 }
 
function main() {
    while (true) {
        console.log("1. add user");
        console.log("2. show All user");
        console.log("3. addBook");
        console.log("4. show All Book");
        console.log("5. Mượn Sách");
        console.log("6. Trả Sách");
        console.log("7. Hiển thị phiếu mượn sách");
        console.log("0. Thoát");
        const choice = askNonEmpty("Nhập lựa chọn: ", "string") as string;
        switch (choice) {
            case "0":
                console.log("Thoát chương trình");
                process.exit(0)
                break;
            case "1":
                addUser();
                break;
            case "2":
               
                break;
            case "3":
                
                break;
            case "4":
           
                break;
            case "5":
              
                break;
            case "6":
               
                break;
            case "7":
               
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }

}

main();