import AppComponent from './app/app.component';
import LoginComponent from './login/login.component';
import LogoutComponent from './logout/logout.component';
import ListComponent from './list/list.component';
import ContainerFluidComponent from './container-fluid/container-fluid.component';

export default angular.module('core.component', [])
    .component('app', AppComponent)
    .component('login', LoginComponent)
    .component('logout', LogoutComponent)
    .component('list', ListComponent)
    .component('containerFluid', ContainerFluidComponent);