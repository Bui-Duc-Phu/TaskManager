
import Task from "../models/Task";
import User from "../models/User";
import { readFileJSON, writeFileJSON } from "../utils/HandlerJSON";
import { MyPaths } from "../utils/MyPaths";


export default class TaskService {

    public static getAllTasks(): Array<Task> {
        const tasksData = readFileJSON(MyPaths.DATA_DIR, MyPaths.Task_FILE) as Array<any>;
        return tasksData.map(t => new Task(t.name, t.description, t.status, t.dueDate, t.assigneeId,t.id));
    }

    public static isExist(name: string): boolean {
        const tasks = this.getAllTasks();
        return tasks.some(t => t.getName() === name);
    }

    public static addTask(task: Task): void {
        const tasks = this.getAllTasks();
        if(this.isExist(task.getName())){
            return;
        }
        tasks.push(task);
        writeFileJSON(tasks, MyPaths.DATA_DIR, MyPaths.Task_FILE);
    }

    public static getTaskById(id: string): Task | null {
        const tasks = this.getAllTasks();
        return tasks.find(t => t.getId() === id) || null;
    }

    public static getTaskByName(name: string): Task | null {
        const tasks = this.getAllTasks();
        return tasks.find(t => t.getName() === name) || null;
    }

    public static updateTask(task: Task): void {
        const tasks = this.getAllTasks();
        const index = tasks.findIndex(t => t.getId() === task.getId());
        if(index !== -1){
            tasks[index] = task;
            writeFileJSON(tasks, MyPaths.DATA_DIR, MyPaths.Task_FILE);
        }
    }



}