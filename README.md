# README

# Reqnroll/Specflow Step Definition Generator (With AI Assitant)

```Reqnroll/Specflow Step Definition Generator``` is a tool to generate the SpecFlow step definition(s) in VS Code with familiar Visual Studio IDE experince with additional options togenerate full Binding class. With SpecFlow retiring now this extension has suport for and Reqnroll new Dotnet BDD framework. 
Now with this latest version it comes with configurable AI Assistant

## Getting started: Setting up SpecFlow in VS Code IDE
[Configure VS Code for Running BDD Tests](https://medium.com/@uppadhyayraj/specflow-integration-in-vs-code-single-ide-across-different-platforms-dac954aedf9e)

# Disclaimer

```The developer of this tool is not liable for any unintended effects resulting from its use. The end user assumes full liability for any consequences arising from the use of this tool. Considering data security, this tool only supports local LLM and does not utilize services such as ChatGPT or other external LMMs.```

## Configuring which Dotnet BDD Framework to use?
This extension now supports both SpecFlow for existing projects and Reqnroll for new projects using dotnet BDD. It is configured to use SpecFlow by default. To use Reqnroll, follow these steps:
1. Upgrade the extension to the latest version.
2. Navigate to the VS Code settings page.
3. Search for "Dotnet BDD" and then Select the "Dotnet BDD Step Definition Generator" under Extensions, then from Right hand side you will be able to a field to select teh BDD framework
![New Setting for Selecting the BDD Framework e.g. SpecFlow or Reqnroll](https://raw.githubusercontent.com/uppadhyayraj/specflowstepsgenerator/main/images/newsetting.png)
4. Change this value to "Reqnroll" and save the settings.

## Ready to Unleash the Power of AI Magic? Yes! follow steps given below:
This tool utilizes a Local LLM to prioritize the security of your solution and data incorporated into automation. This approach offers numerous advantages, including:
- **Enhanced Control**: Maintain complete control over LLM usage.
- **Data Security**: Prevent data leaks by eliminating the need to share data outside your organization.
- **Privacy**:  No requirement to grant AI agents permissions to your machine.
- **Offline Functionality**: Use the tool offline without an internet connection.


### Pre-Requisites for Using AI Assitant
1. Need around 19 GB for LLM Model and other system requirements please refer: https://ollama.com/hhao/qwen2.5-coder-tools:32b 
2. **Install Ollama CLI**: Follow instructions specific to your OS as given here: https://ollama.com/download
3. **Download Codellama Model**: Post successful installation of Ollama, Run following in your terminal (for Mac/Linux) or in Command Prompt on windows.
```bash
ollama pull hhao/qwen2.5-coder-tools:32b
```

### Enabling the AI Assitant
- On the same setting page (as used above to select the BDD Framework), look for "Need AIAssistant" setting (By Default it is unchecked), check it to have AI in action
![New AI Assistant Setting for Generating Step Definition](https://raw.githubusercontent.com/uppadhyayraj/specflowstepsgenerator/main/images/AIAssitant.png)


## Different options available to Generate the Step Definition:
 - [a] - Generate step definition for the selected step(s) with class definition in Clipborad or click ```CTRL+SHIFT+1```
 - [b] - Generate step definition by creating a class with step definitions for the selected step(s) in a file selected by user or use ```CTRL+ALT+2``` as shortcut keys
 - [c] - Generate step definition by copy to clipboard or alternatively use keys ```CTRL+ALT+3```

## Using the extension:
1. Open any ```.feature``` file in vs code editor
2. Select the step(s) which needs to generate step definition(s)
3. Right click on the editor and select the appropriate option to generate the Step Definition(s)
![Various Options to Generate Step Definition(s)](https://raw.githubusercontent.com/uppadhyayraj/specflowstepsgenerator/main/images/Options.png)
4. If you select "BDD Step Definition - Generate Class to Clipboard", it will copy the steps definition method(s) along with complete class structure in Clipboard. 
    ```Note: This option is useful when you wanted to create a new step definition file from scratch.```
5. In case you have selected the option "BDD Step Definition - Generate to Clipboard", it will only copy the steps definition method(s) to clipboard. 
    ```Note: This option is recommended when you wanted to copy selected method(s) to an existing file.```
6. If you select the option "BDD Step Definition - Generate in an existing file", then it will show the option for searching and selecting an existing C# class file and override the file contents with copied step definitions along with full class structure. 
    ```Note: This option is useful when you wanted to create a new step definition file from scratch after you have already created skeleton for your solution.```

## Future Enhancements/Known Bugs:

- In Non AI Assitant mode - Handling Table paramemter in step deinition currently it is not adding Table parameter in step definition.
- Existing Steps Definition checking while generating steps definitions.
- Fixed <del>Default variable type is appearing as string, workaround is to update post steps generation. Will be adding a configuration for override the default type and set it as "dynamic" so that it works well.</del>


## Release Notes:
## [2.1.0]
- Added AI Assitant powered by local LLM

## [2.0.0]
- Extented Extension to Generate Step Definitions for Reqnroll Framework aong with compatibility for SpecFlow

## [1.0.5]
- Removal of punctuations from Method names

### 1.0.4
Fixed the issue "Default variable type is appearing as string". Now step bindings correctly picking up string and numbers.

### 1.0.0:

Initial release
