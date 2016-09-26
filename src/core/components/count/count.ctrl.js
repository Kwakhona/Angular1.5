import { autorun } from 'mobx';

class CountCtrl {
    constructor(MobxServiceExample){
        'ngInject';

        this.mobxServiceExample = MobxServiceExample;
    }

    $onInit() {
        autorun(() => {
            this.count = this.mobxServiceExample.items.length;
        });
    }
}

export default CountCtrl;