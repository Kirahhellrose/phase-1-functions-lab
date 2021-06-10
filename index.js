// Distance from HQ in blocks
const distanceFromHqInBlocks = function (avenue){
    if (avenue < 42) {
        return (42 - avenue)
    }
    return (avenue - 42);
}


//Distance From Hq In Feet

const distanceFromHqInFeet = function (distance){
   return distanceFromHqInBlocks(distance) * 264;
}
 
//Distance Travelled In Feet
const distanceTravelledInFeet= function(distance,avenue){
    if (distance < avenue) {
        return ((avenue - distance) * 264)
    }
    return ((distance - avenue) * 264)
}

//Fare Price Calculation
 
function calculatesFarePrice(beginning,end) {
  const length = distanceTravelledInFeet (beginning,end);
  if (length <= 400){
      return 0; 
  } else if (length > 400 && length <= 2000){
    return .02 * (length - 400);
  } else if (length > 2000 && length < 2500){
      return 25;
  } else if (length > 2500){
      return "cannot travel that far";
  }
 
}