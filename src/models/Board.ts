
import  Base  from "./Base";

export default class Board extends Base {
    private createBy : string;
    private tasks: string[];
    constructor( name: string, createBy: string, tasks: string[],id?:string) {
        super(name,id);
        this.createBy = createBy;
        this.tasks = tasks;
    }

    public getCreateBy(): string {
        return this.createBy;
    }

    public setCreateBy(createBy: string): void {
        this.createBy = createBy;
    }

    public getTasks(): string[] {
        return this.tasks;
    }

    public setTasks(tasks: string[]): void {
        this.tasks = tasks;
    }
 
    
}