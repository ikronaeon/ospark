// Use this file to implement Part One of your project

/*
var animal = {
    species: "Duck",
    tagline: "Tweet",
    noise: "noll";
    
}


*/

// 1A
var animal = {}                         // 1 Object Literal notation
animal.species = 'Duck';                // 2 Dot notation on object assigns key && prop value
console.log(animal.species);            // 3 logs object to console
animal["tagline"] = "Afflack";  // 4 bracket notation assigns ["key"] && prop value
console.log(animal["tagline"]);         // 5 logs object property/value
animal["noise"] = null;               // 6 brack notation assigns ["key"] && prop value
console.log(animal);                    // 7 logs object to console

// 1B
var noiseArray = [];                    // 1 Array literal notation
noiseArray[0] = 'quack';               // 2 Brackets assign indexof array && prop value
noiseArray.push('honk');              // 3 .push() method assigns value to the end of an array   
noiseArray.unshift('sneeze');           // 4 .unshift() method assigns value to the beginning of an array && returns length of new array
noiseArray[3] = 'growl';               // 5 assigns string to the third (fourth) indexof array
console.log(noiseArray.length);         // 6 logs length of array to console
console.log(noiseArray.indexOf());      // 7 
console.log(noiseArray);                // 8 logs array to console
    
// 1C
var noizes = 'noises';                              // 1 Assigns Value 
noizes = animal["noise"];                           // 2 Assigns new variable to our objects property
console.log(noizes);                                // 3 logs new object variable to console
noizes = animal["noise"] = noiseArray.toString();   // 4 Assigns a variable w/in a variable w/in a variable && uses the .toString() method to print to string
console.log(noizes);                                // 5 logs new variable object & property values to console    
console.log(animal);                                // 6 logs nested key/value pairs as our object to console

    
/*
console.log(tagline);

function animalPairs(species, friends) {
    pair = Math.random(animal.species % animal.friends);
    return pair;
}

console.log(animalPairs("lion", "tiger"));
*/


// var animal["species"] = ['Lion', 'Tiger', 'Bear'];

// var animalFriend.relationships = ['Wolf', 'Eagle', 'Fish'];



