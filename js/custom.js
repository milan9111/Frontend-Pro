const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}

var result = [];
var secretMap = {};

Object.keys(secret).forEach(key => {
  secret[key].forEach(secret => {
   secretMap[secret] = key
  })
})

Object.keys(secretMap).forEach((key, index) => {
  result.push(secretMap[index]);
})

document.write(result.join(''));