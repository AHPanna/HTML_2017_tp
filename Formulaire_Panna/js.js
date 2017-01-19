/*
#auteur : ABDUL HAKIM Panna
#11/01/2017
# twitter @AH_Panna
#eleve de BTS SNIR 1 2016-2017 Lycée Jean Rostand, Villepinte.
# Projet : Formulaire
# (c) MIT LICENCE
*/

//login
function login(field) {
    if (field.value == '') {
        alert("Ce Champ ne peut etre vide!");
        document.getElementById("pseudo").style.boxShadow = "0 0 5px red";
        document.getElementById("pseudo").style.border ="1px solid red";
    }else {
  document.getElementById("pseudo").style.boxShadow = "0 0 5px lime";
  document.getElementById("pseudo").style.border ="1px solid lime";

  }
}

//mot de passe
function mdp(field) {
    if (field.value == '') {
        alert("Ce Champ ne peut etre vide!");
        document.getElementById("pass").style.boxShadow = "0 0 5px red";
        document.getElementById("pass").style.border ="1px solid red";
    }else {
  document.getElementById("pass").style.boxShadow = "0 0 5px lime";
  document.getElementById("pass").style.border ="1px solid lime";

  }
}

// nom
function nom(field) {
    if (field.value == '') {
        alert("Ce Champ ne peut etre vide!");
        document.getElementById("nom").style.boxShadow = "0 0 5px red";
        document.getElementById("nom").style.border ="1px solid red";
    }else {
  document.getElementById("nom").style.boxShadow = "0 0 5px lime";
  document.getElementById("nom").style.border ="1px solid lime";

  }
}

//prenom

function prenom(field) {
    if (field.value == '') {
        alert("Ce Champ ne peut etre vide!");
        document.getElementById("prenom").style.boxShadow = "0 0 5px red";
        document.getElementById("prenom").style.border ="1px solid red";
    }else {
  document.getElementById("prenom").style.boxShadow = "0 0 5px lime";
  document.getElementById("prenom").style.border ="1px solid lime";

  }
}

//age
function age(field){
  if (field.value == '') {
      alert("Ce Champ ne peut etre vide!");
      document.getElementById("age").style.boxShadow = "0 0 5px red";
      document.getElementById("age").style.border ="1px solid red";
  }else if( field.value >75 || field.value <15) {
            alert("Age Autoriser entre 15-75");
document.getElementById("age").style.boxShadow = "0 0 5px red";
document.getElementById("age").style.border ="1px solid red";
}
else{
document.getElementById("age").style.boxShadow = "0 0 5px lime";
document.getElementById("age").style.border ="1px solid lime";
}}

//email
function email(mail)
{

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
     document.getElementById("mail").style.boxShadow = "0 0 5px lime";
     document.getElementById('mail').style.border ="1px solid lime";

  }else if (mail.value==''){
alert("Ce Champ ne peut etre vide!");
document.getElementById("mail").style.boxShadow = "0 0 5px red";
document.getElementById("mail").style.border ="1px solid red";

}else{
    alert("email erroné exemple : johndoe@email.com")
document.getElementById("mail").style.boxShadow = "0 0 5px red";
document.getElementById('mail').style.border ="1px solid red";
}}


//date de naissance
function day(){
var day = document.getElementById('day').value;
  if (day.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)){
        document.getElementById("day").style.boxShadow = "0 0 5px lime";
        document.getElementById('day').style.border ="1px solid lime";


  }else if (mail.value==''){
alert("Ce Champ ne peut etre vide!");
document.getElementById("day").style.boxShadow = "0 0 5px red";
document.getElementById("day").style.border ="1px solid red";
}else{
 alert("Format date Invalide : Mois / Date / Année, exemple : le 11 juillet 1996 = 07/11/1996 ");
document.getElementById("day").style.boxShadow = "0 0 5px red";
document.getElementById('day').style.border ="1px solid red";

  }
}
