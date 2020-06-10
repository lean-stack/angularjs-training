(function(){

  angular.module('myApp')
    .controller('DemoCtrl', DemoController);

  function DemoController() {

    // Define a instance property
    this.trainer = "Michael Alt";

    // Best-Practice
    var vm = this;    // Copy reference to instance

    // Allways work with reference
    vm.location = 'Nürnberg';
  }

})();
