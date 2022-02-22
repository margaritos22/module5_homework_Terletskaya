const array = [1, 2, 2, 0, '=', 3, undefined];
let evenNumber = 0;
let oddNumber = 0;
let zeroNumber = 0;
let notNumber = 0;
let sumNumber = 0;
array.forEach(function(item, i, array) {

if (typeof array[i] === "number" ||!isNaN(array[i])) {
  sumNumber += 1;
 if (array[i] === 0) {
  zeroNumber += 1;
  
}else if (array[i] % 2 === 0) {
  evenNumber += 1;
  
}else if (array[i] % 2 !== 0) {
  oddNumber += 1;
}
}else if (typeof array[i] !== "number") {
  notNumber += 1;
}
});
console.log('Всего ' + array.length + ' переменных, ' + sumNumber +
' цифр, ' + evenNumber + ' четных чисел, ' + oddNumber + '  нечетных чисел, ' + 
zeroNumber + ' нулей, ' + notNumber + ' др переменных.');
