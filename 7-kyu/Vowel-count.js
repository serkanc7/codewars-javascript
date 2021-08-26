function getCount(str) {
  
  let vowels = str.match(/[aeiou]/gi);
  vowelsCount = vowels ? vowels.length : 0;
  
  return vowelsCount;
}

console.log(getCount("sdsSsdsSAAA"));