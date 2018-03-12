function targetTerdekat(arr) {
  // you can only write your code here!

var indexO = arr.indexOf('o')
var arrKosong = []
var nilaiTerkecil = 999

if (arr.indexOf("x") === -1) {
   return 0
 }

for(var i = 0; i<arr.length; i++){

  if(arr[i] === 'x'){
    arrKosong.push(i)
  }

}
console.log(arrKosong);
for(var j = 0; j<arrKosong.length; j++){
  if(nilaiTerkecil > arrKosong[j]){
    nilaiTerkecil = arrKosong[j]


}

var nilaiJarak = Math.abs(nilaiTerkecil - indexO)

return nilaiJarak

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
