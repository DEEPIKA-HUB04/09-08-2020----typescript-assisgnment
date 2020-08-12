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
            }
        }
        
        let film = new Movie("John Wick","Summit Entertainment","PG");
          film.print()