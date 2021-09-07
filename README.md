# README

# Specflow Step Definition Generator

```Specflow Step Definition Generator``` is a tool to generate the SpecFlow step definition in VS Code with familiar Visual Studio IDE experince with additional options togenerate full Binding class.

## Getting started: Setting up SpecFlow in VS Code IDE
[Configure VS Code for Running SpecFlow Tests](https://medium.com/@uppadhyayraj/specflow-integration-in-vs-code-single-ide-across-different-platforms-dac954aedf9e)
## Different options available to Generate the Step Definition:
 - [a] - Generate step definition for the selected step(s) with class definition in Clipborad or click ```CTRL+SHIFT+1```
 - [b] - Generate step definition by creating a class with step definitons for the selected step(s) in a file selected by user or use ```CTRL+ALT+2``` as shortcut keys
 - [c] - Generate step definition by copy to clipboard or alternatively use keys ```CTRL+ALT+3```

## Using the extension:
1. Open any ```.feature``` file in vs code editor
2. Select the step(s) which needs to generate step definition(s)
3. Right click on the editor and select the appropriate option to generate the Step Definition(s)
![Various Options to Generate Step Definition(s)](https://raw.githubusercontent.com/uppadhyayraj/specflowstepsgenerator/main/images/usage.png)
4. If you select "SpecFlow Step Definition - Generate Class to Clipboard", it will copy the steps definition method(s) along with complete class structure in Clipboard. 
    ```Note: This option is useful when you wanted to create a new step definition file from scratch.```
5. In case you have selected the option "SpecFlow Step Definition - Generate to Clipboard", it will only copy the steps definition method(s) to clipboard. 
    ```Note: This option is recommended when you wanted to copy selected method(s) to an existing file.```
6. If you select the option "SpecFlow Step Definition - Generate in an existing file", then it will show the option for searching and selecting an existing C# class file and override the file contents with copied step definitions along with full class structure. 
    ```Note: This option is useful when you wanted to create a new step definition file from scratch after you have already created skeleton for your solution.```

## Future Ahead/Known Bugs:

- Handling Table paramemter in step deinition currently it is not adding Table parameter in step definition.
- Existing Steps Definition checking while generating steps definitons.
- Default variable type is appearing as string, workaround is to update post steps generation. Will be adding a configuration for override the default type and set it as "dynamic" so that it works well.


## Release Notes:

Notes for the released versions

### 1.0.0:

Initial release
