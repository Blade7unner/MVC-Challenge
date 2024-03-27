document.addEventListener('DOMContentLoaded', function () {
    
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        console.log('Button clicked!');
    });

    
    function fetchMoreContent() {
        fetch('/posts')
            .then(response => response.json())
            .then(data => {
                
                console.log('Fetched data:', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

   
    const loadMoreButton = document.getElementById('load-more-button');
    loadMoreButton.addEventListener('click', function (event) {
        event.preventDefault();
        fetchMoreContent();
    });
});
