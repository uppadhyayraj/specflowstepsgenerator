"use strict";
import * as vscode from "vscode";

export class Utility {
    public static getConfiguration(): vscode.WorkspaceConfiguration {
        return vscode.workspace.getConfiguration("stepGenerator");
    }

    public static generateFile(filePath: String) {
        let _unitTestProvider = Utility.getConfiguration().get<string>("unitTestProvider");
        let filetowork = filePath;
        let fs = require('fs');
        let data = fs.readFileSync(filetowork,
            { encoding: 'utf8', flag: 'r' });
            if(_unitTestProvider.toLowerCase()=='mstest')
            {
                data = data.match(/using(.*(?:\n(?!$).*)*)}*(?=Stack)/g);
                data = data.match(/using(.*(?:\n(?!$).*)*)}*(?=Stack)/g);
            }
            if(_unitTestProvider.toLowerCase()=='nunit')
            {
                data = data.match(/using(.*(?:\n(?!$).*)*)}*(?=Skipped)/g);
            }
        fs.writeFileSync(filetowork, data.toString());
    }
}
