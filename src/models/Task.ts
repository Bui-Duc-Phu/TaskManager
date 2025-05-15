import Base from "./Base";

class Task extends Base {
    private description: string;
    private status: 'todo' | 'in-progress' | 'done';
    private dueDate: Date;
    private assignee: string;
    private boardId: string;
    constructor(id: string, name: string, description: string, status: 'todo' | 'in-progress' | 'done', dueDate: Date, assignee: string, boardId: string) {
        super(id, name);
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
        this.assignee = assignee;
        this.boardId = boardId;
    }

    public getDescription(): string {
        return this.description;
    }
    
    public getStatus(): 'todo' | 'in-progress' | 'done' {
        return this.status;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }
    
    public getAssignee(): string {
        return this.assignee;
    }

    public getBoardId(): string {
        return this.boardId;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setStatus(status: 'todo' | 'in-progress' | 'done'): void {
        this.status = status;
    }

    public setDueDate(dueDate: Date): void {
        this.dueDate = dueDate;
    }

    public setAssignee(assignee: string): void {
        this.assignee = assignee;
    }

    public setBoardId(boardId: string): void {
        this.boardId = boardId;
    }
    

    
}

export default Task;
