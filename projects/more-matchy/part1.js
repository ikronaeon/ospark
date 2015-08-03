//Use this file to implement Part One of your project

/* Unit Tests: 
    
    A test block starts with an it function. The it funciton takes two
    arguments. The first is a statement describing the rule addressed 
    by tests. The second is a function that will either evaluate to true
    or false. The expect statement (expect(ACTUAL === 'inner').to.be.true;)
    will evaluate if the statement between the parens ACTUAL === 'inner' is
    true. The expect statement bellow "expects that the variable ACTUAL 
    equals the value 'inner' to be true". 
    
   Example Code:
   
   it('a function has access to its own local scope variables'),
   
    function() {
        var fn = function() {
            var name = 'inner';
            ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'inner').to.be.true;
    });
   
*/

var animal;

var animal = [
    {species: 'Byrd'},
    {tagline: 'Tweat!'},
    {noise: 'Chirp'}
];

var data;

var data = animal;

 function objKeyPrinter(obj) {
       return Object.keys(obj).join(" ");
   }
   console.log(objKeyPrinter(data[0]));

/*
animal["species"] = 'Byrd';
animal["tagline"] = 'Tweat!';
animal["noise"] = 'Tweet!';
*/

/*
function objKeyPrinter(input, output) {
  if (Array.isArray(input)) {
    return input.indexOf(value) > -1;
  } else {
    for (var key in input) {
      if (input[key] === value) { 
        return true;
      }
    }
    return false;
  }
}
*/
