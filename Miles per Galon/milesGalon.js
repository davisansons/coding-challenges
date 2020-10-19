const zeroFuel = (distanceToPump, mpg, fuelLeft) => { 
    return distanceToPump/mpg <= fuelLeft; //Return a boolean value based on if the distance to the pump divided by the miles per galon is less than or equal to the amount of fuel left (in gallons).
};

console.log(zeroFuel(50, 25, 2)); //Returns true. 