"use strict";
//Question 11:
// Print each person's name by accessing each element in the list
//let names: string [] = ["Aarif", "Hidayat", "Ahmed", "Hamad", "Ali", "Zubair"];
// Print each person's name by accessing each element in the list
//for (let name of names) {                                   //Aarif 
//    console.log(name);                                      // Hidayat
//};                                                          // Ahmed
//Hamad
// Ali
//Zubair                  
//Method # 2                             
//let arrName = ["Aarif", "Hidayat", "Ahmed", "Hamad", "Ali", "Zubair"]; 
//console.log(arrName[0]); 
//console.log(arrName[1]);
//console.log(arrName[2]);  
//console.log(arrName[3]);
//console.log(arrName[4]);
//console.log(arrName[5]);         /* Same Answer as Method # 1 */                            
//Question #12:
//let names = ["Aarif", "Hidayat", "Ahmed", "Hamad", "Ali", "Zubair"]; 
// Print personalized greetings for each person,
//     for(let name of names){
//   console.log(`Hi, ${name}! I'm glad to have you as a friend.`);
//};           
//Question #13:
//Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples.             
//let transportationMeans = ["Car", "Bike", "Aeroplane", "Train", "Bus"];
//for(let mean of transportationMeans){
//   console.log(`I would love to travel by an/a ${mean}`)
//};
// Print statements about the transportation modes. (Ans)
//Question #14:
//let guestList = ["Hidayat", "Arif", "Zubair", "Hamad", "Ali"];
// Print invitation messages for each guest
//for (let guest of guestList) {
//console.log(`Dear ${guest},\nYou are cordially invited to a dinner at my place. It would be a great honor for us to have your gathering.\nDate: [December 25, 2023]\nTime: [07:00 PM]\nPlease let me know if you can join us.\n\nSincerely,\n[Aatif]`);
//console.log("------------------------")
//};                  
//Question #15:
/*let guestList = ["Hidayat", "Arif", "Zubair", "Hamad", "Ali"];
 
let guestCantMakeIt = guestList.splice(1, 1); //  Arif can't make it

console.log(`${guestCantMakeIt} can't make it to the dinner.`);


// Replace "Arif" with a new guest named "Taif"
let newGuest = "Taif";
guestList.splice(1, 0, newGuest);

// Print invitations for the updated guest list
console.log("\nUpdated Invitation Messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest},\nYou are invited to a dinner at my place on [December 25, 2023] at [07:00 PM] sharp. Looking forward to you to join us!\n`);
});

console.log("Invitations sent!");


*/
//Question 16:
//let guests = ["Hidayat", "Taif", "Zubair", "Hamad", "Ali"];
//console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
//guests.unshift("Basit");
// Add one new guest to the middle of the array
//let middleIndex = Math.floor(guests.length / 2);
//guests.splice(4, 0, "Shamir");
// Use push() to add one new guest to the end of the array
//guests.push("Aqib");
// Print new invitation messages
//for (let guest of guests) {
//console.log(`Dear ${guest}, you are cordially invited to the dinner. Please join us!`);
//};
/* Dear Basit, you are cordially invited to the dinner. Please join us!
Dear Hidayat, you are cordially invited to the dinner. Please join us!
Dear Taif, you are cordially invited to the dinner. Please join us!
Dear Zubair, you are cordially invited to the dinner. Please join us!
Dear Shamir, you are cordially invited to the dinner. Please join us!
Dear Hamad, you are cordially invited to the dinner. Please join us!
Dear Ali, you are cordially invited to the dinner. Please join us!
Dear Aqib, you are cordially invited to the dinner. Please join us!

*/
// Question #17
//let guests = ["Hidayat", "Taif", "Zubair", "Hamad", "Ali"];
//console.log("Sorry, I can only invite two people for dinner.");
//while (guests.length > 2) {
//         let removedGuest = guests.pop();
//if (removedGuest) {
//         console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
//  }
//}
//for (let guest of guests) {
//       console.log(`You're still invited to dinner, ${guest}!`);
//}
//      guests.splice(0, guests.length); // Removing the last two names
//             console.log("Final guest list:", guests); // empty guest list
/*Invitations sent!
Sorry, I can only invite two people for dinner.
Sorry Ali, I can't invite you to dinner.
Sorry Hamad, I can't invite you to dinner.
Sorry Zubair, I can't invite you to dinner.
You're still invited to dinner, Hidayat!
You're still invited to dinner, Taif!
Final guest list: []
                       */
//Question #18
//const placesToVisit = ["Oslo", "Vienna", "Helsinki", "Stockholm","Brussels"]; 
//console.log("Original Order:", placesToVisit);
//(A) Original Order: [ 'Oslo', 'Vienna', 'Helsinki', 'Stockholm', 'Brussels' ]
//let sortedAlphabetical = [...placesToVisit].sort();
//console.log("Alphabetical Order:", sortedAlphabetical);
//(B) Alphabetical Order: [ 'Brussels', 'Helsinki', 'Oslo', 'Stockholm', 'Vienna' ]
// Show that the array is still in its original order
//console.log("Original Order:", placesToVisit);
//(C) Original Order: [ 'Oslo', 'Vienna', 'Helsinki', 'Stockholm', 'Brussels' ]
// Print the array in reverse alphabetical order without modifying the original list
//let sortedReverseAlphabetical = [...placesToVisit].sort((a, b) => b.localeCompare(a));
//console.log("Reverse Alphabetical Order:", sortedReverseAlphabetical);
//(D)Reverse Alphabetical Order: [ 'Vienna', 'Stockholm', 'Oslo', 'Helsinki', 'Brussels'] 
// Show that the array is still in its original order
//console.log("Original Order:", placesToVisit);
//(E) Original Order: [ 'Oslo', 'Vienna', 'Helsinki', 'Stockholm', 'Brussels' ]
// Reverse the order of the 'list'
//let reversedList = placesToVisit.reverse();
//console.log("Reversed Order:", reversedList);
//(F) Reversed Order: [ 'Brussels', 'Stockholm', 'Helsinki', 'Vienna', 'Oslo' ]
// Reverse the order of the list again to get back to the original order
//reversedList.reverse();
//console.log("Back to Original Order:", reversedList);
//(G) Back to Original Order: [ 'Oslo', 'Vienna', 'Helsinki', 'Stockholm', 'Brussels' ]
// Sort the array in alphabetical order
//placesToVisit.sort();
//console.log("Sorted Alphabetical Order:", placesToVisit);
//(H) Sorted Alphabetical Order: [ 'Brussels', 'Helsinki', 'Oslo', 'Stockholm', 'Vienna' ]
// Sort the array in reverse alphabetical order
//placesToVisit.sort((a, b) => b.localeCompare(a));
//console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
//(I) Sorted Reverse Alphabetical Order: [ 'Vienna', 'Stockholm', 'Oslo', 'Helsinki', 'Brussels' ]
