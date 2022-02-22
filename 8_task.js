let clothes = new Map([
['top', 1000],
['jeans', 2500],
['dress', 3000],
['shirt', 2000]
]);
for (let [key, value] of clothes) {
  console.log('Ключ - ' + key + ', ' + 'значение - ' + value + '.');
}
