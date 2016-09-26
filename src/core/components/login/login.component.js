import LoginTemplate from './login.template.html';
import LoginCtrl from './login.ctrl';

export default {
    template: LoginTemplate,
    bindings: {
        resolve: '='
    },
    controller: LoginCtrl,
    controllerAs: '$ctrl'
};