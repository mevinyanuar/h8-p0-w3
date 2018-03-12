function mengelompokkanAngka(arr) {
  // you can only write your code here!

  var arrKosong = [ [], [], [] ]


  for(var i = 0; i<arr.length; i++) {

    if(arr[i] % 3 === 0){
      arrKosong[2].push(arr[i])
    }else if(arr[i] % 2 === 0) {
      arrKosong[0].push(arr[i])
    }else{
      arrKosong[1].push(arr[i])
    }

  }
return arrKosong



}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [], [], [] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
