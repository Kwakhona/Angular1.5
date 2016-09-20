import AppComponent from './app/app.component';
import LoginComponent from './login/login.component';

export default angular.module('core.component', [])
    .component('app', AppComponent)
    .component('login', LoginComponent);