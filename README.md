# js2ts-demo
Demonstration how to migrate a project from JavaScript to TypeScript

## Migration

- Install TypeScript `npm i --save-dev typescript`
- Install Definitions `npm i --save-dev @types/node @types/hapi@16`
- Setup tsconfig.json `node_modules/.bin/tsc --init`
- Set the following compiler options: `"allowJs": true` 
- Rename .js files to .ts

### References

* JSDOC - http://usejsdoc.org
* Migrating from JavaScript - https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
* Type Checking JavaScript Files - https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files

