let array = []
for (var i = 0; 1 <= 10000; i++) {
  array[i] = (1 + Math.floor(Math.random() * 10000))
}
binarySearch = function(item) {
  array.sort() //{1}
  let low = 0,
    high = array.length - 1,
    mid, element
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1 //{12}
}
let x = 1
console.log(binarySearch(x))