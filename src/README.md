# Goal
Experimenting with modern webdev from Windows (WSL+VS Code)

## Tools

- Bootstrap
- JQuery
- WebPack 5

## Methodology

### Folder structure
&rightarrow; https://hackernoon.com/bootstrap-framework-best-practises-b1d81c02d6cf
Note: I'm not sure how valuable this is, since so many assumptions are made, and even some instructions seem contradictory or doubled.

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
- Quickly read through https://github.com/dvlden/webpack-config/blob/master/webpack.config.js. Overly complex, but I see now how the file is structured.
- Read through https://getbootstrap.com/docs/4.5/getting-started/webpack/. This is another set of horrifying documentation. Yes, I see what they mean now, but only because I muddied on for two days. Do the people who work on the documentation have a clue what this rare species, the noob, even exists? RTFM only works if TFM makes sense for the noob. Or I'm just too old and dumb for this.