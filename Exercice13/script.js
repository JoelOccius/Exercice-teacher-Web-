// Groupe - Convertions des minutes en heures et heures en minutes.

// Créez un programme qui reçoit un numéro saisi par l'utilisateur et affiche
//  le nombre équivalent d'heures et minutes

// Exemple: 131 équivaut à 2 heures et 11 minutes.

let minutesTotales = parseInt(prompt("informe la quantité de minutes"));
let heures = Math.floor(minutesTotales / 60);
let minutes = minutesTotales % 60;
alert(`${minutesTotales} minutes équivalents à ${heures} heures et ${minutes} minutes.`);