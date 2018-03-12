function pasanganTerbesar(num) {
  // you can only write your code here!

var angkaString = String(num)
var terbesar =0


for(var i = 0; i<angkaString.length-1; i++) {
  var nilai = Number(angkaString[i] + angkaString[i+1])
  if(terbesar<nilai){
    terbesar=nilai
  }

}
return terbesar


}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
