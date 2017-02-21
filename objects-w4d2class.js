//here we have made object-literals
//array has a .length property. 
//strings have pretty much only one property--.length
//methods we could use on strings: toUpperCase, toLowerCase, slice, includes, split
//methods we could use on array: splice (insert something between items), slice
var house = {
    stories: 3,
    location: 'Carmel', //could also do a sub-object like {city: 'Carmel'}
    zipcode: 46032,
    materials: ['brick', 'gold', 'marble'],
    houseColor: 'yellow',
    clean: function() {
        console.log('All clean.');
    }
};

// console.log(house.stories);
// house.clean();

var house2 = {
    stories: 1,
    location: 'Indianapolis',
    zipcode: 46240,
    materials: ['wood', 'siding'],
    houseColor: 'tan',
    clean: function() {
        console.log('All clean.');
    }
};

//master template. made with constructor functions. fancy functions that are assigned to a variable. you can't directly call and interact with it. It's not a typical object. It's a template for other objects to be made from. They are upper-case. like we have var House.

var House = function() {
    // these are called Instance Variables
    this.stories = 1; // "this" refers to the carmelHouse and indyHouse. "this" refers to a particular variable.
    this.materials = ['wood', 'brick'];
    // this.makeItAMansion = function() {
    //     this.stories = 3;
    //     this.materials = ['wood', 'brick'];
    //     this.materials.push('gold');
    //     this.materials.push('marble');
    // }
};

// These are New Instances
var carmelHouse = new House();
carmelHouse.stories = 3;

// console.log(carmelHouse);

var indyHouse = new House();
//indyHouse doesn't need to note how many stories it has, because we set the default to 1 in the House constructor function.

// console.log(indyHouse);

//create a master template using a constructor function, Movie, with a function holding  Instance variables and method.
// var Movie = function() {
//     this.title = '';
//     this.youtubeID = '';

//     this.play = function() {
//         youtube.play(this.youtubeID);
//     }
// }

// var laLaLandTrailer = new Movie();
// lalaLandTrailer.title = 'La La Land';
// laLaLandTrailer.youtubeID = '0pdqf4P9MB8'; 
//the youtube id is in the URL window when you open the vidoe. That little code at the end of the address. https://www.youtube.com/watch?v=0pdqf4P9MB8

// different way to do this. THIS IS OUR HOMEWORK 
// es6 classes
// all other languages do it this way and can now be used in JS. 


// create the master template.
class Movie { 
    // class is a keyword. no weird function before it.
    constructor(movieTitle, movieID) { 
        //this is a built-in function
        this.title = movieTitle;
        this.youtubeID = movieID;

        // method bindings
        this.play = this.play.bind(this); 
        //any time you have a method, and you have to use "this." or any of your constructor things inside of it, you have to have this line within the constructor. So play here would be whatever the name of our method would be. If the method didn't refer to a construtor variable, then you don't need this line. 
        this.pause = this.pause.bind(this);
    }

    play() { 
        // in the parens, you put in anything like pauseAtStart
        //whatever the code is to make it play
        console.log('Playing ' + this.title);
    }

    pause() {
        console.log('Pausing ' + this.title);
    }

    eat() {
        console.log('Eating you.');
    }
}

class ThrillerMovie extends Movie { 
    //gives us a new class to work with and extends it onto everything already in movie. 
    constructor(movieTitle, movieID) {
        super(movieTitle, movieID); 
        //put super here to run the supervising class constructor first and then runs the extending class
        this.genre = 'Thriller';
    }
}

var jawsFilm = new ThrillerMovie('Jaws', 'watch?v=U1fu_sA7XhE'); 
//now jawsFilm is a literal object

jawsFilm.play();
jawsFilm.pause();
jawsFilm.eat();
// don't need to have console.log here, because we had it within the methods in the constructor function.







