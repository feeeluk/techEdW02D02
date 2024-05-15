let listenForEvent = document.getElementById("calculateButton");
listenForEvent.addEventListener("click", FizzBuzz);


function FizzBuzz()
{

    function Calculate()
    {
        let numberToCheck = document.getElementById("formNumberToCheck").value;
        let calculatedString = "";
    
        if(numberToCheck % 3 == 0 && numberToCheck % 5 == 0){
            calculatedString = "FIZZBUZZ";  
        } else if(numberToCheck % 3 == 0){
            calculatedString = "fizz (divisible by 3";   
        } else if(numberToCheck % 5 == 0){
            calculatedString = "buzz (divisible by 5)";   
        } else{
            calculatedString = "no fizz or buzz";
        }

        return calculatedString;
    }
    
    function Show(string)
    {
        console.log(string);
        document.getElementById("result").value = string;
    }

    Show(Calculate());

}