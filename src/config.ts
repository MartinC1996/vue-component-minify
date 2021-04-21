import * as vscode from 'vscode';

class Config {

    // General
    minifyOnSave: boolean | 'yes' | 'no';
    jsMinPath: string;
    jsPostfix: string;

    constructor() {

        const conf: Config = JSON.parse(JSON.stringify(vscode.workspace.getConfiguration('vue-component-minify')));

        // General
        this.minifyOnSave = conf.minifyOnSave;
        this.jsMinPath = conf.jsMinPath;
        this.jsPostfix = conf.jsPostfix;
    }

}

export function reloadConfig(external: boolean): void {
    config = new Config();
}

export let config = new Config();