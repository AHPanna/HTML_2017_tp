	var recherche1 =document.querySelector('#menu .article span'),
	var recherche_tous=document.querySelectorAll('#menu .article span');
	alert(recherche1.innerHTML);
	alert(recherche_tous.length);
	alert(recherche_tous[0].innerHTML+'-'+recherche_tous[1].innerHTML);