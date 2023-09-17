const convertToCelsius = function(inputFahrenheit) {
  //x °F ≘ (x − 32) × 5/9 °C 
  const tempCelsius = (inputFahrenheit - 32) * 5 / 9;
  return Math.floor(tempCelsius * 10) / 10
};

const convertToFahrenheit = function(inputCelsius) {
  //x °C ≘ (x × 9/5 + 32) °F 
  const tempFahrenheit = (inputCelsius * 9 / 5) + 32;
  return Math.floor(tempFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
