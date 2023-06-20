// EXERCICE N°1
// let message = "Hello";
// alert(message);



// EXERCICE N°2
// let lastName = 'Doe';
// let firstName = 'John';
// let city = 'New-York';


// let message = 'Nom : '+ lastName + '\n' +
//               'Prénom : '+ firstName + '\n' +
//               'Ville : '+ city;
// alert(message);


// EXERCICE N°3
// let prenom = prompt('Hello, veuillez taper votre prénom :');
// alert('Bonjour ' + prenom);


// EXERCICE N°4
// let lastName = prompt('Hello ! \nVeuillez taper votre nom :');
// let firstName = prompt('Veuillez taper votre prénom :');
// let city = prompt('Veuillez taper votre ville :');


// let message = 'Nom : '+ lastName + '\n' +
//               'Prénom : '+ firstName + '\n' +
//               'Ville : '+ city;
// alert(message);


// EXERCICE N°5
// let premierFloat = prompt('Veuillez entrer un nombre à virgule : ');
// let deuxiemeFloat = prompt('Veuillez entrer un deuxieme nombre à virgule : ');

// alert('Résultat de la partie entière du premier nombre à virgule, multiplié par le deuxieme nombre à virgule : ' + Math.floor(premierFloat)*deuxiemeFloat);


// EXERCICE N°6
// function resteDivisionTwoNumber(number1, number2){
//     return number1 % number2;
// }


// EXERCICE N°7
// let pointure = prompt('Hello ! \nVeuillez taper votre pointure :');
// let anneeNaissance = prompt('Veuillez taper votre année de naissance :');

// function calculBizarre(pointure, anneeNaissance){
//     return (((((pointure * 2)+5)*50)-anneeNaissance)+1766);

// }

// let result = calculBizarre(pointure, anneeNaissance);

// alert(result);


// EXERCICE N°8
// let age = prompt('votre age = ');

// if(age >= 18){
//     alert('Vous êtes majeur');
// }else{
//     alert('Vous êtes mineur');
// }

// EXERCICE N°9
// let nombreTableMultiplication = prompt ('Saisissez le nombre dont vous voulez la table de multiplication : ');
// let result = '';

// for(let i=1; i<=10; i++){
//     result += nombreTableMultiplication + ' * ' + i + ' = ' + nombreTableMultiplication*i + '\n';

// }

// alert(result);

// EXERCICE N°10
// let phrase = prompt('votre phrase : ');
// const tabPhrase = phrase.split('');

// let result = '';

// tabPhrase.forEach(character => {
//     result += character+'\n';
// })

// alert(result);

// EXERCICE N°11
let nombre = 15;

while(nombre < 1 || nombre > 10){
    nombre = prompt('Veuillez saisir un nombre compris entre 1 et 10');
}

nombre = parseInt(nombre); // !!!!!!!

if(nombre < 5){
    alert('le nombre saisit ('+nombre+') est inférieur à 5');
} else {
    if(nombre === 5){
        alert('le nombre saisit ('+nombre+') est égal à 5'); 
    } else{
        alert('le nombre saisit ('+nombre+') est supérieur à 5');
    }
}

// EXERCICE N°12
// function auCarre(nombre){
//     return nombre**2;
// }

// let nombre = prompt('Saisissez le nombre dont vous voulez calculer son carré :');
// let result = auCarre(nombre);
// alert(result);
