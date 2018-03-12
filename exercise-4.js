function datahandling2(data) {

data.splice(1, 1, 'Roman Alamsyah Elsharawy')
data.splice(2, 1, 'Provinsi Bandar lampung')
data.splice(4, 1, 'Pria')
data.push('SMA International metro')

console.log(input);



var bulan = '05'
switch (bulan) {
  case '05': { bulan = 'Mei' ;

    break; }
  default:

}

console.log(bulan);

var ttlSplitted = data[3].split('/')
ttlSplitted.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) });
console.log(ttlSplitted);

var ttlWithDash = data[3].split('/').join('-')
console.log(ttlWithDash);

var namaIrisan = data[1].slice(0, 15)
console.log(namaIrisan);
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
datahandling2(input);
