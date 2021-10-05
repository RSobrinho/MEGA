// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pages: {
        'landingpage': {
            entry: './src/pages/TlandingPage/main.js',
            template: 'public/index.html',
            title: 'landingpage',
            chunks: [ 'chunk-vendors', 'chunk-common', 'landingpage']
        },
         'telalogin': {
             entry: './src/pages/TtelaLogin/main.js',
             template: 'public/index.html',
             title: 'telalogin',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telalogin']
         }
     }
  }