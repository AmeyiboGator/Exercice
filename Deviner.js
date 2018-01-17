var randomNbr = Math.floor(Math.random() * 100) + 1;
var nbrEssai = 1;
var essais = document.querySelector('.lblEssais');
var nbr = document.querySelector('.nbr');
var etat = document.querySelector('.lblEtat');
var posi = document.querySelector('.lblPosi');
var sbmit = document.querySelector('.btnSubmit');
var rset = document.querySelector('.btnReset');

function tentative(){
	nbrTenta = Number(nbr.value);
	if (nbrEssai===1) {
		essais.textContent = 'Propositions précédentes : ';
	};
	essais.textContent += nbrTenta + ' ';

	if (nbrTenta === randomNbr) {
		etat.textContent = 'Bravo, vous avez trouvé le nombre !';
		etat.style.backgroundColor = 'green';
		posi.textContent = '';
		finDuJeu();
	} else if (nbrEssai == 10) {
		etat.textContent = '!!! PERDU !!!';
		etat.style.backgroundColor = 'red';
		posi.textContent = '';
		finDuJeu();
	} else {
		etat.textContent = 'Faux!';
		etat.style.backgroundColor = 'red';
		if (nbrTenta < randomNbr) {
			posi.textContent = 'Le nombre saisi est trop petit !';
		} else {
			posi.textContent = 'Le nombre saisi est trop grand!';
		}
	}

	nbr.focus();
	etat.style.color = 'white';
	nbr.value = '';
	nbrEssai++;
}

sbmit.addEventListener('click',tentative);

function finDuJeu(){
	nbr.disabled = true;
	sbmit.disabled = true;
	rset = document.createElement('button');
	rset.textContent = 'Rejouer';
	document.body.appendChild(rset);
	rset.addEventListener('click',reset);
}

function reset(){
	var rslts = document.querySelectorAll('.rslts p');
	for (var i = 0; i < rslts.length; i++) {
		rslts[i].textContent = '';
	};
	nbrEssai = 1;
	nbr.disabled = false;
	sbmit.disabled = false;
	nbr.value = '';
	nbr.focus();
	//document.body.removeChild(rset);
	rset.parentNode.removeChild(rset);
	randomNbr = Math.floor(Math.random() * 100) + 1;
}

document.body.style.boxShadow = '3px 3px 6px black';
document.body.style.padding = '10px';