function convertToRoman(num) {
    if (typeof num !== 'number' || num <= 0 || num >= 4000) {
      return 'Invalid input';
    }
  
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let roman = '';
  
    for (const key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        roman += key;
        num -= romanNumerals[key];
      }
    }
  
    return roman;
  }
  
  const romanNumeral = convertToRoman(36);
  console.log(romanNumeral); // XXXVI