angular.module('myApp')
  .run(function() {
    console.log('Angular App started ...');
    console.info('Version:', angular.version.full);
  })
  .config(function($compileProvider) {
    // $compileProvider.debugInfoEnabled(false);
  })
  ;
