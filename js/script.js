// Definition des variables
var btnElt = document.getElementById("btn");
var reponseDiv = document.getElementById("reponse");
var generateurType = document.getElementById("typeGen");
var nombreLigne = "";
var child = document.createElement("p");
var resp = "";
var phrase = "";
var respArray = [];
var phrasesArray = [];

//btnElt.preventDefault();
// Definition des tableaux contenant les parties de phrases
var part0 = ['Bélier: ', 'Taureau: ', 'Gémeaux: ', 'Cancer: ', 'Lion: ', 'Vierge: ', 'Balance: ', 'Scorpion: ', 'Sagitaire: ', 'Capricorne: ', 'Verseau: ', 'Poisson: '];
var part1 = ['votre travail ', 'votre santé ', 'votre relation avec les autres ', 'votre situation financière ', 'votre relation amoureuse ', 'votre mental '];
var part2 = ['tient en ce moment beaucoup de place dans votre vie. ', 'vous préoccupe plus que d\'ordinaire. ', 'est une grande source d\'angoisse. ', 'semble vous avoir abandonné. ', 'sera source de profonde douleur. ', 'est au centre de vos préoccupations. ', 'est au niveau zéro. '];
var part3 = ['C\'est le moment d\'en changer! ', 'Les astres sont de votre côté... Du mauvais côté. ', 'Achetez une boîte d\'antidepresseurs. ', 'Achetez un ticket de tombola, ou pas. ', 'Un Mars et ça repart! ', 'Prenez les choses avec joie! ', 'Enfin c\'est pas sûr, les planètes se plantent parfois.', 'Surveillez votre consommation d\'alcool.', 'Faites plus de sport.', 'Mangez des fruits et fumez moins. ', "N'écoutez pas les infos, c'est mauvais pour vous. "];
var horoscopArray = [part0, part1, part2, part3];
//generation de la phrase au clic sur le bouton
btnElt.addEventListener("click", function(){// ajout d'un ecouteur d'evenement sur le bouton
    nombreLigne = document.getElementById('nombre').value;// choix utilisateur du nombre de lignes à générer stocké dans la variable nombreLigne
    reponseDiv.innerHTML = ""; // on efface le contenu de la div
    child.textContent = "Vous avez choisi de générer " + nombreLigne +" phrase(s) dans le mode " + generateurType.value;
    reponseDiv.appendChild(child);
    event.preventDefault();
    
    //fonction de génération aléatoire de phrase
    function randomPhrase(array) {        
        for (var i = 0; i < nombreLigne; i++) { // on répète la boucle x fois pour générer x phrases
            //console.log(nombreLigne);
            phrase = ""; // on purge la valeur de la variable phrase
            array.forEach(function(elt){ // Pour chaque élément du tableau
                var resp = elt[Math.floor(Math.random() * elt.length)];// tirage aleatoire d'un element dans chaque sous-tableau          
                //console.log(resp);
                respArray.push(resp);// On stocke chaque valeur tirée pécédemment dans un nouveau tableau
                phrase = "".concat(...respArray);// et on concatene les élément du tableau respArray pour former une phrase
                })
            //console.log("phrase = " + phrase);
            phrasesArray.push(phrase);// on stocke chaque phrase dans un tableau
            respArray.splice(0, respArray.length);// et on purge du tableau des éléments aleatoires            
        }        
        for (var i = 0; i < phrasesArray.length; i++){// pour chaque element du tableau des phrases
            var phraseDiv = document.createElement("p");// on créé un nouveau paragraphe
            phraseDiv.textContent = phrasesArray[i];// on definit la valeur textuelle du 'p' créé
            //console.log("phrasesArray = " + phrasesArray[i]);
            reponseDiv.appendChild(phraseDiv);// On ajoute le paragraphe à la div
            //console.log("child = " + child.textContent);
        }
        
        phrasesArray.splice(0, phrasesArray.length);// Purge du tableau de phrases

    }
    //gestion du choix du générateur
    if (generateurType.value == "horoscope"){// Si la valeur choisie par l'utilisateur est horoscope
        randomPhrase(horoscopArray); // on applique la fonction au tableau horoscopArray
    } else { //sinon
        var constructionDiv = document.createElement("p");// on insere un paragraphe 
        constructionDiv.textContent = "Ce générateur n'est pas encore fonctionnel, il le sera sous peu!";
        reponseDiv.appendChild(constructionDiv);
    }        
})