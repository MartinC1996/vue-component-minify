import * as vscode from 'vscode';

class Config {

    // General
    minifyOnSave: boolean | 'yes' | 'no';
    minPath: string;
    postfix: string;
    useBasePath: boolean |'yes' | 'no';

    constructor() {

        const conf: Config = JSON.parse(JSON.stringify(vscode.workspace.getConfiguration('vue-component-minify')));

        this.minifyOnSave = conf.minifyOnSave;
        this.minPath = conf.minPath;
        this.postfix = conf.postfix;
        this.useBasePath = conf.useBasePath;
    }

}

export function reloadConfig(external: boolean): void {
    config = new Config();
}

export let config = new Config();