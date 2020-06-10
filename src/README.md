# Goal
Experimenting with modern webdev from Windows (WSL+VS Code)

## Tools

- Bootstrap
- JQuery
- WebPack 5

## Methodology

### Folder structure
&rightarrow; https://hackernoon.com/bootstrap-framework-best-practises-b1d81c02d6cf

## Testing

Note: Jasmine looks nice, but I'll go Mocha this go, since it seems to be so common.

### Mocha
Unit testing

### Chai
Expectations && fluency

### SinonJS
Spies, stubs and fakes.


### Nice pages with code examples 
(also stuff about jasmine!: https://raygun.com/blog/mocha-vs-jasmine-chai-sinon-cucumber/)

https://ponyfoo.com/articles/choose-grunt-gulp-or-npm
This is valuable.

####  Is RxJS really worth it? 
--> Keep that for the future, this is complex enough.

#### Notes

- Webpack
Used to package all JS requirements for the website (https://webpack.js.org/concepts/). Not necessary for very small sites.

##### Progress

- Added a dist folder on the root level, for exporting the built site (referenced in the webpack config)
- Added the webpack config on the root level, next to the package.json