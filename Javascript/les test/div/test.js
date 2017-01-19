var res;
var nb=parseInt(prompt('Entrez un Nombre'));
function div_par_2(valeur){
  var resultat;
  resultat = valeur / 2 ;
  return resultat ;
}

if(nb){
  res=div_par_2(nb);
  window.alert('le résultat est : '+res);
  
}
else {
  window.alert('il faut rentrer un nombre!');
}

