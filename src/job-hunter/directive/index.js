import link from './file.directive';

export default angular.module('myDirective', [])
    .directive('fileChange', function() {
        return { restrict: 'A', 
                link };
    }).name;