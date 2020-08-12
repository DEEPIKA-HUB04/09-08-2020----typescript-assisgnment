class Movie{
        //properties
            title:String;
            studio:String;
            rating:String;
    
            constructor(title:string,studio:string,rating : string = "PG"){ // default value
             
                this.title = title;
                this.studio = studio;
                this.rating = rating;
    
            }        
            print(){
                console.log(this.rating)
            }
        }
        
        let film = new Movie("John Wick","Summit Entertainment");
          film.print()