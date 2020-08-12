var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.print = function () {
        console.log(this.title);
        console.log(this.studio);
        console.log(this.rating);
    };
    return Movie;
}());
var film1 = new Movie("John Wick", "Summit Entertainment", "PG");
var film2 = new Movie("Casino Royale", "Eon Productions", "PG13");
film1.print();
film2.print();
