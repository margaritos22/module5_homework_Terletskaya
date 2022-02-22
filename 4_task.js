function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;}
console.log(getRandomInt());
