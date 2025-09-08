document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');

   
    searchInput.addEventListener('focus', function () {
        searchInput.style.width = '350px';
        searchInput.style.transition = 'width 0.5s ease';
    });

    
    searchInput.addEventListener('blur', function () {
        searchInput.style.width = '300px';
    });

    
});