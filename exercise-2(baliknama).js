function balikString(str) {

  var baliknama = ''
  for(var i =0; i<str.length; i++) {

    baliknama= str[i] + baliknama

  }

  return baliknama
}

console.log(balikString('hello world!'));
