import angular from 'angular';

class SearchBox {
    constructor() {
        this.placeholder = '请输入关键字';
    }

    autoComplete() {
        if (this.getSearchResult && this.searchText && this.searchText.trim()) {
            this.getSearchResult({ text: this.searchText })
                .then((response) => {
                    if (angular.isArray(response)) {
                        console.log(response);
                        this.isResultShow = true;
                        this.results = response;
                    }
                });
        }
    }

    getDetail(item) {
        if (this.searchDetail) {
            this.searchDetail({ id: item.id });
        }
    }
}

export default SearchBox;