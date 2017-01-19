//-------------------------------------------------------------
//  Nom Document : k_serpent
//  Auteur       : kazma (Kamel.A)
//  Objet        : snake le jeux du serpent   http://codes-sources.commentcamarche.net/
//  Création     : 08.10.2013
//-------------------------------------------------------------


k_serpent={

direction:39,
tb_posi_l:[],
tb_posi_t:[],
tb_el:[],
tb_grille_l:[],
tb_grille_t:[],
tb_rotation:[],
taille_pixel:20,
vitesse:100,
bout:'',
inter:'',
point:0,

creason:function(chemin){
		
		var audio_el=document.createElement('audio');
		
		var s_ogg=document.createElement('source');
		s_ogg.setAttribute('type','audio/ogg');
		s_ogg.setAttribute('src',chemin+'.ogg');
		audio_el.appendChild(s_ogg);
		
		var s_mp3=document.createElement('source');
		s_mp3.setAttribute('type','audio/mp3');
		s_mp3.setAttribute('src',chemin+'.mp3');
		audio_el.appendChild(s_mp3);
		return audio_el;
	},
	
aud:'',

antibug:0
}

function serpent_touch(evt){	// gestion du sens de deplacement en fonction des touches clavier

	if(k_serpent.antibug==1){
		return false;
	}
	k_serpent.antibug=1;
	
	var touche=evt.keyCode;
	
	if(touche==39 && k_serpent.direction==37){
		return false;
	}
	if(touche==37 && k_serpent.direction==39){
		return false;
	}
	if(touche==40 && k_serpent.direction==38){
		return false;
	}
	if(touche==38 && k_serpent.direction==40){
		return false;
	}
	
	if(touche!=k_serpent.direction){
		k_serpent.direction=touche;
	}
}

function serpent_bouge(evt){	//deplacement du serpent et du corp.

	if(k_serpent.direction==39){

		k_serpent.tb_posi_l.unshift(k_serpent.tb_posi_l[0]+k_serpent.taille_pixel);
		k_serpent.tb_posi_l.pop();
		k_serpent.tb_posi_t.unshift(k_serpent.tb_posi_t[0]);
		k_serpent.tb_posi_t.pop();
		k_serpent.tb_rotation.unshift(0);
		k_serpent.tb_rotation.pop();
	}
	if(k_serpent.direction==37){

		k_serpent.tb_posi_l.unshift(k_serpent.tb_posi_l[0]-k_serpent.taille_pixel);
		k_serpent.tb_posi_l.pop();
		k_serpent.tb_posi_t.unshift(k_serpent.tb_posi_t[0]);
		k_serpent.tb_posi_t.pop();
		k_serpent.tb_rotation.unshift(180);
		k_serpent.tb_rotation.pop();
	}
	if(k_serpent.direction==38){

		k_serpent.tb_posi_t.unshift(k_serpent.tb_posi_t[0]-k_serpent.taille_pixel);
		k_serpent.tb_posi_t.pop();
		k_serpent.tb_posi_l.unshift(k_serpent.tb_posi_l[0]);
		k_serpent.tb_posi_l.pop();
		k_serpent.tb_rotation.unshift(270);
		k_serpent.tb_rotation.pop();
	}
	if(k_serpent.direction==40){

		k_serpent.tb_posi_t.unshift(k_serpent.tb_posi_t[0]+k_serpent.taille_pixel);
		k_serpent.tb_posi_t.pop();
		k_serpent.tb_posi_l.unshift(k_serpent.tb_posi_l[0]);
		k_serpent.tb_posi_l.pop();
		k_serpent.tb_rotation.unshift(90);
		k_serpent.tb_rotation.pop();
	}
	
	cadre_bord();
	
	for(var i = 0; i < k_serpent.tb_el.length; i++){
		k_serpent.tb_el[i].style.left=k_serpent.tb_posi_l[i]+'px';
		k_serpent.tb_el[i].style.top=k_serpent.tb_posi_t[i]+'px';
		rotanav(k_serpent.tb_el[i],k_serpent.tb_rotation[i]);
	}
	for(var i = 1; i < k_serpent.tb_el.length; i++){

		if(colision_queue(k_serpent.tb_el[i])){
			fin();
			return false;
		}
	}
	
	if(colision()){

		k_serpent.tb_posi_l.push(0);
		k_serpent.tb_posi_t.push(0);
		k_serpent.bout.className='serpent';
		k_serpent.tb_el.push(k_serpent.bout);
		k_serpent.tb_rotation.push(0);
		k_serpent.bout=crea_queue();
		k_serpent.point+=5;
		document.getElementById('point').firstChild.nodeValue=k_serpent.point;
		k_serpent.aud.currentTime=0;
		k_serpent.aud.play();
	}
	
	k_serpent.antibug=0;
}

function rotanav(el,alpha){		//rotation des div en fonction du navigateur
	
	var effet='rotate('+alpha+'deg)';
	
	el.style.transform=effet;
	
	el.style.WebkitTransform=effet;

	el.style.OTransform=effet;

	el.style.MozTransform=effet;

	el.style.msTransform=effet;
}

function cadre_bord(){		//gestion de la position aux bords du div conteneur.

	var conteneur=document.getElementById('dvg_jeux');
	var obj=k_serpent.tb_el[0];
	
	if(obj.offsetLeft >= conteneur.offsetWidth){
		
		k_serpent.tb_posi_l[0]=0;
	}
	
	else if(obj.offsetLeft<0){
		
		k_serpent.tb_posi_l[0]=conteneur.offsetWidth-obj.offsetWidth;
	}
	
	if(obj.offsetTop < 0){
		k_serpent.tb_posi_t[0]=conteneur.offsetHeight-obj.offsetHeight;
	}

	else if(obj.offsetTop >= conteneur.offsetHeight){
		k_serpent.tb_posi_t[0]=0;
	}
}

function colision(){		//gestion de la colision entre la pomme et la tete

	var el=k_serpent.tb_el[0];
	var el2=k_serpent.bout;

	return(el.offsetTop == el2.offsetTop && el2.offsetLeft == el.offsetLeft);
}

function colision_queue(param){		//gestion de la colision entre la tete et le corps

	var el=k_serpent.tb_el[0];
	var el2=param;

	return(el.offsetTop == el2.offsetTop && el2.offsetLeft == el.offsetLeft);

}

function crea_queue(){	//creation des bouts de queues

	var el=document.createElement('div');
	el.className='pomme';
	el.style.left=k_serpent.tb_grille_l[Math.floor(Math.random()*k_serpent.tb_grille_l.length)]+'px';
	el.style.top= k_serpent.tb_grille_t[Math.floor(Math.random()*k_serpent.tb_grille_t.length)]+'px';
	
	return(document.getElementById('dvg_jeux').appendChild(el));
}


function fin(){	// fin de partie; on vide les tableaux, arrete l'interval et affiche le menu.

	clearInterval(k_serpent.inter);
	typeof window.addEventListener == 'undefined' ? document.detachEvent("onkeydown",serpent_touch) : removeEventListener("keydown",serpent_touch, false);

	k_serpent.tb_posi_l.splice(0, k_serpent.tb_el.length);
	k_serpent.tb_posi_t.splice(0, k_serpent.tb_el.length);
	k_serpent.tb_el.splice(0, k_serpent.tb_el.length);
	k_serpent.tb_grille_l.splice(0, k_serpent.tb_el.length);
	k_serpent.tb_grille_t.splice(0, k_serpent.tb_el.length);
	k_serpent.tb_rotation.splice(0, k_serpent.tb_el.length);
	var clone=document.getElementById('menu').cloneNode(true);
	var clone2=document.getElementById('dg_point').cloneNode(true);
	document.getElementById('dvg_jeux').innerHTML='';
	document.getElementById('dvg_jeux').appendChild(clone2);
	document.getElementById('dvg_jeux').appendChild(clone);
	document.getElementById('menu').style.display='block';
	k_serpent.point=0;
}


function init_serpent(){

	document.getElementById('menu').style.display='none';
	document.getElementById('point').firstChild.nodeValue=0;
	
	k_serpent.tb_el.push(crea_queue());
	k_serpent.tb_el[0].className='tete';

	k_serpent.tb_posi_l.push(k_serpent.tb_el[0].offsetLeft);

	k_serpent.tb_posi_t.push(k_serpent.tb_el[0].offsetTop);
	
	k_serpent.tb_rotation.push(0);

	for(var i=0;i < document.getElementById('dvg_jeux').offsetWidth; i+=k_serpent.taille_pixel){
		k_serpent.tb_grille_l.push(i);
	}
	
	for(var i=0;i < document.getElementById('dvg_jeux').offsetHeight; i+=k_serpent.taille_pixel){
		k_serpent.tb_grille_t.push(i);
	}
	k_serpent.bout=crea_queue();
	k_serpent.inter=setInterval(serpent_bouge,k_serpent.vitesse);
	k_serpent.aud=k_serpent.creason('res/son/pie');
	typeof window.addEventListener == 'undefined' ? document.attachEvent("onkeydown",serpent_touch) : addEventListener("keydown",serpent_touch, false);

}