class LoginCtrl {
    constructor(AuthenticationService, toastr, $state) {
        'ngInject';

        this.AuthenticationService = AuthenticationService;
        this.toastr = toastr;
        this.$state = $state;
    }

    login() {
        this.AuthenticationService.login(this.username, this.password).then((result) => {
            this.$state.go('state-a');
            this.toastr.success('Login Successful');
        }, (error) => {
            this.toastr.success('Login Failed');
            consol.log(error);
        });
    }
}

export default LoginCtrl;