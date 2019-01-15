// let test = "racecar";
//
// function checkP(Str){
//   let newStr="";
//   for(let i=0; i<Str.length; i++){
//     if(Str[i] === Str[Str.length-1-i]){
//       newStr+= Str[i];
//     }
//   }
//   return newStr;
// }
//
// console.log(checkP(test));

let test = "racDecar";

function checkP(Str){
  // let newStr="";
  for(let i=0; i<Str.length; i++){
    if(Str[i] !== Str[Str.length-1-i]){
      // newStr+= Str[i];
      return false;
    }else{return true}
  }
}

console.log(checkP(test));
