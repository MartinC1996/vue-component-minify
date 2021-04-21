import * as vscode from 'vscode';
import * as path from 'path';
import { config } from './config';
import { getOutPath } from './utils';
import * as fs from 'fs';

export function minify(doc: vscode.TextDocument): void {

    const text = doc.getText();
    const baseName = path.basename(doc.fileName);

    // Minify
    const outPath = getOutPath(doc);
    fs.writeFileSync(outPath, doc.getText(), { encoding: 'utf8' });

    // const minifier = new EsMinifier(config.js);
    // const res = minifier.minify(text, baseName, {
    //     outFileName: path.basename(outPath),
    //     jsMapSource: config.jsMapSource
    // });
    // if (res.success) {
    //     try {
    //         if (config.genJSmap === true || config.genJSmap === null) {
    //             new File(`${outPath}.map`).write(res.output.map);
    //         }
    //         new File(outPath).write(res.output.code);
    //         statusBar.showStats(res.efficiency);
    //         output.printMinifyResult(`${baseName}`, res);
    //         if (res.warnings.length && config.showLogOnWarning) {
    //             output.show();
    //         }
    //     } catch (e) {
    //         vscode.window.showErrorMessage('Failed to write to file. Does the output path exist?');
    //     }
    // } else if (config.showLogOnError) {
    //     output.printMinifyResult(`${baseName}`, res);
    //     output.show();
    // } else {
    //     output.printMinifyResult(`${baseName}`, res);
    // }
       

 
    vscode.window.showInformationMessage('vue-component-minify minify done!');
    

}