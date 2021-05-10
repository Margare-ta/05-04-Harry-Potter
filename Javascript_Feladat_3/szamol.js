let Kvaff = document.getElementById("myInput").value = "0";
let Arany = document.getElementById("myin").value = "0";
let bed = document.getElementById("bedobas");
let elkap = document.getElementById("elkap");
let h2 = document.getElementById("h2");

bed.addEventListener("click", valueee);
elkap.addEventListener("click", arany);

function valueee(){
    for (let szam = 0; szam < 150; szam++){


      function fact(szam) { 
        if (szam < 0){

            return 0;
         }else{
           return ('szam' + 1);
         }}
        }

    document.getElementById("myInput").value = ('fact');
}

function arany(){
  for (let szam2 = 0; szam2 < 2; szam2++ ) {

    function fact(szam2) { 
      if (szam2 < 0){

          return 0;

       }else{
         return ('szam2' + 1);
       }}

       if (szam2 > 1){
        window.alert("Vége a játéknak!");
      }
      }

  document.getElementById('myin').value = ('szam2');
}






