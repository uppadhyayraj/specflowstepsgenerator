"use strict";
import * as path from "path";
import * as vscode from "vscode";
import { AppInsightsClient } from "./appInsightsClient";
import { Executor } from "./executor";
import { Utility } from "./utility";

export class Dotnet {
    public static generatesteps(fileUri: vscode.Uri, filePath:String) {
        if (fileUri) {
            let command = 'dotnet test --filter TestCategory=newtest --logger:"console;verbosity=detailed" > ' + filePath;
            Executor.runInTerminal(command);
        }
    }
    public static generateFile(filePath: String)
    {
        Utility.generateFile(filePath);
    }

}
