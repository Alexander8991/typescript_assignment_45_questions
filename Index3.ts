                   //Question #19

//let dinnerGuests = ["Hidayat", "Taif", "Zubair", "Hamad", "Ali", "Arif", "Shamir", "Ali"];

//let numberOfGuests = dinnerGuests.length;

// Print a message indicating the number of guests
//console.log(`I'm inviting ${numberOfGuests} guests to dinner.`);
//I'm inviting 8 guests to dinner.

                   //Question #20
 // Create an array of "Sports Sedan Cars"
//let myDreamCars = [
 //   "BMW M5 Competition LCI",
 //   "BMW M3 Competition",
 //   "Audi RS5 Sportback",
 //   "Mercedes Benz E63 AMG 4Matic",
 //   "Audi S4 3.0 tfsi"
 // ];
  
  //List of My Dream Cars
  //console.log("List of My Dream Cars:");
  //for (let car of myDreamCars) {
  // console.log(car);
  //};  

  /*List of My Dream Cars:
BMW M5 Competition LCI
BMW M3 Competition
Audi RS5 Sportback
Mercedes Benz E63 AMG 4Matic
Audi S4 3.0 tfsi
                      */  
                     

                      //Question #21  
                      
 // Create objects containing information about Sports Sedan Cars
/* const BMW = {
    make: "BMW M5 Competition",
    model: "2023",
    color: "Sapphire Black",
    specs: "4.4L Twin Turbo, 625bhp, 750nm",
    topspeed: "309 km/h"
  };
  
  const MercedesBenz = {
    make: "Mercedes Benz E63 AMG 4Matic",
    model: "2023",
    color: "Pearl Black",
    specs: "4.0L Twin Turbo, 510bhp, 650nm",
    topspeed: "300 km/h"
  };
  
  const Audi = {
    make: "Audi RS5 Sportback",
    model: "2023",
    color: "Demon Black",
    specs: "3.0L Twin Turbo, 444bhp, 600nm",
    topspeed: "300 km/h"
  };
  
  // Print information about the landmarks
  console.log("Information about Sports Sedan Cars:");
  console.log(BMW);
  console.log(MercedesBenz);
  console.log(Audi);
                   
  */
  
  //Information about Sports Sedan Cars:
  /*
{
    make: 'BMW M5 Competition',
    model: '2023',
    color: 'Sapphire Black',
    specs: '4.4L Twin Turbo, 625bhp, 750nm',
    topspeed: '309 km/h'
  }
  {
    make: 'Mercedes Benz E63 AMG 4Matic',
    model: '2023',
    color: 'Pearl Black',
    specs: '4.0L Twin Turbo, 510bhp, 650nm',
  {
    make: 'Audi RS5 Sportback',
    model: '2023',
    color: 'Demon Black',
    specs: '3.0L Twin Turbo, 444bhp, 600nm',
    topspeed: '300 km/h'
  }
   */

                   //Question #22 
 
/*let myDreamCars = [
    "BMW M5 Competition LCI",
    "BMW M3 Competition",
    "Audi RS5 Sportback",
    "Mercedes Benz E63 AMG 4Matic",
    "Audi S4 3.0 tfsi"
  ];       
  
  // Creating an error by accessing beyond index of array
const indexToAccess = 7;
console.log(myDreamCars[indexToAccess]);  // This line will cause an error
    
// Correct the error by checking if the index is within range
if (indexToAccess >= 0 && indexToAccess < myDreamCars.length) {
  console.log("Corrected: ", myDreamCars[indexToAccess]);
} else {
  console.log("Index is not existed!");
};                                       //Index is not existed!(Ans)
     */
//                       //Question #23 
// let num1 = 92;
// let num2 = 90;
// let string1 = 'Norway';
// let string2 = 'norway';
// let isSunny = true;
// let isRaining = false;
                      
//                       // Test 1: Equality check for two numbers
//         console.log("Is num1 == num2? I predict False.");
//         console.log(num1 == num2);                              //false
                      
//                       // Test 2: Equality check for two strings
//         console.log("Is string1 == string2? I predict False.");
//         console.log(string1 == string2);                         //false
                      
//                       // Test 3: Inequality check for two numbers
//         console.log("Is num1 != num2? I predict True.");
//         console.log(num1 != num2);                               //true    
                      
//                       // Test 4: Inequality check for two strings
//         console.log("Is string1 != string2? I predict True.");
//         console.log(string1 != string2);                          //true
                      
//                       // Test 5: Logical AND with two boolean variables
//         console.log("Is isSunny && isRaining? I predict False.");
//         console.log(isSunny && isRaining);                         //false
                      
//                       // Test 6: Logical OR with two boolean variables
//          console.log("Is isSunny || isRaining? I predict True.");
//         console.log(isSunny || isRaining);                           //true
                      
//                       // Test 7: Greater than check for two numbers
//         console.log("Is num1 > num2? I predict True.");
//         console.log(num1 > num2);                                   //true
                      
//                       // Test 8: Less than check for two numbers
//         console.log("Is num1 < num2? I predict False.");
//         console.log(num1 < num2);                                    //false
                      
//                       // Test 9: Greater than or equal to check for two numbers
//         console.log("Is num1 >= num2? I predict True.");
//         console.log(num1 >= num2);                                  //true
                      
//                       // Test 10: Less than or equal to check for two numbers
//         console.log("Is num1 <= num2? I predict False.");
//         console.log(num1 <= num2);                                  //false
                      


//Question # 24

// Tests for equality and inequality with strings
// let fruit1: string = 'Mango';
// let fruit2: string = 'Orange';

// console.log("Is fruit1 == fruit2? I predict False.");
// console.log(fruit1 == fruit2);                         //false

// console.log("Is fruit1 != fruit2? I predict True.");
// console.log(fruit1 != fruit2);                         //true

// // Tests using the lowercase function
// let country_city: string = 'Norway, Oslo';
// let lowercasecountry_city: string = country_city.toLowerCase();

// console.log("Is lowercasecountry_city == 'Norway, Oslo'? I predict False.");
// console.log(lowercasecountry_city == 'Norway, Oslo');                     //false

// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let numA: number = 75;
// let numB: number = 85;

// console.log("Is numA > numB? I predict False.");
// console.log(numA > numB);                             //false

// console.log("Is numA < numB? I predict True.");
// console.log(numA < numB);                             //true

// console.log("Is numA >= numB? I predict False.");
// console.log(numA >= numB);                           //false

// console.log("Is numA <= numB? I predict True.");
// console.log(numA <= numB);                          //true

// // Tests using "and" and "or" operators
// let isTrue: boolean = true;
// let isFalse: boolean = false;

// console.log("Is isTrue && isFalse? I predict False.");
// console.log(isTrue && isFalse);                          //false

// console.log("Is isTrue || isFalse? I predict True.");
// console.log(isTrue || isFalse);                            //true

// // Test whether an item is in an array
// let numbers: number[] = [1, 2, 3, 4, 5];

// console.log("Is 3 in the 'numbers' array? I predict True.");
// console.log(numbers.includes(3));                              //true

// // Test whether an item is not in an array
// let fruits: string[] = ['mango', 'orange', 'banana'];

// console.log("Is 'grape' in the 'fruits' array? I predict False.");
// console.log(!fruits.includes('grape'));                            //false



                      //Question #25
/*
let alien_color = 'red';

if (alien_color == 'red') {
                console.log("Congratulation! You just earned 5 points.");
};
   */
//Congratulations! You just earned 5 points.
/*
let alien_color = 'yellow';

if (alien_color == 'green') {
  console.log("Congratulations! You just earned 5 points.");
};     */
        //The result is not Printed


                    //Question #26
/*
let alien_color = 'green';

if (alien_color == 'green') {
         console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
            console.log("Congratulations! You just earned 10 points.");
};
*/
         //Congratulations! You just earned 5 points for shooting the alien.


/*
let alien_color = 'green';

if (alien_color == 'yellow') {
                      
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
         console.log("Congratulations! You just earned 10 points.");
 };
         //Congratulations! You just earned 10 points.           
                                       */
                        
                            //Question #27

 /*                           
let alien_color = 'green';

if (alien_color == 'green') {
                      console.log("Congratulations! You just earned 5 points.");
} else if (alien_color == 'yellow') {
                      console.log("Congratulations! You just earned 10 points.");
} else if (alien_color == 'red') {
                     console.log("Congratulations! You just earned 15 points.");
};
          */
          //Congratulations! You just earned 5 points.
/*

let alien_color = 'yellow';

if (alien_color == 'green') {
                    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color == 'yellow') {
                     console.log("Congratulations! You just earned 10 points.");
} else if (alien_color == 'red') {
                     console.log("Congratulations! You just earned 15 points.");
};
        */
            //Congratulations! You just earned 10 points.
 
//let alien_color = 'red';

//if (alien_color == 'green') {
//                console.log("Congratulations! You just earned 5 points.");
//} else if (alien_color == 'yellow') {
//                console.log("Congratulations! You just earned 10 points.");
//} else if (alien_color == 'red') {
//                console.log("Congratulations! You just earned 15 points.");
//};
                //Congratulations! You just earned 15 points.

   
   /*             // Question #28
let age = 32;

if (age < 2) {
              console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
              console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
              console.log("The person is a kid.");
 } else if (age >= 13 && age < 20) {
              console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
              console.log("The person is an adult.");
} else {
              console.log("The person is an elder.");
};
                      */
           //The person is an adult.(Ans)     
           
                //Question #29
/*
let favorite_fruits: string[] = ['Pomergranate', 'Mango', 'Orange'];

if (favorite_fruits.includes('Pomergranat')) {
    console.log.("You really like Pomergranats!");  
}    
if(favorite_fruits.includes('Banana')) {
    console.log("You really like Bananas!");
}   

if(favorite_fruits.includes('Orange')) {
    console.log("You really like Oranges!");
}   

if(favorite_fruits.includes('Mango')) {
    console.log("You really like Mangos!");
}

if(favorite_fruits.includes('Grapes')) {
    console.log("You really like Grapes!");
};

                     */

                  //Question # 30
/*

let userNames: string[] = ['admin', 'Ali', 'Zubair', 'Yousuf', 'Hamad'];

for (let userName of userNames) {
  if (userName === 'admin') {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
};
          */
//Hello admin, would you like to see a status report?
//Hello Ali, thank you for logging in again.
//Hello Zubair, thank you for logging in again.
//Hello Yousuf, thank you for logging in again.
//Hello Hamad, thank you for logging in again.

//Question # 31
let usernames: string[] = ['admin', 'Ali', 'Zubair', 'Yousuf', 'Hamad'];

if (usernames.length === 0) {
  console.log('We need to find some users!');
} else {
  for (let username of usernames) {
    if (username === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames
usernames = [];

if (usernames.length === 0) {
  console.log('We need to find some users!');
}

// (Answer)

// Hello admin, would you like to see a status report?
// Hello Ali, thank you for logging in again.
// Hello Zubair, thank you for logging in again.
// Hello Yousuf, thank you for logging in again.
// Hello Hamad, thank you for logging in again.
// We need to find some users!



            //Question #32
/*
let currentUsers:string [] = ['Taif', 'Ahmed', 'Atif', 'Ali', 'Hamad', 'Zubair', 'Hidayat'];
let newUsers:string[] = ['Basit', 'Arif', 'Taif', 'Rashid', 'Noman'];

// Function to check if a username is already taken (case-insensitive)
function isUserNameTaken(userName:string): boolean{
    const lowerCaseUserName = userName.toLowerCase();
    return currentUsers.some(user => user.toLowerCase() === lowerCaseUserName)
}

// Loop through the new_users list
for (let newUserName of newUsers) {
    if (isUserNameTaken(newUserName)) {
      console.log(`Sorry, the username '${newUserName}' is already taken. Please choose a different one.`);
    } else {
      console.log(`Congratulations! The username '${newUserName}' is available.`);
    }
  };
                    */
  //ongratulations! The username 'Basit' is available.
//Congratulations! The username 'Arif' is available.
//Sorry, the username 'Taif' is already taken. Please choose a different one.
//Congratulations! The username 'Rashid' is available.
//Congratulations! The username 'Noman' is available.
  
  
                       //Question #33
/*
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let number of numbers) {
           let ordinal: string;
                      
if (number === 1) {
        ordinal = "1st";
} else if (number === 2) {
        ordinal = "2nd";
} else if (number === 3) {
        ordinal = "3rd";
} else {
        ordinal = number + "th";
}
                      
        console.log(ordinal);
 };
  
             */
                    //Question #34

// let favoritePizzas: string[] = ['Pepperoni', 'Chicken Tekka', 'BBQ Chicken'];

//                     // Printing the names of each pizza
//             console.log(`My favorite pizzas are:`);
                    
// for (let pizza of favoritePizzas) {
//              console.log(pizza);
// }
                    
//                     // Printing a sentence for each pizza
//             console.log("\nMore about my favorite pizzas:");
                    
// for (let pizza of favoritePizzas) {
//                 console.log(`I would like ${pizza} pizza.`);
// }
                    
//                     // Additional sentence about loving pizza
//                 console.log("\nI really love pizza!");
// /* 
//                 My favorite pizzas are:
//                 Pepperoni
//                 Chicken Tekka
//                 BBQ Chicken
                
//                 More about my favorite pizzas:
//                 I would like Pepperoni pizza.
//                 I would like Chicken Tekka pizza.
//                 I would like BBQ Chicken pizza.
                
//                 I really love pizza!                
    
//                 */

//                 //Question #35
// /*
// let animals = ['Cow', 'Buffalo', 'Sheep'];
//    // Printing the names of each animal
//  console.log("List of animals");
 
//  for(let animal of animals){
//     console.log(animal);
//  }
//  // Printing a statement about each animal
//  console.log("\nMore about these animals:");

//  for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} is rich in meat and milk.`);
//   }

// // Additional sentence about what they have in common
// console.log("\nAny of these animals produce good meat and health milk!");

//                                */
// /*List of animals
// Cow
// Buffalo
// Sheep

// More about these animals:
// A cow is rich in meat and milk.
// A buffalo is rich in meat and milk.
// A sheep is rich in meat and milk.
// */


//                 //Question #36
// /*
// function make_shirt(size: string, message: string){
//     console.log(`You have ordered ${size}-sized shirt with the message: "${message}"`)
// }               
// make_shirt("Large", "Save Greenery!");

// //You have ordered Large-sized shirt with the message: "Save Greenery!"

//                        */

//Question # 37

// function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {
//     console.log(`You have ordered ${size}-sized shirt with the message: "${message}"`);
//   }
  
//   // Creating a large shirt with the default message
//   make_shirt();
  
//   // Creating a medium shirt with the default message
//   make_shirt('medium');
  
//   // Creating a small shirt with a custom message
//   make_shirt('small', 'JavaScript Is Awsome!');

 

// // //You have ordered a Large-sized shirt with the message: "I love TypeScript".
// // //You have ordered a Medium-sized shirt with the message: "I love TypeScript".        
// // //You have ordered a Small-sized shirt with the message: "JavaScriptt Is Awesome!". 


// // //Question # 38

// //  function describe_city(city: string, country: string = "Unknown"): void {
// //      console.log(`${city} is in ${country}.`)
// //  };

// // describe_city("Oslo", "Norway"); //Oslo is in Norway
// // describe_city("Vienna", "Austria");  //Vienna is in Austria.
// // describe_city("Stockholm");               //Stockholm is in "Unknown".

// // console.log(describe_city);


// //Question # 39


// // function city_country(city: string, country: string ): string {
// //           return`${city}, ${country}.`};

// // let citycountry1 = city_country("Oslo", "Norway");       //Oslo, Norway.
// // let citycountry2 = city_country("Brussels", "Belgium");  //Brussels, Belgium.
// // let citycountry3 = city_country("Copenhagen", "Denmark");  //Copenhagen, Denmark.

// // console.log(citycountry1);
// // console.log(citycountry2);
// // console.log(citycountry3);

// //Question #40

// function makeAlbum(artistName: string, albumTitle: string, numTracks?: number): { artist: string; title: string; tracks?: number } {
//     const album = {
//         artist: artistName,
//         title: albumTitle,

//     };

//     if (numTracks !== undefined) {
//         album.tracks = numTracks
//     }

//     return album;
// }

// // Create three album objects atleast one with the number of tracks
// const album1 = makeAlbum('Artist 1', 'Album 1');
// const album2 = makeAlbum('Artist 2', 'Album 2', 12); // Example with number of tracks
// const album3 = makeAlbum('Artist 3', 'Album 3');

// console.log(album1);
// console.log(album2);
// console.log(album3);


//Question # 41

// function showMagicians(magicians: string[]){
//     for(let magician of magicians){
//         console.log(magician);
//     }
// }

// let magiciansName: string[] = [];
// magiciansName.push("Larry", "Paul", "Chris", "Romeo", "Mark");
// console.log(`The \"Magicians\" are:\r`)
// showMagicians(magiciansName);


//Question #42
// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// function makeGreat(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const magician of magicians) {
//         const greatMagician = `the Great ${magician}`;
//         greatMagicians.push(greatMagician);
//     }
//     return greatMagicians;
// }

// // Array of magician names
// const magicianNames: string[] = ["Larry", "Paul", "Chris", "Romeo", "Mark"];

// // Modify the array by adding "the Great" to each magician's name
// const greatMagicianNames: string[] = makeGreat(magicianNames);

// Call showMagicians to display the modified list
// showMagicians(greatMagicianNames);


//Question # 43


// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// function makeGreat(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const magician of magicians) {
//         const greatMagician = `the Great ${magician}`;
//         greatMagicians.push(greatMagician);
//     }
//     return greatMagicians;
// }

// // Array of magician names
// const magicianNames: string[] = []
// magicianNames.push("Larry", "Paul", "Chris", "Romeo", "Mark");

// // Create a copy of the array of magician names
// const magicianNamesCopy: string[] = magicianNames.concat()

// // Modify the copy of the array by adding "the Great" to each magician's name
// const greatMagicianNames: string[] = makeGreat(magicianNamesCopy);

// // Call showMagicians with both arrays to display the original and modified lists
// console.log("Original Magicians:");
// showMagicians(magicianNames);

// console.log("\nGreat Magicians:");
// showMagicians(greatMagicianNames);

//(Answer)
// Original Magicians:
// Larry
// Paul
// Chris
// Romeo
// Mark

// Great Magicians:
// the Great Larry
// the Great Paul
// the Great Chris
// the Great Romeo
// the Great Mark

//Question #44

// function makeSandwich(...items: string[]): void {
//     console.log("Sandwich Summary:");
//     console.log("Bread: Top and Bottom");
//     for (const item of items) {
//         console.log(`- ${item}`);
//     }
//     console.log("Bread: Top and Bottom");
//     console.log("\n");
// }

// // Call the makeSandwich function with different numbers of arguments
// makeSandwich("Lettuce", "Tomato", "Turkey", "Cheese");
// makeSandwich("Peanut Butter", "Jelly");
// makeSandwich("Ham", "Swiss Cheese", "Mustard");


// Bread: Top and Bottom
// - Lettuce
// - Tomato
// - Turkey
// - Cheese
// Bread: Top and Bottom


// Sandwich Summary:
// Bread: Top and Bottom
// - Peanut Butter
// - Jelly
// Bread: Top and Bottom


// Sandwich Summary:
// Bread: Top and Bottom
// - Ham
// - Swiss Cheese
// - Mustard
// Bread: Top and Bottom


//Question #45
function sport_car(manufacturer: string, modelName: string, options: { [key: string]: any }): { manufacturer: string; model: string; options: { [key: string]: any } } {
    const myCar: { manufacturer: string; model: string; options: { [key: string]: any } } = {
        manufacturer,
        model: modelName,
        options: options
    };
    return myCar;
}



// Create a car object with required information and additional options
const carInfo = sport_car("BMW", "M5 Competition LCI", { color: "Sapphire Black", Sedan: true });

// Print the car object to verify the information
console.log(carInfo);


// (Answer)
// {
//     manufacturer: 'BMW',
//     model: 'M5 Competition LCI',
//     options: { color: 'Sapphire Black', Sedan: true }
//   }



function iterateObject(obj) {
    for (var key in obj) {
      console.log(key, obj[key]);
    }
    
    console.log(); // Accessible
  }
  
  const person = {
    name: "John",
    age: 30,
  };
  iterateObject(person);
  
  