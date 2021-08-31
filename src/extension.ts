"use strict";
import * as vscode from "vscode";
import { Dotnet } from "./dotnet";
import { Executor } from "./executor";
import { Utility } from "./utility"; 
import * as Path from "path";


export function activate(context: vscode.ExtensionContext) {
    let _stepDefinitonFolderName = Utility.getConfiguration().get<string>("stepDefinitonFolderName");
    let _defaultClassName = Utility.getConfiguration().get<string>("defaultClassName");
    context.subscriptions.push(vscode.commands.registerCommand("dotnet.generatesteps", (fileUri: vscode.Uri) => {

        let stepDefFileName = Path.join(vscode.workspace.workspaceFolders[0].uri.path,_defaultClassName);
        let fs =  require('fs');
        Dotnet.generatesteps(fileUri,_defaultClassName);
        return new Promise((resolve, reject) => setTimeout(function(){
        // Assert here.
        if(fs.existsSync(stepDefFileName)){
              
            Dotnet.generateFile(stepDefFileName);
            resolve(0);  
        }
        reject();
      }, 25000));
    }));

    //Dotnet.generateFile(Path.join(vscode.workspace.workspaceFolders[0].uri.path,Utility.getConfiguration().get<string>("defaultClassName")));
    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal: vscode.Terminal) => {
        Executor.onDidCloseTerminal(closedTerminal);
    }));
}

export function deactivate() {
}
