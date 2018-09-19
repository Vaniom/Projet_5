// Definition des variables
var btnElt = document.getElementById("btn");
var reponseDiv = document.getElementById("reponse");
btnElt.preventDefault;
var part0Resp = "";
var part1Resp = "";
var part2Resp = "";
var part3Resp = "";
var nombreLigne = "";
// Definition des tableaux contenant les parties de phrases
var part0 = ['Bélier: ', 'Taureau: ', 'Gémeaux: ', 'Cancer: ', 'Lion: ', 'Vierge: ', 'Balance: ', 'Scorpion: ', 'Sagitaire: ', 'Capricorne: ', 'Verseau: ', 'Poisson: '];
var part1 = ['votre travail ', 'votre santé ', 'votre relation avec les autres ', 'votre situation financière ', 'votre relation amoureuse ', 'votre mental '];
var part2 = ['tient en ce moment beaucoup de place dans votre vie. ', 'vous préoccupe plus que d\'ordinaire. ', 'est une grande source d\'angoisse. ', 'semble vous avoir abandonné. ', 'sera source de profonde douleur. ', 'est au centre de vos préoccupations. ', 'est au niveau zéro. '];
var part3 = ['C\'est le moment d\'en changer!', 'Les astres sont de votre côté... Du mauvais côté.', 'Achetez une boîte d\'antidepresseurs.', 'Achetez un ticket de tombola, ou pas.', 'Un Mars et ça repart!', 'Prenez les choses avec joie!', 'Enfin c\'est pas sûr, les planètes se plantent parfois.', 'Surveillez votre consommation d\'alcool.', 'Faites plus de sport.', 'Mangez des fruits et fumez moins.', "N'écoutez pas les infos, c'est mauvais pour vous."];
//generation de la phrase au clic sur le bouton
btnElt.addEventListener("click", function(){// ajout d'un ecouteur d'evenement sur le bouton
    nombreLigne = document.getElementById('nombre').value;// choix utilisateur du nombre de lignes à générer stocké dans la variable nombreLigne
    reponseDiv.innerHTML = ""; // on efface le contenu de la div
    for (var i = 0; i < nombreLigne; i++) { // on repete la boucle x fois pour generer x phrases
        console.log(nombreLigne);
        part0Resp = part0[Math.floor(Math.random() * part0.length)];// tirage aleatoire d'un element dans chaque tableau
        part1Resp = part1[Math.floor(Math.random() * part1.length)];
        part2Resp = part2[Math.floor(Math.random() * part2.length)];
        part3Resp = part3[Math.floor(Math.random() * part3.length)];
        var child = document.createElement("p"); // creation d'un nouveau paragraphe
        child.textContent = part0Resp + part1Resp + part2Resp + part3Resp; // definition du contenu du paragraphe
        reponseDiv.appendChild(child); // ajout du paragraphe dans la div
        //btnElt.style.display = "none";        
    }
})
