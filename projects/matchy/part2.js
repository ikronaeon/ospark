//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

// 2C
var animals = [];                          // 1 Array Literal   
animals.push(animal);                      // 2 .push() method adds object to end of indexof[0] to variable array with current idexof[-1]
var twitter = animals[0];                  // 3 Assigns variable to array indexof[0]
console.log(twitter);                      // 4 logs variable object to console
console.log(Object.keys(twitter));         // 5 logs variable array object keys to console
twitter = new Map();
twitter.get(animals);
console.log(twitter.get(animals));
// 3C


/*
var my_obj = Object.create({}, { 
    getFoo: { 
        value: function() { 
            return this.foo; 
        } 
    } 
});

my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
*/