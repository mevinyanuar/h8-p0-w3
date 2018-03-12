function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  // const differences = arr[1]-arr[0]
  // for (var i = 1; i < arr.length; i++) {
  //   if (arr[i] - arr[i-1] !== differences) {
  //     return false
  //   }
  // }
  //
  // return true

  let tmpArr = [];

  for(let i = 0; i < arr.length-1; i++){
    let selisih = arr[i+1] - arr[i]
    tmpArr.push(selisih)
  }

  // const shouldBe = tmpArr[0]

  // for (var i = 0; i < tmpArr.length; i++) {
  //   if (tmpArr[i] !== tmpArr[0]) {
  //     return false
  //   }
  // }
  // return true
  // console.log(tmpArr)
  for(let j = 0; j < tmpArr.length; j++){
    if (tmpArr[0] !== tmpArr[j]){
      return true;
    }
    // return tmpArr[j]

  }
  return false;
// return tmpArr
  // var value = arr[1] - arr[0]
  // var nilaiLongkap = 0
  //
  // for(var i = 1; i<arr.length-1; i++){
  //   nilaiLongkap = arr[i+1] - arr[i]
  // }
  // return value === nilaiLongkap



  // let awal = 0; akhir = 0;
  //
  // for(let i = 0; i < arr.length; i++){
  //   awal = arr[i+1] - arr[i];
  //   akhir = arr[arr.length-1] - arr[arr.length-2];
  //
  //   return true ? awal === akhir : false;
  // }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 7, 5, 6])); // true // false
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
