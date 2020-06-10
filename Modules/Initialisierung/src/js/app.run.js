angular.module('myApp')
  .run(function() {
    console.log('Angular App started ...');
    console.info('- Version:', angular.version.full);
    console.info('- Modules loaded, Services can be used');
    console.info('- Start-Up Code for the app');
  })
  .config(function($compileProvider) {
    console.log('Configuring App ...');
    console.log('- Setting up service providers');
    $compileProvider.debugInfoEnabled(false);
  });
