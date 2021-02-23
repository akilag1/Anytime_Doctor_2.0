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
      },
      'login': {
        entry: './src/pages/login/main.js',
        template: 'public/index.html',
        title: 'Login',
        chunks: [ 'chunk-vendors', 'chunk-common', 'login' ]
      },
      'doctors': {
        entry: './src/pages/doctors/main.js',
        template: 'public/index.html',
        title: 'Doctors',
        chunks: [ 'chunk-vendors', 'chunk-common', 'doctors' ]
      },
      'hospitals': {
        entry: './src/pages/hospitals/main.js',
        template: 'public/index.html',
        title: 'Hospitals',
        chunks: [ 'chunk-vendors', 'chunk-common', 'hospitals' ]
      },
      'dashboard': {
        entry: './src/pages/dashboard/main.js',
        template: 'public/index.html',
        title: 'Dashboard',
        chunks: [ 'chunk-vendors', 'chunk-common', 'dashboard' ]
      }
    }
  }