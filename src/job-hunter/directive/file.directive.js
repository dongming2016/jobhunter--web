function link(scope, element, attr) {
    element.bind('change', function() {
        const file = this.files[0];
        var fr = new FileReader();
        fr.onload = function() {
            scope.file = fr.result;
            scope.$eval(attr.fileChange);
        };
        fr.readAsDataURL(file);        
    });
}

export default link;