class AppCtrl {
    constructor($rootScope, $stateParams, $state, AuthenticationService, toastr) {
        'ngInject';
        this.title = $stateParams.name ? 'Name Param: ' + $stateParams.name : 'No Name Param';

        this.$state = $state;
        this.toastr = toastr;
        this.AuthenticationService = AuthenticationService;
    }

}

export default AppCtrl;