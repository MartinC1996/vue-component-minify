import * as vscode from 'vscode';
import { config, reloadConfig } from './config';
import { minify } from './minify';
import { getFileExtension } from './utils';

export function activate(context: vscode.ExtensionContext) {
	
	reloadConfig(true);

	let loadConfig = vscode.commands.registerCommand('vue-component-minify.loadConfig', () => {

		reloadConfig(true);
		vscode.window.showInformationMessage('vue-component-minify reload config!');
	});

	let minifyDoc = vscode.commands.registerCommand('vue-component-minify.minifyDoc', () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage('No document open.');
			return;
		}

		if (editor.document.isUntitled) {
			vscode.window.showErrorMessage('File must be saved before it can be minified.');
			return;
		}

		if(getFileExtension(editor.document.fileName) === "vue"){
			minify(editor.document);		
		}
	});
	
	let minifyDocOnSave = vscode.workspace.onDidSaveTextDocument(doc => {

		if (config.minifyOnSave === false || config.minifyOnSave === 'no') {
			return;
		}
	
		if(getFileExtension(doc.fileName) === "vue"){
			minify(doc);		
		}

	});

	context.subscriptions.push(minifyDoc);
	context.subscriptions.push(minifyDocOnSave);
	context.subscriptions.push(loadConfig);
}

export function deactivate() {}
