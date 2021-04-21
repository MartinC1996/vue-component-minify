import * as vscode from 'vscode';
import { config, reloadConfig } from './config';
import { minify } from './minify';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vue-component-minify" is now active!');
	
	reloadConfig(true);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let minifyDoc = vscode.commands.registerCommand('vue-component-minify.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from vue-component-minify!');
	});

	let loadConfig = vscode.commands.registerCommand('vue-component-minify.loadConfig', () => {

		reloadConfig(true);
		vscode.window.showInformationMessage('vue-component-minify reload config!');
	});
	
	let minifyDocOnSave = vscode.workspace.onDidSaveTextDocument(doc => {
		vscode.window.showInformationMessage('aaaa!');

		if (config.minifyOnSave === false || config.minifyOnSave === 'no') {
			vscode.window.showInformationMessage('aaaa!');
			return;
		}
	
		minify(doc);		

	});

	context.subscriptions.push(minifyDoc);
	context.subscriptions.push(minifyDocOnSave);
	context.subscriptions.push(loadConfig);
}

// this method is called when your extension is deactivated
export function deactivate() {}
