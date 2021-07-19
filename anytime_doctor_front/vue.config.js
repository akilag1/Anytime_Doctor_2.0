module.exports = {
    pages: {
      'index': {
        entry: './src/pages/home/main.js',
        template: 'public/index.html',
        title: 'Anytime Doctor',
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
      },
      'online_doctors': {
        entry: './src/pages/online_doctors/main.js',
        template: 'public/index.html',
        title: 'Online_Doctors',
        chunks: [ 'chunk-vendors', 'chunk-common', 'online_doctors' ]
      },
      'available_doctors': {
        entry: './src/pages/available_doctors/main.js',
        template: 'public/index.html',
        title: 'Available_Doctors',
        chunks: [ 'chunk-vendors', 'chunk-common', 'available_doctors' ]
      },
      'doctor_appointment': {
        entry: './src/pages/doctor_appointment/main.js',
        template: 'public/index.html',
        title: 'Doctor_Appointment',
        chunks: [ 'chunk-vendors', 'chunk-common', 'doctor_appointment' ]
      },
      'test_appointment': {
        entry: './src/pages/test_appointment/main.js',
        template: 'public/index.html',
        title: 'Test_Appointment',
        chunks: [ 'chunk-vendors', 'chunk-common', 'test_appointment' ]
      },
      'doctor_profile': {
        entry: './src/pages/doctor_profile/main.js',
        template: 'public/index.html',
        title: 'Doctor_Profile',
        chunks: [ 'chunk-vendors', 'chunk-common', 'doctor_profile' ]
      },
      'hospitals/hospital_profile': {
        entry: './src/pages/hospital_profile/main.js',
        template: 'public/index.html',
        title: 'Hospital_Profile',
        chunks: [ 'chunk-vendors', 'chunk-common', 'hospitals/hospital_profile' ]
      },
    }
  }