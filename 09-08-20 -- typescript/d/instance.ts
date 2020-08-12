class Movie{
    //properties
        title:String;
        studio:String;
        rating:String;

        constructor(title:string,studio:string,rating : string){
         
            this.title = title;
            this.studio = studio;
            this.rating = rating;

        }        
        print(){
            console.log(this.title)
            console.log(this.studio)
            console.log(this.rating)
        }
    }
    
    let film1 = new Movie("John Wick","Summit Entertainment","PG");
    let film2 = new Movie("Casino Royale","Eon Productions","PG13");

      film1.print()
      film2.print()