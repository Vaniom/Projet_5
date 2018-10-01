// Definition des variables
var btnElt = document.getElementById("btn");
var reponseDiv = document.getElementById("reponse");
var generateurType = document.getElementById("typeGen");
var resumeDiv = document.getElementById("resume");
var hintDiv = document.getElementById("hint");
var nombreLigne = "";
var child = document.createElement("p");
var resp = "";
var phrase = "";
var respArray = [];
var phrasesArray = [];

// Definition des tableaux contenant les parties de phrases
var part0 = ['Bélier: ', 'Taureau: ', 'Gémeaux: ', 'Cancer: ', 'Lion: ', 'Vierge: ', 'Balance: ', 'Scorpion: ', 'Sagitaire: ', 'Capricorne: ', 'Verseau: ', 'Poisson: '];
var part1 = ['votre travail ', 'votre santé ', 'votre relation avec les autres ', 'votre situation financière ', 'votre relation amoureuse ', 'votre mental '];
var part2 = ['tient en ce moment beaucoup de place dans votre vie. ', 'vous préoccupe plus que d\'ordinaire. ', 'est une grande source d\'angoisse. ', 'semble vous avoir abandonné. ', 'sera source de profonde douleur. ', 'est au centre de vos préoccupations. ', 'est au niveau zéro. '];
var part3 = ['C\'est le moment d\'en changer! ', 'Les astres sont de votre côté... Du mauvais côté. ', 'Achetez une boîte d\'antidepresseurs. ', 'Achetez un ticket de tombola, ou pas. ', 'Un Mars et ça repart! ', 'Prenez les choses avec joie! ', 'Enfin c\'est pas sûr, les planètes se plantent parfois.', 'Surveillez votre consommation d\'alcool.', 'Faites plus de sport.', 'Mangez des fruits et fumez moins. ', "N'écoutez pas les infos, c'est mauvais pour vous. "];
var part4 = ['Dimanche ', 'A partir de 23h00 ', 'A partir de la semaine prochaine ', 'Lundi ', 'Mardi ', 'Mercredi ', 'Jeudi ', 'Vendredi ', 'Samedi '];
var part5 = ['la tempête s\'abattra ', 'quelques gouttes sont à prévoir ', 'nous devrions profiter d\'un temps ensoleillé ', 'les températures chuteront brutalement ', 'une légère brise soufflera ', 'des orages feront leur apparition ', 'l\'anticyclone faiblira, apportant des pluies soutenues '];
var part6 = ['sur la côte méditérranéenne.', 'en Ile de France.', 'dans le Nord du pays.', 'en Corse.', 'sur la façade atlantique.', 'dans les Pyrénées.', 'dans le centre de la France.', 'dans l\'est du pays.'];

var horoscopArray = [part0, part1, part2, part3];// on regroupe les sequences 'horoscope' dans un tableau
var meteoArray = [part4, part5, part6];// idem pour les sequences 'meteo'
reponseDiv.style.display = "none";// On masque la div vide

btnElt.addEventListener("click", function(e){// ajout d'un ecouteur d'evenement sur le bouton
    nombreLigne = document.getElementById('nombre').value;// choix utilisateur du nombre de lignes à générer stocké dans la variable nombreLigne
    reponseDiv.innerHTML = ""; // on efface le contenu des div
    hintDiv.innerHTML = "";
    resumeDiv.innerHTML = "";
    child.textContent = "Vous avez choisi de générer " + nombreLigne +" phrase(s) dans le mode " + generateurType.value;
    resumeDiv.appendChild(child);
    e.preventDefault();// On interdit le raffraichissement de la page lors du clic sur le bouton
    
    //fonction de génération aléatoire de phrase
    function randomPhrase(array) {        
        for (var i = 0; i < nombreLigne; i++) { // on répète la boucle x fois pour générer x phrases
            //console.log(nombreLigne);
            phrase = ""; // on purge la valeur de la variable phrase
            array.forEach(function(elt){ // Pour chaque élément du tableau
                var resp = elt[Math.floor(Math.random() * elt.length)];// tirage aleatoire d'un element dans chaque sous-tableau          
                //console.log(resp);
                respArray.push(resp);// On stocke chaque valeur tirée pécédemment dans un nouveau tableau
                phrase = "".concat(...respArray);// et on concatene les éléments du tableau respArray pour former une phrase
                })
            //console.log("phrase = " + phrase);
            phrasesArray.push(phrase);// on stocke chaque phrase dans un tableau
            respArray.splice(0, respArray.length);// et on purge le tableau des éléments aleatoires            
        }        
        for (var i = 0; i < phrasesArray.length; i++){// pour chaque element du tableau des phrases
            var phraseDiv = document.createElement("p");// on créé un nouveau paragraphe
            phraseDiv.textContent = phrasesArray[i];// on definit la valeur textuelle du 'p' créé
            //console.log("phrasesArray = " + phrasesArray[i]);
            reponseDiv.appendChild(phraseDiv);// On ajoute le paragraphe à la div
            //console.log("child = " + child.textContent);
            reponseDiv.style.display = "block";
        }
          
        phrasesArray.splice(0, phrasesArray.length);// Purge du tableau de phrases            
            var hintPhrase = document.createElement("p");
            hintPhrase.textContent = "Vous pouvez générer de nouvelles phrases en cliquant sur le bouton Go! à nouveau";
            hintDiv.appendChild(hintPhrase);

    }
    //gestion du choix du générateur
    if (generateurType.value == "horoscope"){// Si la valeur choisie par l'utilisateur est horoscope
        randomPhrase(horoscopArray); // on applique la fonction au tableau horoscopArray
        reponseDiv.className = "horo";
    } else { //sinon
        randomPhrase(meteoArray);// on applique la fonction au tableau meteoArray
        reponseDiv.className = "meteo";
    }        
})