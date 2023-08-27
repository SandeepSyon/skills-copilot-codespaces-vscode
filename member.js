function skillsMember(){
    return {
        restrict : 'E', //  eslint-disable-line no-unused-vars  global              
        templateUrl : '/js/directives/skillsMember.html',
        controller : 'skillsMemberController',
        controllerAs :'vm',
        bindToController : true,
        scope : {
            skills : '='
        }
    };
}