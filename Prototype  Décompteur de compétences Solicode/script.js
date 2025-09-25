function alae(){
let competences = ["C1", "C3", "C2", "C1", "C8", "C1"];
let codeChoisi = "C1";
let compteur = 0;
for (let i = 0; i < competences.length; i++) {  
  if (competences[i] === codeChoisi) {
    compteur++;
  }
}
console.log(codeChoisi + " = " + compteur );
}
alae();
