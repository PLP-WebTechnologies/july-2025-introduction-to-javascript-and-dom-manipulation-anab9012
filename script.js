//Part One
function checkAge(element){
    let TheValue = parseInt(Element.value);
    //Here is where my conditionals go
    if (TheValue >=20){
        //Telling what to print if the age entered by the user is above ot equal to 20
        console.log("You are an adult");
    } else{
        //Telling what to print if the age entered by the user is less than 20
        console.log("You are still a child");
    }
}
//Part Three
//An array containing a list of books
const books=['Text Book','Story Book','Note Book'];
//Getting the empty list from the html file
const forEachList=document.getElementById("myNewList");
//The forEach method is called drectly on the 'books' array.
// It takes a function as an argument. This function runs for each element in the array.
books.forEach(books => {
    //Creates a new list item element(<li>)
    const listItem=document.createElement('li');
    //Setting the text of the list item to the current books
    listItem.textContent = books;
    //Adding the new list tem to our list in the html
    forEachList.appendChild(listItem);
});

function startloop(){
    //nitializing the counter
    //Setting a number for our loop.The loop will start with this value
    let count=2;
    //Creating a string to store all the numbers before displaying them.
    let OutputText="";
//Setting the loop condition.The value of the loop will run as long as this condition is true
while (count<= 4){
    //What is to be done inside the loop.This line adds the current number to the output string we are going to give
    OutputText += "We are seeing:" + count +"<br>";
    //Updating the counter.This is an important part because without updating the loop will take forever which results into an infinite loop.
    count++;
}
//Displaying the results
document.getElementById("output").innerHTML=OutputText;
}
//Part Five DOM 1and2
// Telling javascript  which element to select and modify using its id
document.getElementById('firstchange').textContent='Hey! I love Javascript';
//Part Two. Defining the function  to process the input 
function checksubmissions(a,b){
    return a+b}
    
//Defining the function for handling the input and the interaction
function handleInput (){
    //Here we are telling javascrpt which element to get using its id
    let num1String= document.getElementById("FirstNumber").value;
    let num2String= document.getElementById("SecondNumber").value;
    //Converting values given by the user which are of string datatype to a number datatype
    let num1= parseInt(num1String);
    let num2= parseInt(num2String);
//Calling the checksubmissions function to process the values
    let total=checksubmissions(num1,num2);
    
    
//Displaying the content on the webpage
document.getElementById("result").textContent="The sum is going to be: " + total;

//Displaying the result which is the sum n the console.
console.log("The sum is going to be:" ,total);
}





