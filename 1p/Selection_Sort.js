function diezmilnumeros() {
  let arr = []
  for (let i = 0; i <= 10000; i++) {
    arr[i] = (1 + Math.floor(Math.random() * 4))

    for (let j = 0; j < arr.length; ++j) {
      let i = iMin = j;
      for (++i; i < arr.length; ++i) {
        (arr[i] < arr[iMin]) && (iMin = i);
      }
      [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }
  }
  return arr;
}
console.time()
console.log(diezmilnumeros())
console.timeEnd()

function milnumeros() {
  let arr = []
  for (let i = 0; i <= 1000; i++) {
    arr[i] = (1 + Math.floor(Math.random() * 4))

    for (let j = 0; j < arr.length; ++j) {
      let i = iMin = j;
      for (++i; i < arr.length; ++i) {
        (arr[i] < arr[iMin]) && (iMin = i);
      }
      [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }
  }
  return arr;
}
console.time()
console.log(milnumeros())
console.timeEnd()




function ciennumeros() {
  let arr = []
  for (let i = 0; i <= 100; i++) {
    arr[i] = (1 + Math.floor(Math.random() * 4))

    for (let j = 0; j < arr.length; ++j) {
      let i = iMin = j;
      for (++i; i < arr.length; ++i) {
        (arr[i] < arr[iMin]) && (iMin = i);
      }
      [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }
  }
  return arr;
}
console.time()
console.log(ciennumeros())
console.timeEnd()