var animal = {};
animal.species = 'dog';
animal['name'] = 'Paris';
animal.noises = [ ];

console.log(animal);

var noises = [ ];
noises[0] = 'bark';
noises.push('whine');
noises.unshift('whimper');
noises[noises.length] = 'pant';
console.log(noises);

animal['noises'] = noises;
animal.noises.push('growl');
console.log(animal);

var animals = [ ];
animals.push(animal);
console.log(animals);

var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk','sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var cat = {species: 'cat', name: 'Garfield', noises: ['purr', 'meow'] };
animals.push(cat);
console.log(animals);

var horse = {species: 'horse', name: 'Amber', noises: ['nay', 'hoof'] };
animals.push(horse);
console.log(animals);

console.log(animals.length());

// I chose to use the array data structure because in this case it is easier to access and manipulate its data values...especially since all that's needed for this list of friends is the animals' names

var friends = [ ];
function getRandomAnimalName(array){
    function getRandomAnimalInt(min, max){
        min = Math.ceil(0);
        max = Math.floor(4);
        return Math.floor(Math.random() *(max - min)) + min;
        }
return array[getRandomAnimalInt(0, 4)].name;
}
                            

console.log(getRandomAnimalName(animals));

friends.push(getRandomAnimalName(animals));

console.log(friends);

friends.push(friends);
console.log(friends);


function search(animalName){
  if (animalName === name) {
    for (var i = 0; i < animals.length; i++)
  } return animals[i].name;
  else {
    return null;
  }
} 
  console.log(search('Paris'));
  
function edit(animalName, object){
    var newObject = function replace(object){
    }
    if (animalName === name){
        for (var key in object)
    }   return newObject;
}

