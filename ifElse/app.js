let userAge = 18;

if(userAge < 18) {
    console.log(`Age = ${userAge}, User is less than 18`);
} else if (userAge >=18 && userAge <= 56){
    console.log(`Age = ${userAge}, User is between 18 and 56`);
} else {
    console.log(`Age = ${userAge} User is older than 56`);
}

let currentWeather = `cloudy`;

if(currentWeather == `cloudy`){
    console.log(`It is cloudy`);
} else if(currentWeather == `sunny`){
    console.log(`It is sunny`);
} else if(currentWeather == 'rainy'){
    console.log(`It is rainy`);
} else if(currentWeather == 'snowy'){
    console.log(`It is snowy`);
} else {
    console.log(`I'm not sure what the weather is?`);
}