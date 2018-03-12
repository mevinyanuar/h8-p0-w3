function angkaPalindrome(num) {


  for(var i=1; true; i++){
    if(Number(String(num + i).split('').reverse().join('')) === num + i ){
      return num + i
    }
  }


}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(11)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(64)); // 181
console.log(angkaPalindrome(1000)); // 1001
