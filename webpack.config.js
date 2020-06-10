const path = require('path');

module.exports = {
    entry: '',
    output:  {
        filename: 'main.js',
        // distribution through the dist folder
        path: path.resolve(__dirname, 'dist'),
    },
};