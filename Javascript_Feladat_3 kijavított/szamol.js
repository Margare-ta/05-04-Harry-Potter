
function szamol(){

  var kvaff = parseInt(document.getElementById("myInput").value); // változó, ebben tároljuk az input értékét egészre kerekítve
  var arany = parseInt(document.getElementById("myInput2").value); // -||-
  var osszeg = 0; // összeg változó

  //ellenőrzések futtatása, hogy ne kaphasson hibás értéket egyik mező sem
if (kvaff<0){
  window.alert("Ne írjon be negatív számot (kvaff)!");
  document.getElementById("myInput").value = 0;
  kvaff=0;

}
else if (arany<0){ 
  window.alert("Ne írjon be negatív számot (Aranycikesz)!");
  document.getElementById("myInput2").value = 0;
  arany=0;
}
else if (arany>1){
  window.alert("Csak egy aranycikeszt lehet elkapni!");
  document.getElementById("myInput2").value = 1;
  arany=1;
}

  //számítás
  osszeg = ( kvaff * 10 + arany *150);   
  osszeg = ("Összeg:" + osszeg + "pont");
  document.getElementById('h2').innerHTML = osszeg;

  if (osszeg > 150) //Ha elkapták az aranycikeszt akkor nyert valamelyik csapat
  {
    window.alert("Vége a játéknak!")
  }
}

