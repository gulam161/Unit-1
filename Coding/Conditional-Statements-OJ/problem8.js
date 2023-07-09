let fuel = 1;
let distance = 46;
let required = fuel * distance;

function enoughFuelConsumption(fuel, distance) {
  if (required > 50) {
    console.log("Enough")
  } else {
    console.log("Go On")
  }
}
enoughFuelConsumption(fuel, distance)