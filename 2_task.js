let x = undefined;
switch(typeof x){
  case 'number':
     console.log("это число");
     break;
  case 'string':
     console.log("это строка");
     break;
  case 'boolean':
     console.log("Это логический тип");
     break;
  default:
    console.log("Тип x не определен");
}
