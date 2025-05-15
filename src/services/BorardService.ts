import Board from "../models/Board";
import { readFileJSON, writeFileJSON } from "../utils/HandlerJSON";
import { MyPaths } from "../utils/MyPaths";


export default class BoardService {


    
    public static getAllBoards(): Array<Board> {
        const boardsData = readFileJSON(MyPaths.DATA_DIR, MyPaths.Board_FILE) as Array<any>;
        return boardsData.map(b => new Board(b.name, b.createBy, b.tasks,b.id));
    }

    public static isExist(name: string): boolean {
        const boards = this.getAllBoards();
        return boards.some(b => b.getName() === name);
    }


    public static addBoard(board: Board): void {
        const boards = this.getAllBoards();
        if(this.isExist(board.getName())){
            return;
        }
        boards.push(board);
        writeFileJSON(boards, MyPaths.DATA_DIR, MyPaths.Board_FILE);
    }


    public static getBoardById(id: string): Board | null {
        const boards = this.getAllBoards();
        return boards.find(b => b.getId() === id) || null;
    }

    public static getBoardByName(name: string): Board | null {
        const boards = this.getAllBoards();
        return boards.find(b => b.getName() === name) || null;
    }

    public static updateBoard(board: Board): void {
        const boards = this.getAllBoards();
        const index = boards.findIndex(b => b.getId() === board.getId());
        if(index !== -1){
            boards[index] = board;
            writeFileJSON(boards, MyPaths.DATA_DIR, MyPaths.Board_FILE);
        }
    }

     
}


