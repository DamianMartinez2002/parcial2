let random = (n, k) => {
  let A = []
  for (let i = 0; i < n; i++)
    A.push(1 + Math.floor(Math.random() * k))
  return A
}
function comparar(a, b) {
  return a - b;
}
console.log('original:',
  arr.join());
console.log('ordenado sin funcion:', arr.sort());
console.log('ordenado con funcion:', arr.sort(comparar));

console.log(random(5, 4))