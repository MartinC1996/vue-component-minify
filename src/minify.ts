import * as vscode from 'vscode';
import * as path from 'path';
import { config } from './config';
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

    // Save new file
    const outPath = getOutPath(doc);

    try{
        fs.writeFileSync(outPath, text, { encoding: 'utf8' });
        // vscode.window.showInformationMessage('Minify done!');
    }catch (e){
        vscode.window.showErrorMessage('Failed to write to file. Does the output path exist?');
    }
    
 
    
    

}