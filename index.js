function distanceFromHqInBlocks(somevalue) {
    //returns the number of blocks given a value
    if (somevalue>42){
        return(somevalue-42)
    }else{
        return(42-somevalue)
    }
 }
 function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue); 
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination>start){
        return(destination-start)*264;
    }else{
        return(start-destination)*264;
    }
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start, destination)
    if(distance<400){
        return 0;
    }else if(distance>400 && distance<2000){
        return(distance-400)*0.02
    }else if(distance>2000 && distance<2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
  }
 