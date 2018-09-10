# Debugging Create React App Applications in Visual Studio Code

In this post, we are going to create an Create React App application, then add configuration to debug it in Visual Studio Code.

[Watch on YouTube](https://youtu.be/OlwIDANNpOc)

https://youtu.be/OlwIDANNpOc

### TLDR - For an Create React App application, create a debug configuration in VS Code, install the Debugger for Chrome extension, then run in debug mode.

### Learn VS Code

![Learn VS Code](https://cdn.scotch.io/62245/UkCZCYQ0QLqjNHjpDl6w_1.png)

> ### If you're interested in learning more about VS Code, you definitely want to check out the upcoming **_[Learn VS Code](http://learnvscode.com/)_** course.

## Creating a Starter Project

To be able to test an Create React App application, you need an Create React App application :) I'll provide the basic steps, but for more reference on how to get started look at the [Create React App page](https://github.com/facebook/create-react-app).

![Create React App](https://cdn.scotch.io/62245/pgDrt4WUS5OCjAjiwRqU_2.png)

First, you'll need to install the Create React App.

`npm install -g create-react-app`

After that finishes, you'll need to actually generate your new application. This will take a bit as it needs to install LOTS of NPM packages.

`create-react-app my-app`

Open the project in VS Code and you should see the following.

![Create React App Project in VS Code](https://cdn.scotch.io/62245/QCY4gRTTcqUDUMzfXq9Q_3.png)

Now, that you've got your new fancy React app, go ahead and run it to make sure everything looks right.

`npm start`

Should look like this.

![Create React App App Running](https://cdn.scotch.io/62245/PquD776R6CONivUMG55F_4.png)

## Creating Debug Configuration

Assuming you've made it this far, we are ready to start debugging! Before we do, however, it's worth understanding how configuring debugging in VS Code works. Basically debug configurations are saved in a **_launch.json_** file which is stored inside of a **_.vscode_** folder. This **_.vscode_** folder is used to store different configurations for Code including our required debugging stuff.

Before you create your debug configuration, you need to install the **_Debugger for Chrome_** extension. Find and install this extension from the extension tab in VS Code. After installing, reload VS Code.

![Debugger for Chrome](https://cdn.scotch.io/62245/WZgrhkvR0CNTdYsMSnIA_5.png)

Now, to create a debug configuration, you can open the debug panel (the bug looking button on the left panel). At the top of the debug panel, you should see a dropdown that says "No Configurations".

![Create Debug Configurations](https://cdn.scotch.io/62245/S8hr5NUNSFStY52t7biI_6.png)

To the right of that dropdown, there is a gear icon. Click this button to have VS Code automatically generate that `.vscode` folder and `launch.json` file mentioned above.

Then choose Chrome.

You should get the following configuration created for you.

![Create React App Debug Configuration](https://cdn.scotch.io/62245/iLhJDeovSw6MtkadCJKM_8.png)

The only thing we need to do is update the port from 8080 to 3000.

![Updated Create React App Debug Configuration](https://cdn.scotch.io/62245/FUxKbG9UQWqYEMiOtwlF_9.png)

## Let's Debug

Now we're ready! Go ahead and click the play button at the top of the Debug panel which will launch an instance of Chrome in debug mode. Keep in mind your app should already be running from using **_ng serve_** earlier. In VS Code, you should see the Debug toolbar pop up.

![](https://cdn.scotch.io/62245/9MoTDGpBRhCMAahP9P6D_10.png)

With this up and running, you can set a breakpoint in your App.js. Open up your App.js and add a breakpoint inside of the render function by clicking in the gutter (to the left of the line numbers). Should look like this.

![](https://cdn.scotch.io/62245/Xhj0yPHVSQeGw5gvsFKZ_11.png)

Now, refresh debugging by clicking the refresh button on the debugging toolbar. This should open your application again and trigger this breakpoin. You should be directed back to VS Code directly to the place where you set your breakpoint.

![](https://cdn.scotch.io/62245/jKo1bnK6RPW253t8CTlo_12.png)

From here, you can set more breakpoints, inspect variables, etc. If you are interested in learning more about debugging JavaScript in general in either Chrome or VS Code you can check out [Debugging JavaScript in Chrome and Visual Studio Code](https://scotch.io/tutorials/debugging-javascript-in-google-chrome-and-visual-studio-code).

Again, if you're interested in learning more about VS Code, you'll definitely want to check out the upcoming **_[Learn VS Code](http://learnvscode.com/)_** course.

If you have any follow up questions or comments, leave one below of find me on twitter **@jamesqquick**.

For video content, check out my **_[YouTube Channel](https://www.youtube.com/c/jamesqquick)_**
