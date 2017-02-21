// 1. Make a class called Trailer that extends Movie
class MoviePlayer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieTitle, movieID) {

        // 3. Call the parent constructor function using the super function
        super();

        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = movieTitle;
        this.id = movieID;
        //had to use name and id from the Movie.js file to get it to work.
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var chorusLine = new MoviePlayer('A Chorus Line', '9-sSE7w-3e4');

var musicMan = new MoviePlayer('The Music Man', 'sIPL8Yb25T4');

var sevenBrides = new MoviePlayer('Seven Brides for Seven Brothers', 'CfFFFfRwsR0');

var oklahoma = new MoviePlayer('Oklahoma', 'V6uD9-aLCps');
