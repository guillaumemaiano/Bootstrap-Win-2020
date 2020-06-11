const path = require('path');

// Minification
const minJSON = require('jsonminify');


const plugins = {
    extractCSS: require('mini-css-extract-plugin')
  }

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        vendor: [
            './styles/vendor.scss',
            './scripts/vendor.js'
          ],
          app: [
            './styles/app.scss',
            './scripts/app.js'
          ]
    },
    output: {
        // distribution through the dist folder
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'scripts/[name].js',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
          {
            test: /\.((s[ac]|c)ss)$/,
            use: [
              {
                loader: plugins.extractCSS.loader,
                options: {
                  publicPath: '../' // use relative path for everything in CSS
                }
              },
              {
                loader: 'css-loader',
                options: {

                }
              },
              {
                loader: 'postcss-loader',
                options: {
                // Webpack requires an identifier (ident) in options when {Function}/require is used (Complex Options). 
                // The ident can be freely named as long as it is unique. It's recommended to name it (ident: 'postcss')
                  ident: 'postcss',
                // https://github.com/postcss/postcss
                  plugins: ((loader) => [
                   require('postcss-import')({ root: loader.resourcePath }),
                   require('autoprefixer')(),
                      require('cssnano')({
                        preset: ['default', {
                          minifySelectors: false
                        }]
                      })
                  ])
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    fiber: require('fibers'),
                    outputStyle: 'expanded',
                  }
                }
              }
            ]
          }
        ]
    }
};

module.exports.plugins = [
  new plugins.extractCSS(),
];
