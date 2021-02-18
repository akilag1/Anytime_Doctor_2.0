module.exports = {
    pages: {
      'index': {
        entry: './src/pages/home/main.js',
        template: 'public/index.html',
        title: 'Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      'register': {
        entry: './src/pages/register/main.js',
        template: 'public/index.html',
        title: 'Register',
        chunks: [ 'chunk-vendors', 'chunk-common', 'register' ]
      }
    }
  }