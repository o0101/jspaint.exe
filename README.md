
<p align=center>
  <img width=150 alt="Grader.JS logo image" src=https://github.com/c9fe/graderjs/raw/master/.readme-assets/grader_logo.png>
  X
  <img width=150 alt="JS Paint logo image" src=https://github.com/c9fe/jspaint.exe/raw/master/src/public/images/icons/192x192.png>
</p>

*I think I should note that in a strange twist of weirdness and of fate, I actually created this "Grader.JS" logo using MS Paint (on Windows 10) a couple of days before I even knew that I would be turning JS Paint into a downloadable cross-platform binary using Grader! ahahahah*

# JSPaint.exe

This is the venerable [JS Paint](https://github.com/1j01/jspaint) but recreated as a cross-platform native desktop app!

### Hot Details

Binary sizes:

```text
 11801783 Nov  7 16:47 jspaint.exe
 13527751 Nov  7 16:47 jspaint.mac
 16169035 Nov  7 16:47 jspaint.nix
 15542479 Nov  7 16:47 jspaint.nix32
  9840823 Nov  7 16:47 jspaint.win32.exe
```

Look book:

Nix:

![JS Paint exe on Ubuntu](https://github.com/c9fe/jspaint.exe/raw/master/.readme-assets/jspaint-ubuntu.JPG)

Windows:

![JS Paint exe on Windows 10](https://github.com/c9fe/jspaint.exe/raw/master/.readme-assets/jspaint-windows.JPG)

# Here's how I did it (in 9 easy steps, in 9 minutes)

1. First I forked and cloned [jspaint](https://github.com/1j01/jspaint)
  ```console
  $ git clone git@github.com:DOSYCORPS/jspaint.git
  # some git clone stuff happens...
  ```
2. Then I used [Grader.JS](https://github.com/c9fe/graderjs) to build an app skeleton.
  ```console
  $ graderjs jspaint.exe
  # grader does some stuff here...
  ```
3. Then I tested that jspaint would run on my machine.
  ```console
  $ cd jspaint
  $ serve -p 8080
  # hey look at that it really does work from a static server!
  ```
4. Then I copied the static assets to my Grader app static directory
  ```console
  $ cp -r jspaint/* jspaint.exe/src/public/
  ```
5. Then I deleted the uncessary files (to minimize the binary size)...
  ```console
  $ cd jspaint.exe/src/public/
  $ rm -rf node_modules/ cypress* package*.json 
  ```
6. Then I build the [Grader](https://github.com/c9fe/graderjs) app....
  ```console
  $ cd jspaint.exe/
  $ ./scripts/compile.sh
  # grader does its magic stuff here.... (actually it's not so magic)
  ```
7. Then I tested the *.nix binary on the Ubuntu machine
  ```console
  $ ./bin/jspaint.nix
  ```
  And Voilà:
  ![fuck yes JS Paint exe on Ubuntu](https://github.com/c9fe/jspaint.exe/raw/master/.readme-assets/jspaint-ubuntu.JPG)
8. Then I downloaded the *.exe binary to my Windows machine
  ```console
  c:\>.\jspaint.exe
  ```
  And Voilà:
  ![fucking yes 2 it works JS Paint exe on Windows](https://github.com/c9fe/jspaint.exe/raw/master/.readme-assets/jspaint-windows.JPG)
9. Then I make this GitHub repo and decided to share with the world.

## So what?

Everyone can follow on and make their own JS Paint binaries using [Grader](https://github.com/c9fe/graderjs). 

## Hello JS Paint Authors!

Hey, I noticed you don't have a license in your repo. Does that mean what I'm doing is illegal? If so let me know and I will happily make this repo private. Don't forget, you can also send a DMCA!

Actually, I think I'm just kidding because you probably don't have a license because you're working on stuff that is ostensibly Microsoft's. I understand. 

In fact, I'm not sure what the license situation of such a mashup work should be!

Let's consider:

- Original MS Paint app
- Inspires the JS Paint
- JS Paint is then added to Grader app skeleton to produce
- JS Paint downloadable binaries

Anyone from Microsoft want to reach out if we're doing something you dislike and let us know how you feel about it? Don't forget, you can also send a DMCA!

Another small teasing, owning to the topical nature of this issue.

My point is not to raise the ire of any DMCA trolls / legitimate rightsholders, but only to mention it in passing in a humorous way and share, with great excitement, my JSPaint.exe creation, in other words, a great way to use my Grader.JS app builder to combine with the retro excitement of MS Paint / JS Paint and share this enthusiasm with the world. Hooray retro computing! Hooray the 1980s and 1990s, years of out birth! Years of the origin of all stories, and all internets and all time of good softwares, hooray!

## *The End*

-----------------


# Okay, not really the end...


But, let's continue. You already have enough information above to construct your delicious new downloadable JS Paint app, bringing the awesomeness of JS Paint / MS Paint to new audiences far and wide with the original and intended excitement of the native platform feel and touch and smell, and old computer manual smell, etc, etc, etc. OMG, I must be *so* excited to be sharing this creation with the world, look at me how I'm rambling on...well. Time to get down to business. What's the business?

I don't know. I've created the JS Paint downloadable. Published it. About to push it to HN, etc. What else is there to do?

I guess I'm just in shock. Usually creating a new cool thing on the internets takes me days and stress. I guess I'm just not used to it being over in less than 30 minutes, with nary a hiccup in sight, and straight to awesomeness. 

But, hey, I guess I'll just have to come to accept that as the new awesome...I mean the new normal. When using [Grader](https://github.com/c9fe/graderjs) that is.

Hooray for JS Paint! Hooray for Grader!

So for now, I'll just leave this information about the tool you're using here, to help you.

# [Grader.JS](https://github.com/c9fe/graderjs)

**Grader.JS**, or just **Grader**, is a tool to help you build accessible, cross-platform desktop app binaries in Node.JS, JavaScript, HTML and CSS, without the bloat of Electron, the headaches of Qt or the pernicious dorsal enemas of Babylon.Perl

## Get Started

  Use npm to get the [Grader.JS tool](https://github.com/c9fe/graderjs) to automatically populate your new grader app.

  ```sh
    $ npm i -g graderjs@latest
    $ graderjs my-new-app
  ```

  Then, read the [getting started guide](https://github.com/c9fe/graderjs/blob/master/README.md) or see below for an Overview and a detailed API reference.

## Overview

  Grader.JS apps have *service code*, and *client code*. These are the two execution contexts that comprise a Grader app.

### Client, and Server on the Desktop

  The **service code** lives in your `./src/app.js` (or whatever you specify in `CONFIG.entry`). It is written in Node.JS, can import or require any Node modules (except, for now, those requiring native binaries). This code can control and interact with your background service (the server, running on port `CONFIG.desiredPort` or the next available dynamic port), your UI windows, and anything else Node.JS can access, such as: the network, the file system, the operating system.

  The **client code** lives in your `./src/public/` folder. It is written in HTML, JavaScript and CSS. You can "bring your own framework" or "bring your own build step" to use your favorite tooling, and write in whatever compiles down to JS, HTML and CSS, but in those cases you need to set up the necessary build-steps yourself. The client code is also *privileged*. It can access, via the installed `.grader` global on every Window object in every context in your UI windows, the Grader API specified here (with the exception only of the `._serviceOnly` domain). If that's not-enough power, you can publish your own additional APIs and extensions to the provided functionality using `._serviceOnly.publishAPI` and your extensions will then also be available in your UI windows. 

  The client code, and the service code together make up what you can do and what you can create with a Grader app. In addition, it's also useful to consider the internal architecture of a Grader app, to better understand how it works. But before we get to that, here's an *important note about security.*

  **An important note about security**

  On the other hand if you are concerned that's *"too much power"* worry not because we will soon implement additional security checks such as origin checks and domain whitelists. Of course, the general use case of Grader is not to simply use it to open content on the open web, and provide it with a powerful API to run code on a person's local machine outside of a normal browser sandbox, the general use case is for you to open **client code** in your `./src/public/` folder, and only open "open web" content on sites that you control, or trust. But until we support the additional security checks, we don't advise you to open web resources outside of what you put locally inside your `./src/public` folder.

### Architecture

  A running Grader app consists of 3 parts:

  - a background service running as a server on an available dynamic port 
  - zero or a number of UI windows, using HTML/JS/CSS rendered by Google Chrome
  - a console window which you can optionally keep open

  The UI can talk to the service via the included `grader` global API bridge in every UI window. 

  Communication between the service and the UI is done via responses to API calls made by the UI. The service can also control a UI using the Chrome DevTools protocol. 

## API reference

  The Grader API is pretty simple. Methods are arranged into Six Domains:

  - `.` top-level domain
  - `.ui` UI domain
  - `.meta` meta domain
  - `.control` control domain
  - `.util` util domain
  - `._serviceOnly` domain that can only be used service-side (in Node.JS) and not from the UI

  These domains provide you nearly everything you need to start writing great apps. If you need more, you can even use `_serviceOnly.publishAPI` to add your own API domain that you will be able to use anywhere in your Grader App, on the service (in Node.JS) or in the UI client, in JavaScript.

### Brief run-down of all available commands

  ```js
    const API = {
      go,                   // start app launch sequence
      stop,                 // kill app, cleanup, and exit (after async jobs parameter completes)
      say,                  // say something to console (throws if console closed)

      ui : {
        open,               // open UI window
        close,              // close UI window
        move,               // move UI window (throws if no window open)
        size,               // size UI window (throws if no window open)
        minimize,           // minimize UI window (throws if no window open)
        maximize,           // maximize UI window (throws if no window open)
        restore,            // switch between maximize and how it was before
        fullscreen,         // UI window to fullscreen
        partscreen,         // UI window to part of screen
        getLayout,          // get window left, right, width, height and windowState
        openBlank,          // open a UI window to about:blank
        writePage,          // sets the HTML content of the document
        getScreen,          // get screen dimensions
      },

      meta: {
        getStartURL,        // gets the start URL for the app 
        getFavicon,         // gets a (or an optionally named) favicon as a data URL
        getTitle,           // gets the app title
      },

      control: {
        send,               // send a DevTools command (throws if ui not connected yet)
        on,                 // start listening for a DevTools event (throws if ui not connected yet)
        off,                // stop listening for a DevTools event (throws if ui not connected yet)
      },

      util: {
        sleep,
        kv: save,           // save a (key, value) pair
        k: load,            // getrieve a key
        d: del,             // delete a key
        hasKey              // returns a promise that resolves to true when the key is set
      },

      _serviceOnly: {       // can not be called from UI side
        getUI,              // returns the named UI object
        getApp,             // returns the App object
        publishAPI,         // publish an API to the API object
                            // if apiInUI: true, it will also be available in the UI side
      }
    };
  ```

### Top-level Domain

  The top-level domain methods have to do with launching and stopping the app, and saying something to the launcher console. It has 3 methods. They are:

  - .go(options)
  - .stop()
  - .say(msg) *launcher console currently only opens on Windows*

#### .go(options)

  Starts the app launch sequence, and returns the `<App>` object. This will:

  - **create a server.** The server, therwise known as the background service will run on port `<Config>.desiredPort` if available, otherwise on a random port in the dynamic range from 49,152. If the `options.server` is set, Grader uses the `<HTTPServer>` object you pass and attempts to call 'listen' on it. 
  - **create a UI window.** The UI window will by default load the content served by the background service at the `/` (root) route. In order to render the GUI window, Grader uses the installed Google Chrom(e/ium) browser to run a native UI window using the browser's [`--app=${url}`](https://source.chromium.org/chromium/chromium/src/+/master:chrome/common/chrome_switches.cc;drc=8c4b7bb294e2c96b3aef99fa08effc473fdae015;l=47) [flag](https://peter.sh/experiments/chromium-command-line-switches/#app). If no Google Chrom(e/ium) is installed, one will be downloaded and installed first. Note that unlike [Electron](https://www.electronjs.org/) Grader does not bundle a browser inside the binaries of app, and it does not use a modified version of Chrome, instead using the installed version or downloading the latest version.

  The returned `<App>` object has the following properties:

  - *settings:* the options parameter the `.go()` method was called with
  - *uis:* the `Map<string,UI>` of UI window names to UI window objects
  - *expressApp:* the express app object (i.e, returned by `express()`) for the background service
  - *ServicePort:* the port the background service server is running on
  - *service:* the background service server object (`<HTTPServer>`)
  - *notify:* a method (the same as `.say()`) to print to `stdout` in the launcher process
  - *newSessionId:* a method to create a `session-id` (currently only used internally)
  - *UI:* the UI window object of the default UI (i.e., the first UI opened), undefined if there isn't one
  - *killService:* a method to shut down the whole app

  The `options` parameter supports the following settings:

  - **uiName**: `string`. Required unless `noWindow` is set. `uiName` is the name given to the GUI window. 
  - **apiInUI**: `boolean`. Make this API (minus the `_serviceOnly` domain) available in all UI windows under the `grader` global object.
  - **addHandlers**: `function(app: <ExpressAppObject>)`. A function called during background service server startup to add handlers to the created express app server.
    For example:

    ```js
      function addHandlers(app) {
         app.post('/file', upload, (req, res) => res.sendStatus(200));
      }

      await Grader.go({addHandlers});
    ```
    
    *Note:* By default Grader creates an [Express app](https://expressjs.com/) for the background service server.

  - **server**: `<HTTPServer> object`. If you want more control over the background service server Grader creates, you can create your own server and pass it in at launch using this option. For example, you might want to add TLS certificates, or you might want to use [Meteor](https://www.meteor.com/) instead of Express. 
  - **keepConsoleOpen**: `boolean`. Requests that the launcher process not exit and instead keep its console window open.
  - **doLayout**: `boolean or function(screen: {screenWidth, screenHeight}) -> ({screenWidth, screenHeight, x, y, width, height})`. Passed to the GUI window that automatically opens on app launch. Note that you can disable the default auto-open behaviour by using the `noWindow` flag. 
    
    The default value of `doLayout` is `true` which indicates the standard auto-centered golden-ratio dimensions layout where the GUI window opens in the middle of the screen in Golden proportion to the screen dimensions. Alternately you can pass a function. The function is called with the width and height of the screen and your function returns the `x,y` positional coordinates and the `width,height` dimensions of the GUI window that will open on startup. If `doLayout` is `false` then the GUI window will open *wherever* the OS decides to put it. 
  - **keepAlive**: `boolean`. Default is `false`. Keeps the background service (and therefore the app) running even *after* all GUI windows are closed. This will not kill the service on startup before any windows are open, it only affects behaviour on the closing (or crashing) of a GUI window, where the app will by default close its background service and exit if there are no GUI windows open. Note that this can also be overridden on a per-window basis by the `keepService` flag option to `API.ui.open()`, such that a window opened with `keepService` set to `true` will, when closing having been the last window open, not cause the whole app to exit.
  - **noWindow**: `boolean`. Default is `false`. Launches the app without opening a GUI window.
    
  *Note:* The standard use of Grader is to create a cross-platform GUI app using Node.JS and web technologies. But, using a couple of flags, you can modify the behaviour to non-standard uses.

  ***Note on Non-Standard Uses***

  Using the options passed to `go()` you can customize the app launch behaviour. By passing a dummy object with a no-op `listen()` method in the `server` option, you can disable running a server. By specifying the `noWindow` flag, you can prevent the default behaviour of opening a UI window on app launch, and by requesting `keepConsoleOpen` you can ensure that the terminal console window, normally only open for the launch process and only on Windows, remains open for as long as you want. 

  So, for example, you can use Grader to create a cross-platform terminal* app, without a GUI window, and optionally with or without a server. Note that static analysis and tree-shaking is performed by `webpack` so the minimum binary sizes will be slightly (but only slightly) affected by the options you specify in `go()`. 

  \**Opening a terminal currently only happens on Windows, as part of the app launch process. See [this SO question](https://stackoverflow.com/questions/50507531/is-there-a-way-to-launch-a-terminal-window-or-cmd-on-windows-and-pass-run-a-co) for an idea of how this could be made into a standardized behaviour across platforms.*

  **Note on Binary sizes**

  The default minimum binary sizes are shown below:

  ![A table showing the approximate default minimum binary sizes for basic "Hello World" GUI apps built with Grader.JS. The minimum size for a Unix or Linux binary is 14.8 Mb. The minimum size for a 32-bit Unix or Linux binary is 14.2 Mb. The minimum size for a Macintosh OSX binary is 12.2 Mb. The minimum size for a Windows binary is 10.4 Mb. The minimum size for a 32-bit Windows binary is 8.5 Mb.](https://github.com/c9fe/graderjs/raw/master/.readme-assets/default%20binary%20sizes.JPG)

  These are the sizes of baseic `hello world` example GUI apps, and the main contribution to the size is the compressed Node.JS executable that is included in the binary package. The minified Node.JS source code has the following sizes:

  | path   | purpose  | size behavior  | uncompressed size (Kb)  | compressed size (Kb) |
  |---|---|---|---|---|
  | /build/grader.js  | launcher  |  fixed size | 94  | 31 |
  | /src/build/service.js  | main app  | size depends on your code | 707 | 282 |
  | /build/app.zip* | app bundle | size depends on your code | 715* | 283 |

  \**Note: the app.zip bundle includes service.js, only exploded out for illustration*

  The reality of the above numbers are that the total code contirbution of a fully functioning `hello world` GUI app is 314 Kb. Your app logic that you add on top of that, including any libraries you import, will add to that code size. But the main contribution to binary size is the size of the compressed Node.JS executable that is included in the binary package. 

#### .stop()

  Stops the background service server (if it is listening), shuts any UI windows that remain open, and exits the process. But note that if you requested `keepConsoleOpen` you might need to close stdin yourself, as `keepConsoleOpen` runs `process.stdin.resume()`.

#### .say(msg)

  Writes a message to `process.stdout` of the launcher process, so this message will shop up in the launcher console window. If the launcher process has already exited (as it will unless you request `keepConsoleOpen`), this method will throw.

### UI Domain

  The UI domain concerns itself with the opening, closing and modification of app GUI windows. 

  It has 13 methods. They are:

  - open  
  - close 
  - move  
  - size  
  - minimize 
  - maximize 
  - restore  
  - fullscreen  
  - partscreen  
  - getLayout
  - openBlank (*not yet implemented*)
  - writePage (*not yet implemented*)
  - getScreen

  **Important note about calling from Service or UI side** 

  For the functions below that accept a `UI` parameter:

  - if calling from the **service-side** you must use the UI object itself. These are obtainable from the `uis` map on the `app` object (the object returned by `.go()`). If you leave the UI parameter blank in service-side calls, the call will be made on the *default UI*. The *default UI* is simply the first UI window opened. When that first UI window to open, is finally closed, there is no longer a *default UI*.
  - **But** if calling from the **client-side** you must either leave it blank (in which case the command will be executed on the calling UI window), **or** you must provide the **string name** of the UI window you wish to call the command on.

#### .ui.open(options)

  Open a UI window. By default it will point to the URL `http://localhost:${ServicePort}/` where `ServicePort` is the port the background service server is running on, either the `CONFIG.desiredPort` value, or whatever dynamic (range 49152 and up) port was randomly found to be available.

  The options parameter supports the following settings:

  - **uiName**: `string`. Required. Names the UI window so it can be referenced in other contexts, for example, by other UI windows. This means that one UI window can call commands on another UI window by providing its name.
  - **keepService**: `boolean`. Defaults to false. If true, specifies that closing this UI window will not terminate the entire app process, even if there are no other UI windows open at the time this UI window is closed. 
  - **doLayout**: `boolean or function(screen: {screenWidth, screenHeight}) -> ({screenWidth, screenHeight, x, y, width, height})`. Passed to the GUI window that automatically opens on app launch. Note that you can disable the default auto-open behaviour by using the `noWindow` flag. 
      
    The default value of `doLayout` is `true` which indicates the standard auto-centered golden-ratio dimensions layout where the GUI window opens in the middle of the screen in Golden proportion to the screen dimensions. Alternately you can pass a function. The function is called with the width and height of the screen and your function returns the `x,y` positional coordinates and the `width,height` dimensions of the GUI window that will open on startup. If `doLayout` is `false` then the GUI window will open *wherever* the OS decides to put it. 
  - **uriPath**: `string`. Defaults to `/`. Specifies the URL path part of the address that the UI window will open. Useful for opening a UI to a particular starting point in your app.

#### .ui.close(UI)
  
  Closes the UI window identified by UI. If the window was opened with `keepService` false (default), or with an app with `keepAlive` false (default), and the window is the only UI window open, then calling this function will also terminate the app.

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.close();">X</button>
    <!-- other stuff !-->
  ```

#### .ui.move({x,y}, UI)

  Moves the UI window identified by UI, to screen coordinates `x` and `y`, given in device pixels.

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.move({x:0,y:10});">Snap Left</button>
    <!-- other stuff !-->
  ```

#### .ui.size({width,height}, UI)

  Sizes the UI window identified by UI, to screen dimensions `width` and `height`, given in device pixels.

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.size({width:100,height:100});">Small-ify</button>
    <!-- other stuff !-->
  ```

#### .ui.minimize(UI)

  Minimizes the UI window identified by UI. 

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.minimize();">_</button>
    <!-- other stuff !-->
  ```

#### .ui.maximize(UI)

  Maximizes the UI window identified by UI. 

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.maximize();">&#11036;</button>
    <!-- other stuff !-->
  ```

#### .ui.restore(UI)

  Switches between `maximize` and how it was before, for the UI window identified by UI. 

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.restore();">&#11036;</button>
    <!-- other stuff !-->
  ```

#### .ui.fullscreen(UI)

  Full screens the UI window identified by UI. 

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.fullscreen();">Full screen</button>
    <!-- other stuff !-->
  ```

#### .ui.partscreen(UI)

  If the UI window is full screen or maximized, restores it to how it was before that, for the UI window identified by UI. 

  Example, in `./src/public/index.html`:

  ```html
    <!-- other stuff !-->
    <button onclick="grader.ui.partscreen();">Exit full screen</button>
    <!-- other stuff !-->
  ```

#### .ui.getLayout(UI)

  Gets the layout (`{width, height, left, top and windowState}`) for the UI window identified by UI. `windowState` can be one of `minimized`, `maximized`, `fullscreen` or `normal`.

  Example, in `./src/app.js` (Node.JS):

  ```js
    // other stuff
    const {width,height} = await Grader.ui.getLayout(App.uis.get('my-page'));
    // other stuff
  ```

#### .ui.getScreen()

  Gets the screen (`{screenWidth, screenHeight}`) dimensions. A useful way to bring screen dimensions to Node.

  Example, in `./src/app.js` (Node.JS):

  ```js
    // other stuff
    const {screenWidth, screenHeight} = await Grader.ui.getScreen();
    // other stuff
  ```

### Meta Domain

The meta domain is concerned with getting (and in future setting) meta-information about the app, such as its "favicon" (or dock icon), its app nam, and the starting URL the UI window was set to.

It has 3 methods. They are:
  - getStartURL
  - getFavicon
  - getTitle

#### .meta.getStartURL(UI)

Returns the starting URL for the UI window identified by UI. Note that the same service-side, client-side calling convention dichotomy applies to this method as well, as in, if called on client side with a UI parameter, that must be a string. For more details see the note about this calling convention in the UI Domain section above.

#### .meta.getFavicon

Returns a data URI for the "app favicon", which by convention is located in, `./src/public/_icons/favicon.ico`. If this file does not exist this method will throw.

#### .meta.getTitle

Returns the app's title, in other words its name, specified by `CONFIG.name`.

### Control Domain

The Control Domain concerns itself with the control of the UI windows via the [Chrome DevTools protocol](https://chromedevtools.github.io/devtools-protocol/). It provides 3 methods that are, in short, a *micro library* for interacting with the Chrome Remote Debugging protocol that is exposed, they are:

- send
- on
- off (*not yet implemented*)

#### .control.send(commandName, params, UI)

Sends a command to the DevTools protocol host of the UI identified by window. [All possible commands, their return values and their parameters are listed here](https://chromedevtools.github.io/devtools-protocol/). *Note that the calling convention between service-side and client-side code for API calls bearing a `UI` parameter is also respected here. See the detailed section above in the UI domain for further information about this calling convention.

The function takes the following paramters:

- **commandName**: `string`. Required. No default value. The name of the DevTools protocol command to send. The format is `<Domain>.<name>`, for example, "Page.addScriptToEvaluateOnNewDocument".
- **params**: `object`. Required. No default value. If there are no parameters, you must send an empty object. Otherwise set the parameters require as evidenced in the DevTools protocol docs. 
- **UI**. Optional. On the client-side defaults to the calling UI window. On the service side defaults ot the `default` UI window (if any). Otherwise, if provided, must be a string name of a UI window when called from the client side, or an actual UI window object when called from the service side. 

UI-side Example, in `./src/public/index.html`:

```html
  <!-- html stuff !-->
  <button onclick="grader.control.send('Runtime.evaluate', {expression:'console.log(`hello world`);'}, 'test-window')">Print to console in other UI</button>
  <!-- html stuff !-->
```

Service-side Example, in `./src/app.js`:

```js
  const result = await Grader.control.send("Page.printToPDF", pdfOptions);
```

Returns the result of the command, if any, or an empty object if there is no result. If the requested command resulted in an error, then an object with the `error` property is returned bearing details of the error.

#### .control.on(eventName, handlerFunction, UI)


Listens for events from the DevTools protocol host of the UI identified by window. [All possible events and their properties are listed here](https://chromedevtools.github.io/devtools-protocol/). *Note that the calling convention between service-side and client-side code for API calls bearing a `UI` parameter is also respected here. See the detailed section above in the UI domain for further information about this calling convention.

This command accepts the following parameters:

- **eventName**: `string`. Required. No default value. The name of the DevTools protocol command to send. The format is `<Domain>.<name>`, for example, "Fetch.requestPaused".
- **handlerFunction**: `function`. Required. No default value. A function called when the event is received, it will be called with a single parameter, an object bearing the properties of the specified event.
- **UI**. Optional. On the client-side defaults to the calling UI window. On the service side defaults ot the `default` UI window (if any). Otherwise, if provided, must be a string name of a UI window when called from the client side, or an actual UI window object when called from the service side. 

*Note:* if your use of the DevTools protocol rquires access to a [`sessionId`](https://chromedevtools.github.io/devtools-protocol/tot/Target/#type-SessionID) then you can use the `ons()` method of a UI window object. This is the same as `.control.on()` except that the `handlerFunction` is called with an object `{params, sessionId}` instead of just `params`, therefore allowing you to get access to the `sessionId` from whence the event originated.

### Util Domain

The Util Domain concerns itself only with various utilities, that are cross-cutting concerns and may be useful and applicable in many places, such as across the client or service contexts. For example, `sleep` an async command to yield execution from an async function for a number of milliseconds before re-entering that function at the next statement, after that timeout has resolved. Apart from this, the Util domain provides access to a simple key value store that persists across UI windows (but not across app launches).

The util domain has 5 methods, they are:

- sleep
- kv
- k
- d
- hasKey

#### .util.sleep(milliseconds)

Sleep a number of milliseconds before returning to the function. In practice the Node.JS event loop will perform other work (if there is any) at this time, before returning to continue executing your function at the next statement.

#### .util.kv(key, value)

Stores a (key, value) pair in the global key-value store. Keys are strings and values can be any object. But note that if the objects are not JSON stringify-able then they will not be able to be passed across the client-service divide. Only fully JSON strinify-able values can be passed between service and client sides.

Also, the `kv()` command has non-intuitive behaviour when there is an existing key. It attempts to perform a pseudo merge, depending on the type of the value. For more details, see the code in, for example, [this revision](https://github.com/c9fe/grader-base/blob/master/src/index.js#L473).

#### .util.k(key)

Retrieves a value given a string key from the global key-value store. If the key is not present, returnsa undefined. *Note: that there is no way to tell the difference between a key being set to undefined and not being set at all, using this method.* 

Returns the value, if any.

#### .util.d(key)

Deletes a value from the global key-value store.

#### .util.hasKey(key)

Returns a promise that resolves to true when the key is set. Useful to wait until a value has been set by an asynchronous process before retrieving it. *Note: that this method will return a promise that never resolves if the key is never set.* In other words, there is no timeout. If you need a timeout, implement on using, for example, `Promise.race`:

```js
  let available = false;
  try {
    available = await Promise.race([ 
      Grader.util.hasKey('info'), 
      new Promise((_, rej) => setTimeout(rej, 10000)) 
    ]);
  } catch(e) {
    console.warn(`Timeout expired before value was available.`);
  }
```


### _serviceOnly Domain

The _serviceOnly domain handles all things that cannot be called from the client, either for security reasons, or because the objects returned can simply not be serialized to strings and passed between client and service usefully.

It has 3 methods. They are:

- publishAPI
- getUI
- getApp

#### ._serviceOnly.publishAPI(apiRoot, slotName)

Publishes an API so that it's available on the client side and the server side. 

This function access the following parameters:

- **apiRoot:** `object`. `apiRoot` is an object with properties that enumerate all the functions of that API. For example, if your API is "sendEmail", "checkReplies", your apiRoot is {sendEmail, checkReplies}. Also note that you can overwrite built-in APIs (like uitl, ui, control and window) using this method, but we throw if you try to overwrite those APIs you publish.
- **slotName:** `string`. Required. No default value. The name of the slot on the global API object where your API will go. For example, if your slotname is `fb`, your API will be accessible at `Grader.fb.login` on the service side and `grader.fb.long` on the client.

*Note: in future we will provide a way to restrict published API access to only service or client sides.

#### ._serviceOnly.getUI(name)

Returns a UI window object given its name. 

This method accepts the follow parameter:

- **name**: `string`. No default. Required. The name of the UI window (the `uiName` parameter passed to `go()` or `ui.open()` when the UI window was created.

*Note: this method throws if the name does not exist, or if the app has not been created yet (i.e., if the app is still launching and such as when Grader.go has not yet returned.)*

**The UI window object** has the following properties:

- on, same as the `.control.on` method above.
- send, same as the `.control.send` method above.
- ons, similar to `.control.on` but provides access to the DevTools `sessionId` of the event source. In other words, event notifications are packaged as `{params, sessionId}` 
- disconnect, this method closes the channel between the service and the actual GUI window. In effect, it closes the websocket, disconnecting the DevTools protocol client from the DevTools host. Grader detects this and shuts the GUI window, possibly closing the whole app.

#### ._serviceOnly.getApp()

Returns an `<App>` object, or throws if the app has not yet been created, such as if Grader.go has not yet returned or the app is still launching.

## Configuration

Grader can be configured by the `src/config.js` file.

The format is:

```js
  module.exports = {
    name: "My App's Name",            // what should your app be called?
    entry: "./app.js",                // where should your app begin?
    author: {
      name: "my name",
      url: "https://github.com/my-github-username",
    },
    desiredPort: 49666,               // which port do you want your service to try to run on?
    version: "0.0.1",
    description: "Make Descriptions Great Again",
    source: "https://github.com/my-github-username/MyGraderApp",
    organization: {
      name: "My Org",
      url: "https://github.com/my-github-org-name"
    },
    apiOrigins: [],                   // exact origins allowed to call Service API via grader global,
    DEBUG: false                      // true shows debugging information and keeps launch console open
  }
```

*Note:* `CONFIG.name` currently does not set the name of the produced binaries (which are always named `grader.<ext>` where `<ext>` is a platform specific extension, for example `exe`). In the future, `CONFIG.name` will set the name of the binaries.

# Security

The binaries are built using `nexe`, which uses Node.JS runtimes which I pre-pack with `upx` to save ~75% of the size. Apart from webpack and its minimization, there is no obfuscation applied to the code. The code is packed into a binary by `nexe`.

Aside from a few methods marked `_serviceOnly`, the API is available on the service side (Node.JS) and in the client (via the `grader` global in any UI windows). If you're loading 3rd-party content, you might not want to give them access to the `grader` global, so there is an `apiInUI` flag, as well as origin checks and an allowedOrigins whitelist, I'll implement in future.

-------------------

## *MyAwesomeApp.JS!*
