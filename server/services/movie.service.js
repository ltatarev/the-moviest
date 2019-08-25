$(document).ready(function() {
    fetch(
            "https://api.themoviedb.org/3/movie/5?api_key=b5efa85196e4919222c431b10c08ef77&language=en-US"
        )
        .then(function(resp) {
            return data = resp.json();
        }).then(data => console.log(data))
});