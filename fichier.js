function tst(){
	// on veut transformer cet objet en chaine JSON
	var objet = {
	    variable1: "une chaine",
	    variable2: 5
	};

	var chaine = JSON.stringify(objet); // renvoie la chaine '{"variable1":"une chaine","variable2":5}'


	// maintenant on veut un objet à partir d'une chaine JSON
	var objet2 = JSON.parse(chaine); // renvoie un objet ayant la même structure que la variable objet ci-dessus
	for (i in objet2) {
		alert(objet2.i);
	};
	//alert(objet2);
	//alert(objet2.variable1); // affiche : "une chaine"
	//alert(objet2.variable2); // affiche : 5
}
	