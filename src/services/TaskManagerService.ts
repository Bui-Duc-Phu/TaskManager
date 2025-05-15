import Board from "../models/Board";
import Task from "../models/Task";
import BoardService from "./BorardService";
import TaskService from "./TaskService";
import UserService from "./UserService";

export default class TaskManagerService {
    private static addBoardIfNotExist(boardName: string, userId: string, taskId: string): Board {
        let board = BoardService.getBoardByName(boardName);
        if (!board) {
            board = new Board(boardName, userId, [taskId]);
            BoardService.addBoard(board);
        }
        return board;
    }

    private static addTaskToBoard(board: Board, taskId: string): void {
        board.getTasks().push(taskId);
        BoardService.updateBoard(board);
    }

    public static addTaskWithNewProject(task: Task, boardName: string, userName: string): boolean {
        const user = UserService.getUserByName(userName);
        if (!user) {
            console.log("User not found");
            return false;
        }

        let board = BoardService.getBoardByName(boardName);
        if (!board) {
            board = this.addBoardIfNotExist(boardName, user.getId(), task.getId());
        } else {
            this.addTaskToBoard(board, task.getId());
        }

        TaskService.addTask(task);
        return true;
    }

    public static addTaskWithExistingProject(task: Task, boardName: string): boolean {
        const board = BoardService.getBoardByName(boardName);
        if (!board) {
            console.log("Board not found");
            return false;
        }

        this.addTaskToBoard(board, task.getId())
        ;
        TaskService.addTask(task);
        return true;
    }

    public static updateTask(taskName: string, taskStatus: string): void {
        const task = TaskService.getTaskByName(taskName);
        if (!task) {
            console.log("Task not found");
            return;
        }
        task.setStatus(taskStatus as "todo" | "in-progress" | "done");
        TaskService.updateTask(task);
    }
}
