## Instruction for Demo #6

### Step 0
1. Make sure you are in the folder `/demo6`, not your project root.

If you are in the project root, remember to
```bash
$ cd demo6
```

2. Make sure port 3000 is not being used for the time being. Your local file system should not display as you hit http://localhost:3000/ in the browser.

### Step 1: create `my-app`

- if you are using Mac OS, run

```bash
$ npx create-react-app my-app
```

- if you are using Windows, run

```bash
$ npm init react-app my-app
```

Some packages will be installed, and in the end, you will see the message

```
...

Success! Created my-app at ...

...

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
```

And then do

```bash
$ cd my-app
```

and then

```bash
$ npm start
```

As you hit Enter, you will be seeing this message in your VS Code:
```bash

> my-app@0.1.0 start
> react-scripts start

```

***!!! Please wait! Your application is being compiled right now. !!!*** 

While waiting, in VS Code, you will be seeing new messages:
```
Starting the development server ...
```

and then your default browser will pop up and open `localhost:3000` for you.

A few more seconds later, you will be seeing this message in the VS Code:

```
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://a.b.c.d:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

and this nice page:

![my-app-start](/screenshots/demo6.png)

### Step 2: install Bootstrap

Run
```bash
$ npm install --save bootstrap
```

and then

```bash
$ npm install --save bootstrap
$ npm install --save reactstrap react react-dom
```

### Step 3: Play aronud with the code

As the message, "Edit src/App.js and save to reload", suggests, we will be modifying two files:
- `/my-app/src/App.js`
- `/my-app/src/index.js`

Look for the comment "New code added here!!".

So we will add a button like this:

![my-app-modifed](/screenshots/demo6_1.png)

As you are done modifying the code, you need to restart the app (not just refresh) to see the change.
