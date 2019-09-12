function oneThroughTwenty() {
    const numbers = [];
   
    // Your code goes below
for (let counter = 1; counter <= 20; counter++){
    numbers.push(counter)
}
    // 

    console.log(numbers)
}
oneThroughTwenty()
    


function evensToTwenty() {
    const evennumbers = []
     // Your code goes below
for (let i=1; i <= 20; i++){
  if (i % 2 === 0){
  evennumbers.push (i)
}
   
  

} 
console.log(evennumbers)  
}
  evensToTwenty()  
    
   
    
    
  function oddsToTwenty() {
    const numbers = []
    // Your code goes below
    for (let counter = 1; counter <= 20; counter++){  
 if (counter % 2 === 1){
numbers.push(counter)
}
}
console.log(numbers)
  }
oddsToTwenty()



function multiplesOfFive() {
    const numbers = []
    // Your code goes below
    for (let counter = 5; counter <= 100; counter++){
        if(counter % 5 === 0){
            numbers.push(counter)
        }
    }

    

    console.log(numbers)
}
multiplesOfFive()

function squareNumbers() {
    const numbers = []
    // Your code goes below
    for(let counter = 1; counter <= 10; counter++){
        let square = counter * counter
        numbers.push(square)
    }
    

    console.log(numbers)
}
squareNumbers()

function countingBackwards() {
   const numbers = [];
   
    // Your code goes below
for (let counter =  20; counter >=  1; counter--){
    numbers.push(counter)
}
    // 

    console.log(numbers) 
    // Your code goes below

   
}
countingBackwards()

function evenNumbersBackwards() {
    const numbers = []
     // Your code goes below
for (let counter = 20; counter >= 0; counter--){
    if (counter % 2 === 0)
    numbers.push(counter)
}   
    
   

    // 

    console.log(numbers)
    
}
evenNumbersBackwards()

function oddNumbersBackwards() {
    const numbers = []
     // Your code goes below
     for (let counter = 20; counter >= 1; counter--){
        if (counter % 2 == 1)
    
        numbers.push(counter)
    }
    console.log(numbers)
}
oddNumbersBackwards()

function multiplesOfFiveBackwards() {
    const numbers = []
    // Your code goes below
    for(let counter = 100; counter >= 5; counter--){
        if (counter % 5 == 0)
      
        numbers.push(counter)
    }

    console.log(numbers)
}
multiplesOfFiveBackwards()

function squareNumbersBackwards() {
    const numbers = []
    // Your code goes below
    for (let counter = 10; counter >= 1; counter--){
        let square = counter * counter
       
       numbers.push(square)
        
    }

    console.log(numbers)
}
squareNumbersBackwards()