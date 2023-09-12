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
//Question #23 
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
// // //You have ordered a Large-sized shirt with the message: "I love TypeScript".
// // //You have ordered a Medium-sized shirt with the message: "I love TypeScript".        
// // //You have ordered a Small-sized shirt with the message: "TypeScript is awesome!". 
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
//          





