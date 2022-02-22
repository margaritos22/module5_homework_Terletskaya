const array = [1, 2, 1, 1, 1, 1]
let answer = true;
array.forEach( function (item, index,){
for (let i = 1; i < array.length; i++){
  if (item === array[i]) {
    answer = true;
  }else{ answer = false;
  break;}
}
})
console.log(answer);
