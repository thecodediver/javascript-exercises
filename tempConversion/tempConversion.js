const ftoc = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * 5 / 9;
  let conversionRounded = Math.round(conversion * 10) / 10;
  return conversionRounded;
}

const ctof = function(celcius) {
  let conversion = celcius * 9 / 5 + 32;
  let conversionRounded = Math.round(conversion * 10) / 10;
  return conversionRounded;
}

module.exports = {
  ftoc,
  ctof
}
