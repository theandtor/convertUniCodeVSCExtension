// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { registerCommandCamelCaseStartLower, registerCommandCamelCaseStartMayus } from './extensions/camelCase';
import { registerCommandKebabCase } from './extensions/htmlCase';
import { registerCommandScreamingSnakeCase, registerCommandSnakeCase } from './extensions/snakeCase';
import { registerCommandUnicode } from './extensions/unicode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "unicodeconverterfiles" is now active!');

	context.subscriptions.push(registerCommandUnicode());
	context.subscriptions.push(registerCommandCamelCaseStartMayus());
	context.subscriptions.push(registerCommandCamelCaseStartLower());
	context.subscriptions.push(registerCommandSnakeCase());
	context.subscriptions.push(registerCommandScreamingSnakeCase());
	context.subscriptions.push(registerCommandKebabCase());

}

// This method is called when your extension is deactivated
export function deactivate() {}
