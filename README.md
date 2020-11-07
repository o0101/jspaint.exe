
<p align=center>
  <img width=150 alt="Grader.JS logo image" src=https://github.com/c9fe/graderjs/raw/master/.readme-assets/grader_logo.png>
  X
  <img width=150 alt="JS Paint logo image" src=https://github.com/c9fe/jspaint.exe/raw/master/src/public/images/icons/192x192.png>
</p>

*I think I should note that in a strange twist of weirdness and of fate, I actually created this "Grader.JS" logo using MS Paint (on Windows 10) a couple of days before I even knew that I would be turning JS Paint into a downloadable cross-platform binary using Grader! ahahahah*

# JSPaint.exe

This is the venerable [JS Paint](https://github.com/1j01/jspaint) but recreated as a cross-platform native desktop app using *[Grader](https://github.com/c9fe/graderjs)*!

### Hot Details

Binary sizes:

```text
 11801783 Nov  7 16:47 jspaint.exe
 13527751 Nov  7 16:47 jspaint.mac
 16169035 Nov  7 16:47 jspaint.nix
 15542479 Nov  7 16:47 jspaint.nix32
  9840823 Nov  7 16:47 jspaint.win32.exe
```

[Get them!](https://github.com/c9fe/jspaint.exe/releases)

Look book:

Ubuntu:

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
  $ npm i -g graderjs@latest
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
9. Then I make this GitHub repo and decided to share with the world. This part, the writing of the README, took the longest, really.

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

My point is not to raise the ire of any DMCA trolls / legitimate rightsholders, but only to mention it in passing in a humorous way and share, with great excitement, my JSPaint.exe creation, in other words, a great way to use my Grader.JS app builder to combine with the retro excitement of MS Paint / JS Paint and share this enthusiasm with the world. Hooray retro computing! Hooray the 1980s and 1990s, years of our birth! Years of the origin of all stories, and all internets and all time of good softwares, hooray!

## *The End*

-----------------


# Okay, not really the end...


But, let's continue. You already have enough information above to construct your delicious new downloadable JS Paint app, bringing the awesomeness of JS Paint / MS Paint to new audiences far and wide with the original and intended excitement of the native platform feel and touch and smell, and old computer manual smell, etc, etc, etc. OMG, I must be *so* excited to be sharing this creation with the world, look at me how I'm rambling on...well. Time to get down to business. What's the business?

I don't know. I've created the JS Paint downloadable. Published it. About to push it to HN, etc. What else is there to do?

I guess I'm just in shock. Usually creating a new cool thing on the internets takes me days and stress. I guess I'm just not used to it being over in less than 30 minutes, with nary a hiccup in sight, and straight to awesomeness. 

But, hey, I guess I'll just have to come to accept that as the new awesome...I mean the new normal. When using [Grader](https://github.com/c9fe/graderjs) that is.

Hooray for JS Paint! Hooray for Grader!

So for now, I'll just leave this information about the tool you're using here, to help you.

# [:goggles: Grader.JS](https://github.com/c9fe/graderjs) ![npm downloads](https://img.shields.io/npm/dt/graderjs?label=npm%20downloads) ![version](https://img.shields.io/npm/v/graderjs?label=version)

**Grader.JS**, or just **Grader**, is a tool to help you build accessible, cross-platform desktop app binaries in Node.JS, JavaScript, HTML and CSS, without the bloat of Electron, the headaches of Qt or the pernicious dorsal enemas of Babylon.Perl

## Get Started from the Command line

  Use npm to get the [Grader.JS tool](https://github.com/c9fe/graderjs) to automatically populate your new grader app.

  ```sh
    $ npm i -g graderjs@latest
    $ graderjs my-new-app
  ```

  Then, read the [API docs](https://github.com/c9fe/grader-base/blob/master/README.md) or see below for the Getting Started Goose Guide.

## Get Started from GitHub

Click ["Use This Template"](https://github.com/c9fe/grader-base) on the base-repo and you will have a new repo, then clone it to your workspace and `cd` into it, and run:

```sh
npm i
```

## Start Building!

Read [the API docs](https://github.com/c9fe/grader-base), or create yer binaries right away:

```sh
./scripts/compile.sh
```

You now have a GUI app in Node.JS and JavaScript/HTML/CSS.

And you will have cross-platform binaries available in `/bin`

(*and also for download from the computer you're on at port 8080.*)

## Start Coding

Put your own code into, `src/app.js`:

**E.g**:

```js
  import Grader from './index.js';

  start();

  async function start() {
    await Grader.go();
  }
```

And put your JS/HTML/CSS into, `src/public/index.html`:

```html
  <meta charset=utf-8>
  <title>Your Cross-Platform App</title>
  <style>
    :root {
      font-family: sans-serif;
      background: lavenderblush;
    }
    body {
      display: table;
      margin: 0 auto;
      background: silver;
      padding: 0.5em;
      box-shadow: 0 1px 1px purple;
    }
    h1 {
      margin: 0;
    }
    h2 {
      margin-top: 0;
    }
  </style>
  <h1>Hello World!</h1>
  <h2>Meet <i>Grader</i></h2>
  <p>
    <button onclick="grader.ui.minimize();">_</button>
    <button onclick="grader.ui.restore();">&#11036;</button>
    <button onclick="grader.ui.close();">x</button>
  <script>
      (async () => {
        await graderReady();

        const [title, favicon, startURL] = (await Promise.allSettled([
          grader.meta.getTitle(),
          grader.meta.getFavicon(),
          grader.meta.getStartURL()
        ])).map(({status, value, reason}) => {
          if ( status == 'fulfilled' ) return value;
          return reason;
        });

        console.log({title, favicon, startURL});

        document.title = title;
      })();
    </script>
```

# Then build it

```sh
./scripts/compile.sh
```

You now have a GUI app in Node.JS and JavaScript/HTML/CSS.

And you will have cross-platform binaries available in `/bin`

and also for download from the computer you're on at port 8080.

For more demos see the demos in `src/demos`.


# More

See [the API docs](https://github.com/c9fe/grader-base) or the [Getting started Guide](https://github.com/c9fe/graderjs) for more. Or just read the README.md of the grader app you've just created, it contains the full API docs. You can also take a look at the API code in `src/index.js'.

# Related projects

See [this list of Electron alternatives](https://github.com/sudhakar3697/electron-alternatives) for more options for cross-platform desktop app developement using web technologies.

----------------------

# *Grader.JS!*

-------------------

## *JS Paint. exe*

-----------------------

## *MyAwesomeApp.JS!*
