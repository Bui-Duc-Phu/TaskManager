import fs from 'fs';

function writeFileJSON(data:any,dirPath:string,filePath:string):void{
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readFileJSON(dirPath:string,filePath:string): {}{
 
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
        return {};
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}



export {writeFileJSON,readFileJSON};