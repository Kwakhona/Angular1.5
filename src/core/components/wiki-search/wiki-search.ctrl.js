class WikiSearchCtrl {
    constructor(WikiSearchService) {
        'ngInject';

        this.wikiSearchService = WikiSearchCtrl;
        
        this.onSearch = this.onSearch.bind(this);
        this.afterSearch = this.afterSearch.bind(this);
    }

    onSearch(value) {
        if(value !== '' && value !== undefined) {
            return this.wikiSearchService.get(value);
        }

        return Rx.Observable.from([undefined]);
    }

    afterSearch(value) {
        if(response) {
            this.results = response.data[1];
        } else {
            this.results = [];
        }
    }
}

export default WikiSearchCtrl;