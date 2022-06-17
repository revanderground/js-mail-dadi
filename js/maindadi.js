const aiNumber = Math.floor((Math.random()*6)+1);
const userNumber = Math.floor((Math.random()*6)+1);

console.log(`il tuo punteggio è ${userNumber}`);
console.log(`il punteggio del computer è ${aiNumber}`);

if (aiNumber > userNumber){
    console.log("Hai perso");
} else if (aiNumber < userNumber){
    console.log("Hai vinto");
} else if (aiNumber == userNumber){
    console.log("Hai pareggiato");
}