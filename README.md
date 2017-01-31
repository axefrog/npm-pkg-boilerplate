# Boilerplate NPM Package

> Because having to write a new build process every time is boring, and a waste of time.

I've decided that the ideal project template and build process is somewhat of a personal preference.
Therefore, this is my personal boilerplate to make the setup process for a new JavaScript library a
little bit less painful.

## Features:

- Yarn lock file
- TypeScript source
- TypeScript-based unit tests with Mocha and Chai
- Gulp-based build process
- Package.json preconfigured with ES2015 module entrypoints
- TypeDoc, tweaked for correct publishing to Github Pages
- Linting via TSLint
- Distributables for ES5, ES2015 and TS
- VSCode builds in watch mode and does not interfere with Gulp process
- VSCode debugging preconfigured to work with Mocha
- Travis configuration
- The usual .*ignore files
- Lines ending in `// ## DEBUG ONLY` are retained for local debugging, but stripped during the final
  build process
- As above, for multiline blocks fenced between `// ## DEBUG START` and `// ## DEBUG END`
