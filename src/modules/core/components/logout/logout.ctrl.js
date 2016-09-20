class LogoutCtrl {
    constructor(AuthenticationService, $state, toastr){
        'ngInject';

        this.AuthenticationService = AuthenticationService;
        this.$state = $state;
        this.toastr = toastr;
    }
    
    logout() {
        this.AuthenticationService.logout();
        this.toastr.success('Logout Successful. Farewell!');
        this.$state.go('login');
    }
}

export default LogoutCtrl;