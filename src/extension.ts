'use strict';

import * as vscode from 'vscode';

import { DepNodeProvider, Dependency } from './nodeDependencies';

export function activate(context: vscode.ExtensionContext) {

	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
	? vscode.workspace.workspaceFolders[0].uri.fsPath:undefined;

	const nodeDependenciesProvider = new DepNodeProvider(rootPath);

	vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
	//vscode.commands.registerCommand('nodeDependencies.Kiptoo',() => nodeDependenciesProvider.refresh());

	let disposable = vscode.commands.registerCommand('nodeDependencies.Kiptoo', () => {

		vscode.window.showInformationMessage('Hello World from helloworldkiptoo!');
		nodeDependenciesProvider.refresh();
	});

	context.subscriptions.push(disposable);
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
