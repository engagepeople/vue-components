# Developers Guide

## Settings up Environment

To used the source code
- Run `npm dev` from the `podium-admin-sdk` folder to start TS watch 
- Run `npm link` from the `podium-admin-sdk` `package.json` folder  
- Run `npm link podium-admin-sdk` from the package you are developing in

- Restart of your dev server maybe required

## Adding new API Calls

With addition to every call; make sure each call is 
- Unit Tested in `/test/*.spec.js`
- Documented in `README.md`
- Type defined in `types/*`

## Release Checklist

- Check the value of `main` in `package.json` is `dist/index.js`
- Run `npm run unit` Make sure all tests are run - there are no `.only` checked in
- Run `npm run build`
- Run `git commit`
- Run `npm version` [major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
- Run `git push`
- Run `npm publish`
- Verify latest version on https://www.npmjs.com/package/podium-admin-sdk
- Merge PR
- Create Github version