//   function sum (num1, num2){
//     console.log(arguments);
    
//   }
//   sum(10, 20);



  function sum (name,...arguments){
   // console.log(arguments);
    
    let sum = 0;
    for(let i in arguments){
       sum += arguments[i];
    }
    //console.log(sum)
    //console.log(name)
    console.log(`Hello ${name}: The sum of your numbers is: ${sum}`);
    
  }

 sum ("Ali", 10, 20, 30, 50, 100, 150, 175);
  
 


 function sum(numbers: number[]): number {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sum(numbersArray);
  console.log(`The sum of the numbers is: ${result}`);
  


// const windowsNewline = "Line 1\r\nLine 2\r\nLine 3";
// console.log(windowsNewline);

// function blockScopeExample() {
//     var a = 5;
    
//     if (true) {
//       let b = 10; // Variable b is block-scoped
//       console.log(a); // Accessible here
//       console.log(b); // Accessible here
//     }
    
//     console.log(a); // Accessible here
//     //console.log(b); // Error: b is not defined in this scope
//   }
  
//   blockScopeExample();
  

  
  