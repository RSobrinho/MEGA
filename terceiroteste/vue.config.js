// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pages: {
        'landingPage': {
            entry: './src/pages/landingPage/main.js',
            template: 'public/index.html',
            title: 'landingPage',
            chunks: [ 'chunk-vendors', 'chunk-common', 'landingPage']
        },
         'telaLogin': {
             entry: './src/pages/telaLogin/main.js',
             template: 'public/index.html',
             title: 'telaLogin',
             chunks: [ 'chunk-vendors', 'chunk-common', 'telaLogin']
         },

         // restaurarSenha
         // 
         'telaPrincipal': {
             entry: './src/main.js'
         }
     }

  }