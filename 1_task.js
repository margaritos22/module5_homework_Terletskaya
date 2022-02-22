let result = +prompt('Введите число');
if (typeof(result) === 'number' && !isNaN(result)){
  if (result % 2 === 0){
    console.log('Число - четное');
  }else if (result % 2 !== 0){
    console.log('Число - нечетное'); 
  }
}else{
  console.log('Упс, кажется, вы ошиблись')
}
