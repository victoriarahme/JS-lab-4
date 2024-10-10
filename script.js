//Part 1: Declaring and invoking functions

//Step 1:
function greet(name = 'Victoria') {
    return `Hello ${name}!`;
}

//Step 2:
    console.log(greet());


//Part 2:

//Step 3: Function to add numbers

function addNumbers(num1,num2) {
    return num1 + num2;
}
let result = addNumbers(3, 10);
    
    console.log(result);

//Part 3, step 4: Local and Global scope
let globalVar = "This is week 5 of JavaScript fundamentals";

function changeValue() {
    return globalVar;
}
//Step 4
let x = 10;

function checkScope() {
    return x;
}
console.log(checkScope());



function changeValue() {
    // declare a new x locally here
    let changeValue = 5;
    return changeValue;
}
console.log(changeValue());

//step 5

function outerFunction() {
     let count = 0;
    
        function innerFunction() {
        console.log(count);}
    
        return innerfunction;
    let myclosure = outerFunction;}
    
    // update count here
        
        function outerFunction() {
        let count = 8;
        function innerFunction(){
        console.log(count);
         } return innerFunction;
    }
    let myClosure = outerFunction ();
    myClosure ();
    