import  Base  from "./Base";

export default class Task extends Base {
    private description: string;
    private status: 'todo' | 'in-progress' | 'done';
    private dueDate: string;
    private assigneeId: string;

    constructor(name: string, description: string, status: 'todo' | 'in-progress' | 'done', dueDate: string, assigneeId: string,id?:string) {
        super(name,id);
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
        this.assigneeId = assigneeId;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): 'todo' | 'in-progress' | 'done' {
        return this.status;
    }

    public getDueDate(): string {
        return this.dueDate;
    }

 

    public setDescription(description: string): void {
        this.description = description;
    }

    public setStatus(status: 'todo' | 'in-progress' | 'done'): void {
        this.status = status;
    }

    public setDueDate(dueDate: string): void {
        this.dueDate = dueDate;
    }

    public getAssigneeId(): string {
        return this.assigneeId;
    }

    public setAssigneeId(assigneeId: string): void {
        this.assigneeId = assigneeId;
    }

   
}
