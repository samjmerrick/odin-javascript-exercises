const convertToCelsius = function (farenheit) {
  // 	x °F ≘ (x − 32) × 5/9°C
  const result = (farenheit - 32) * (5 / 9);
  return round(result);
};

const convertToFahrenheit = function (celsius) {
  // x °C ≘ (x × 9/5+ 32) °F
  const result = celsius * (9 / 5) + 32;
  return round(result);
};

const round = function (number) {
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
