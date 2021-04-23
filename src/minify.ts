import * as vscode from 'vscode';
import { getOutPath } from './utils';
import * as fs from 'fs';

export function minify(doc: vscode.TextDocument): void {

    var text = doc.getText();
    
    //delete js comments
    text = text.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim();

    //delete new line 
    text = text.replace(/(\r\n|\n|\r)/gm, "");
    
    //delete html comments
    text = text.replace(/<\!--.*?-->/g, "");
                        
    //delete tabs, multiple space 
    text = text.replace(/\t/g, '');
    text = text.replace(/\s{2,}/g, ' ');

    const outPath = getOutPath(doc);
    const dirPath = outPath.substring(0,outPath.lastIndexOf("\\")+1);

    //create folder structure if doesnt exist
    if(!fs.existsSync(dirPath)){
        try{
            fs.mkdirSync(dirPath);
        }catch (e){
            vscode.window.showErrorMessage('Failed to write to file. Does the output path exist?');
        }    
    }

    //save file
    try{
        fs.writeFileSync(outPath, text, { encoding: 'utf8' });
    }catch (e){
        vscode.window.showErrorMessage('Failed to write to file. Does the output path exist?');
    }
    
 
    
    

}