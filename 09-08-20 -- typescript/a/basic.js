var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.print = function () {
        console.log(this.title);
    };
    return Movie;
}());
var film = new Movie("John Wick", "Summit Entertainment", "PG");
film.print();
