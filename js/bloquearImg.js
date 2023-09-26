document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, false);
});
