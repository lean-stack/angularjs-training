(function(){

angular.module('myApp')
  .controller('ParentCtrl', ParentController);

function ParentController() {
  var vm = this;
  vm.topics = ['Controller','Scope','Dependency Injection','Modules'];
}

})();

