//Arrays are generally described as "list-like objects"; 
//they are basically single objects that contain multiple values stored in a list.
//Arrays consist of square brackets and items that are separated by commas.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

//But in an array we can store various data types — strings, numbers, objects, and even other arrays. We can also mix data types in a single array —
 //we do not have to limit ourselves to storing only numbers in one array, and in another only strings. For example:

 const sequence = [1, 1, 2, 3, 5, 8, 13];
 const random = ['tree', 795, [0, 1, 2]];

 //finding the length of an array

//  const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping.length);  // 5

//Accessing and Modifying an array items

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping[0]);
// returns "bread"

// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// shopping[0] = 'chocolate';
console.log(shopping);
// shopping will now return [ "chocolate", "milk", "cheese", "hummus", "noodles" ]

//Note that an array inside an array is called a multidimensional array. 
//You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.

// const sequence = [1, 1, 2, 3, 5, 8, 13];
// const random = ['tree', 795, [0, 1, 2]];

console.log(random)

const newName = random.length //checking the length of the array
console.log(newName)

random[2]
console.log(random[2]) //checking the item index

shopping[0] = 'chocolate'
console.log(shopping)

random[2][2];
console.log(random[2][2]) //assessing the item of an array inside another array

//If you don't know the index of an item, you can use the indexOf() method. 
//The indexOf() method takes an item as an argument and will either return the item's index or -1 if the item is not in the array:

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1

//Adding Items

