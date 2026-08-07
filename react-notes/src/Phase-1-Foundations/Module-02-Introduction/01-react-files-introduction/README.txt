//Common file types

1) .html -> Single page the app loads -> It has one <div id="root"></div>

2) .css -> Styling

3) .jsx -> React Components

4) .js -> Plain JS logic, utilities

//Project files

1) package.json

//project metadata
"name": "react-notes",
"private": true,
"version": "0.0.0",
"type": "module",

//scripts -> npm run <name>
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },

// dependencies -> packages the APP needs to run
// devDependencies -> packages only needed while Developing

2) package-lock.json

-Auto generated
-Exact version of every package needed for app

package.json => what I want?
package-lock.json => what I actually got?

3) node_modules
npm downloads all installed packages here
`npm install` to recreate it

4) .gitignore
Lists files/folder git should ignore (node_modules)

5) indes.html
Entry html page ,vite injects bundled JS here

6) vite.config.js
Configures vite build tool

7) eslint.config.js
Rules -> catches bugs and consistent code style

8) README.md
Docs for the project