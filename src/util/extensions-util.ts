import * as vscode from 'vscode';

export const registerCommand = (commandKey: string, replaceFunction: Function) => {
	return vscode.commands.registerCommand(commandKey, () => {
		const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            editor.edit(editBuilder => {
                editor.selections.forEach(sel => {
                    const range = sel.isEmpty ? document.getWordRangeAtPosition(sel.start) || sel : sel;
                    const word = document.getText(range);
                    const camelCaseStartMayus = replaceFunction(word);
                    editBuilder.replace(range, camelCaseStartMayus);
                });
            });
        }
	});
};