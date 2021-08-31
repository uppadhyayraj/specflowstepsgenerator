# SpecFlow Step Generator for .Net Core Projects

Fast way to generate SpecFlow steps defnition from VS Code UI, support MSTest and NUnit .NET Core (C#) project

## Prerequisites

* [.NET Core](https://www.microsoft.com/net/core) is installed

## Usage

* Open a .NET Core SplecFlowproject
* Open feature file(s) write new steps in the file
* Make sure to add tag @newtest (it is important) and save the file.
* Right click on a `.feature`, file, and select "Generate Steps Definition" command from context menu.
* This will generate a CS file with steps definiton in the project folder, you can use this file and move/update as required.

![Step Generator](/images/usageDes.png)

## Configurations

By default, following settings are configured to run the extension, update the settings.json as below as required:
```json
{
    "stepGenerator.unitTestProvider": "mstest",
    "stepGenerator.defaultClassName":"StepDefinitions.cs"
}
```

## Change Log

See Change Log [here](CHANGELOG.md)

## Issues

Currently, the extension is in the very initial phase. 
Currently there is one issue in MSTest generation i.e. sometimes it generates the class and sometimes it is just copy the raw text in the class.

# Workaround for issue
Workaround is simple, just extract your steps from the file and delete other contents.

If you find any bug or have any suggestion/feature request, please submit the [issues](https://github.com/uppadhyayraj) to the GitHub Repo.
