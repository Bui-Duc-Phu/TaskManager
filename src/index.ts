import Task from "./models/Task";
import User from "./models/User";
import BoardService from "./services/BorardService";
import TaskManagerService from "./services/TaskManagerService";
import TaskService from "./services/TaskService";
import UserService from "./services/UserService";
import { askNonEmpty } from "./utils/AskNonEmpty";

function addUser() {
    const name = askNonEmpty("Nhập tên: ", "string") as string;
    const email = askNonEmpty("Nhập email: ", "string", true) as string;
    const user = new User(name, email);
    UserService.addUser(user);
    console.log("Thêm người dùng thành công\n");
}

function showAllUser() {
    const users = UserService.getAllUsers();
    const table = users.map(user => ({
        name: user.getName(),
        email: user.getEmail()
    }));
    console.table(table)
    console.log("\n")
}

function showAllTask() {
    const tasks = TaskService.getAllTasks();
    const table = tasks.map(task => ({
        name: task.getName(),
        status: task.getStatus(),
        dueDate: task.getDueDate(),
        assignee: UserService.getUserById(task.getAssigneeId())?.getName()
    }));
    console.table(table)
    console.log("\n")
}

function showAllProject() {
    const projects = BoardService.getAllBoards();
    const table = projects.map(project => ({
        name: project.getName(),
        createBy: UserService.getUserById(project.getCreateBy())?.getName(),
        tasks: project.getTasks().map(taskId => TaskService.getTaskById(taskId)?.getName()).join(", ")
    }));
    console.table(table)
    console.log("\n")
}

function addTaskWithNewProject() {
    showAllUser();
    const userName = askNonEmpty("Nhập tên người tao task: ", "string") as string;
    const assignee = askNonEmpty("Nhập tên người thực hiện task: ", "string") as string;
    const boardName = askNonEmpty("Nhập tên project: ", "string") as string;
    showAllTask();
    const taskName = askNonEmpty("Nhập tên task: ", "string") as string;
    const description = askNonEmpty("Nhập mô tả: ", "string") as string;
    const dueDate = askNonEmpty("Nhập ngày hạn: ", "string") as string;
    const user = UserService.getUserByName(assignee);
    if(!user){
        console.log("Người thực hiện task không tồn tại");
    }
    const task = new Task(taskName,description,"todo",dueDate,user ? user.getId() : "");
    TaskManagerService.addTaskWithNewProject(task, boardName, userName);
    console.log("Thêm task thành công!\n");
}

function addTaskWithExistingProject() {
    showAllUser();
    const boardName = askNonEmpty("Nhập tên project: ", "string") as string;
    const assignee = askNonEmpty("Nhập tên người thực hiện task: ", "string") as string;
    showAllTask();
    const taskName = askNonEmpty("Nhập tên task: ", "string") as string;
    const description = askNonEmpty("Nhập mô tả: ", "string") as string;
    const dueDate = askNonEmpty("Nhập ngày hạn: ", "string") as string;
    const user = UserService.getUserByName(assignee);
    if(!user){
        console.log("Người thực hiện task không tồn tại");
    }
    const task = new Task(taskName,description,"todo",dueDate,user ? user.getId() : "");
    TaskManagerService.addTaskWithExistingProject(task, boardName);
    console.log("Thêm task thành công!\n");
}

function updateTask() {
    showAllTask();
    const taskName = askNonEmpty("Nhập tên task: ", "string") as string;
    const states = ["todo", "in-progress", "done"];
    console.log("Chọn trạng thái mới cho task:");
    states.forEach((state, idx) => {
        console.log(`\t${idx + 1}. ${state}`);
    });
    let stateIdx: number;
    while (true) {
        stateIdx = askNonEmpty("Nhập số lựa chọn (1-3): ", "number") as number;
        if (stateIdx >= 1 && stateIdx <= 3) break;
        console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
    const taskStatus = states[stateIdx - 1];
    TaskManagerService.updateTask(taskName, taskStatus);
    console.log("Cập nhật trạng thái thành công!\n");
}

function assignTask() {
    showAllTask();
    const taskName = askNonEmpty("Nhập tên task: ", "string") as string;
    showAllUser();
    const assignee = askNonEmpty("Nhập tên người thực hiện task: ", "string") as string;
    TaskManagerService.assignTask(taskName, assignee);
    console.log("Gán task thành công!\n");
}

function main() {
    while (true) {
        
        console.log("1. Show All user");
        console.log("2. Show all task");
        console.log("3. Show all project");
        console.log("4. Add user");
        console.log("5. Add task with new project");
        console.log("6. Add task with existing project");
        console.log("7. Update Task");
        console.log("8. Assign a task");
        console.log("0. Thoát");
        const choice = askNonEmpty("Nhập lựa chọn: ", "string") as string;
        switch (choice) {
            case "0":
                console.log("Thoát chương trình");
                process.exit(0)
                break;
            case "1":
                showAllUser();
                break;
            case "2":
                showAllTask();
                break;
            case "3":
                showAllProject();
                break;
            case "4":
                addUser();
                break;
            case "5":
                addTaskWithNewProject();
                break;
            case "6":
                addTaskWithExistingProject();
                break;
            case "7":
                updateTask();
                break;
            case "8":
                assignTask();
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }
}

main();