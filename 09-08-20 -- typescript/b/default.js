var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = "PG"; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.print = function () {
        console.log(this.rating);
    };
    return Movie;
}());
var film = new Movie("John Wick", "Summit Entertainment");
film.print();
