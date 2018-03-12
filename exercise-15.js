function groupAnimals(animals) {
  // you can only write your code here!

  // dimitri mampir, gapake sort
  // const groups = [ [] ];
  // for (let i = 0; i < animals.length; i++) {
  //   let inserted = false;
  //
  //   for (let j = 0; j < groups.length; j++) {
  //     if (!groups[j][0] || groups[j][0][0] === animals[i][0]) {
  //       groups[j].push(animals[i]);
  //       inserted = true;
  //     }
  //   }
  //
  //   if (!inserted) {
  //     groups.push([animals[i]]);
  //   }
  // }
  //
  // return groups;

  //AWESOMEEEE!!!!

  let answer = [];
  let letters = ''
  // console.log(letters);

  for (let i = 0; i < animals.length; i++) {

    // console.log(letters);

    let index = letters.indexOf(animals[i][0])

    //
    //
    if (index === -1) {
      answer[answer.length] = [animals[i]]


      letters += animals[i][0]
      // console.log(letters);
    }
    else {
      answer[index][answer[index].length] = animals[i]

    }

  }

  for (let i = 0; i < answer.length -1 ; i++) {
    if (answer[i][0][0] > [answer[i+1][0][0]]) {
        let temp = answer[i]
        answer[i] = answer[i+1]
        answer[i+1] = temp
        i = -1
    }
  }

  return answer


  // var arrPusat = []
  // animals = animals.sort()
  //
  // //arrPusat.push(arrisi)
  // let arrisi = []
  //
  // for(var i = 0; i<animals.length; i++){
  //
  //   arrisi.push(animals[i])
  //
  //   if (i != animals.length-1) {
  //
  //     if (animals[i][0] !== animals[i+1][0]) {
  //
  //       // arrisi = arrisi.sort((a,b) => b>a)
  //
  //       arrPusat.push(arrisi)
  //
  //       arrisi = []
  //
  //     }
  //
  //   } else {
  //
  //     // arrisi = arrisi.sort((a,b) => b>a)
  //
  //     arrPusat.push(arrisi)
  //     arrisi = []
  //
  //   }
  //
  // }
  // return arrPusat
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

//   let angka = [1,5,3,6,2,5,3]
//
//   // [5,3,1,2,5,6]
//
//   angka = angka.sort((a,b) => b>a)
//
// console.log(angka);
