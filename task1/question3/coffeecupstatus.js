/* 
    Question:
    Using the "weather" example given, write a simple if/else if/else check to determine if a coffee cup is larger than 12 fl. oz and is currently hot or piping hot

    This was written based on the assumption that the coffeecupsize is 12 and coffeetemperature is 65
*/


const coffeeCupSize = 12
const coffeeTemperature = 65

if(coffeeCupSize > 12 && coffeeTemperature <= 60){
    console.log("The coffecup is larger than 12 fl. oz. and it is piping hot")
}else if(coffeeCupSize > 12 && coffeeTemperature >= 60){
    console.log("The coffecup is larger than 12 fl. oz. and it is piping hot")
}else{
    console.log("The coffecup is not larger than 12 fl. oz.")
}