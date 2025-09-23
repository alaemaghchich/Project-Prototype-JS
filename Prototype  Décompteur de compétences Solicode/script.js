let competences = ["C1", "C3", "C2", "C1", "C8", "C1"];
let codeChoisi = "C1"; //SELECTED an COD BY RESERCH IN COMPETENCES and his c1
let compteur = 0; //create variable his name compteur = 0 becous start calcul from 0
for (let i = 0; i < competences.length; i++) {  //Here we started loop cous returne all component =العناصر  
  if (competences[i] == codeChoisi) {
    compteur++;
  }
}
console.log("Le code " + codeChoisi + " apparaît " + compteur );