import Task from "./Task";
import Base from "./Base";

class Board extends Base {
    private createBy : string;
    private tasks: Task[];
    constructor( name: string, createBy: string, tasks: Task[]) {
        super(name);
        this.createBy = createBy;
        this.tasks = tasks;
    }

    public getCreateBy(): string {
        return this.createBy;
    }

    public setCreateBy(createBy: string): void {
        this.createBy = createBy;
    }

    public getTasks(): Task[] {
        return this.tasks;
    }
    
    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    public removeTask(task: Task): void {
        const index = this.tasks.findIndex(t => t.getId() === task.getId());
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    public getTaskById(id: string): Task | null {
        return this.tasks.find(t => t.getId() === id) || null;
    }
    
}

export default Board;