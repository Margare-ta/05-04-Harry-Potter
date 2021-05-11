let Kvaff = document.getElementById("myInput");
let Arany = document.getElementById("myin").value = 0;
let bed = document.getElementById("bedobas");
let elkap = document.getElementById("elkap");
let h2 = document.getElementById("h2");

let pontszam = 0;

bed.addEventListener("click", valueee);
elkap.addEventListener("click", arany);

function valueee() {
  let ertek = document.getElementById("myInput").value;
  if(ertek < 0){
    alert("A megadott érték nem lehet negatív!");
  } else{
    Kvaff.value++;
    pontszam += 10;
    h2.innerText = "Összesen: " + pontszam + " pont";
  }
}

function arany() {
  for (let szam2 = 0; szam2 < 3; szam2++) {

    function fact(szam2) {
      if (szam2 < 0) {

        return 0;

      } else {
        return ('szam2' + 1);
      }
    }

    if (szam2 > 1) {
      window.alert("Vége a játéknak!");
    }
  }

  document.getElementById('myin').value = ('szam2');
}






