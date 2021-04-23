import * as vscode from 'vscode';
import { config } from './config';
import * as path from 'path';

export function getOutPath(doc: vscode.TextDocument): string {

    const file = {
        basename: path.basename(doc.uri.fsPath),
        extname: path.extname(doc.uri.fsPath),
        dirname: path.dirname(doc.uri.fsPath),
        languageId: doc.languageId
    };

    let outNameParts = file.basename.split('.');

    outNameParts.pop();

    if(config.useBasePath === "no"){
        outNameParts.push(config.postfix);
    }
    
    outNameParts.push(file.extname.replace('.', ''));
    const baseOut = outNameParts.join('.');

    let outPath: string;
    if(config.useBasePath === "no"){
        if (config.minPath && vscode.workspace.workspaceFolders) {
            outPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, config.minPath, baseOut);
        } else {
            outPath = path.join(file.dirname, baseOut);
        }
    }else{
        if(file.dirname.endsWith("\\src")){
            outPath = path.join(file.dirname.replace('\\src', '\\'), baseOut);
        }else{
            outPath = path.join(file.dirname.replace('\\src\\', '\\'), baseOut);
        }
    }

    return outPath;
}

export function getFileExtension(filename: string): string{
    let fileExt = filename.split('.').pop();
    if (fileExt === undefined){
        fileExt = "";
    }
    return fileExt;
}

export function isInFolder(filePath: String, folderName: string): boolean{

    return filePath.includes("\\" + folderName + "\\") || filePath.endsWith("\\" + folderName); 
}