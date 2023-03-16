// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    if (pickupLocation < 42) {
        return 42 - pickupLocation;
      } else {
        return pickupLocation - 42;
      }

  }
  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    const feet = distanceFromHqInBlocks(pickupLocation);
    return feet * 264;
   
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination){
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    distanceTravelledInFeet(start, destination)
    let Charge
    let ride = distanceTravelledInFeet(start, destination);

     if ( ride<= 400) {
         Charge = 0;
}
    else if(ride >= 2501){
         Charge ='cannot travel that far';
}
    else if(ride >= 401 && ride <=2000){
      Charge = (ride - 400) * 0.02;
}
    else if(ride > 2000 && ride < 2500){
        Charge = 25;
  }
  
return Charge
  }




function calculatesFarp(start, destination) {
    //returns the fare for the customer
    distanceTravelledInFeet(start, destination)
    let Charge
    let ride = distanceTravelledInFeet(start, destination);

     if ( ride<= 400) {
         Charge = 0;
      }
    else if(ride >= 2501){
      Charge ='cannot travel that far';
      }
    else if(ride >= 401 && ride <=2000){
        Charge = (ride - 400) * 0.02;
    }
    else if (ride > 2000 && ride < 2500){
      Charge = 25;
    }
    return Charge            

}

console.log(calculatesFarp(50, 58))