// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pages: {
        'landingpage': {
            entry: './src/pages/landingpage/main.js',
            template: 'public/index.html',
            title: 'landingpage',
            chunks: [ 'chunk-vendors', 'chunk-common', 'landingpage']
        },
         'telalogin': {
             entry: './src/pages/telalogin/main.js',
             template: 'public/index.html',
             title: 'telalogin',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telalogin']
         },
         'telaadmin': {
             entry: './src/pages/telaadmin/main.js',
             template: 'public/index.html',
             title: 'telaadmin',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telaadmin']
         },
         'listapacientes': {
             entry: './src/pages/listapacientes/main.js',
             template: 'public/index.html',
             title: 'listapacientes',
             chunks: [ 'chunk-vendors', 'chunk-common', 'listapacientes']
         },
         'telalaudo': {
             entry: './src/pages/telalaudo/main.js',
             template: 'public/index.html',
             title: 'telalaudo',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telalaudo']
         },
         'telaupload': {
             entry: './src/pages/telaupload/main.js',
             template: 'public/index.html',
             title: 'telaupload',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telaupload']
         },
         
     }
  }