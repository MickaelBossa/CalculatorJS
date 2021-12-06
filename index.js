// let choix;
// let firstNumber;
// let secondNumber;
// let resultat;
// let restart = false;

// function addition(nbr1, nbr2) {
//   return nbr1 + nbr2;
// }

// function multiplication(nbr1, nbr2) {
//   return nbr1 * nbr2;
// }

// function soustraction(nbr1, nbr2) {
//   return nbr1 - nbr2;
// }

// function division(nbr1, nbr2) {
//   if (nbr2 == 0) {
//     throw new Error("Impossible de diviser par 0");
//   }
//   return nbr1 / nbr2;
// }

// do {
//   do {
//     choix = Number(
//       prompt(
//         "Que souhaitez-vous faire ? \n\n 1- Addition \n 2- Multiplication \n 3- Soustraction \n 4- Division \n"
//       )
//     );
//   } while (choix > 4 || choix < 1 || isNaN(choix));

//   do {
//     firstNumber = Number(prompt("Quel est votre premier nombre ?"));
//     secondNumber = Number(prompt("Quel est votre deuxième nombre ?"));
//   } while (isNaN(firstNumber) || isNaN(secondNumber));

//   try {
//     switch (choix) {
//       case 1:
//         resultat = addition(firstNumber, secondNumber);
//         break;
//       case 2:
//         resultat = multiplication(firstNumber, secondNumber);
//         break;
//       case 3:
//         resultat = soustraction(firstNumber, secondNumber);
//         break;
//       case 4:
//         resultat = division(firstNumber, secondNumber);
//         break;
//       default:
//         throw new Error("Une erreur est survenue");
//     }
//     alert("Le resultat est : " + resultat);
//   } catch (error) {
//     alert(error);
//   }
//   restart = confirm("Voulez vous recommencer un calcul ?");
// } while (restart);
