# NPM

Package manager

Anyone can publish dependencies, and there is no quality control, so no guarantee it will work as expected (trust developers promises)

## package.json file

With this file we can register our dependencies for certain modules and also this is the way a nem
member of the team will be able to install the required dependencies for the project to run it.

"npm init --yes": to create an initial package.json using all defaults
"npm i"
"npm help install"

## package-lock.json file

This file guarantees that the installed dependencies will be the same (even de subdependencies tree for each module).

## SemVer

Semantic versioning A.B.C

- A: major change, breaking change
- B: minor, backward compatible
- C: patch, bug fixes

Especial characters:

 ~ A.B.C : can install any patch equal or greater than C
 ^ A.B.C: can install any patch and minor version (equal or greater than B)

Using x notation:

 A.B.x : any version patch can be install
 A.x: any minor and patch version can be install

## Publish a package

1 - Create a package.json file with "npm init"
2 - Create the package files content (js, files...)
3 - Create and index.js which will be the main script of our module (entrypoint)
4 - Login in npm with "npm login" (need an account)
5 - Publish the package with "npm publish"

## NPX and NPM run scripts

- npm scripts enables to automate the way your team uses the app. Useful for start, restart etc in a way that is standart and encapsulated in the definition of that script in package.json.
  
  Ex. "npm run start" o "npm start" (algunos tienen shortcuts, ver la lista con "npm help npm-scripts")

- If you need to run a library outside npm run script but without installing that globally one option is to use "npx" and it will look into the locally node_modules
  
  Ex. "npx eslint server.js"

