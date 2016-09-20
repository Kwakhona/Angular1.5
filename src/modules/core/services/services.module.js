import AuthenticationService from './authentication.service';
import MobxServiceExample from './mobx-example.service';
import RxServiceExample from './ex-example.service';

export default angular.module('core.services', [])
    .service('AuthenticationService', AuthenticationService)
    .service('MobxServiceExample', MobxServiceExample)
    .service('RxServiceExample', RxServiceExample);