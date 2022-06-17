const emailList = [ "pincopallino@email.com", "berlino@email.com", "tokyo@email.com", "lisbona@email.com"];
const userEmail = prompt("Inserisci la tua email");

//partiamo dal presupposto che non esista una mail all'interno dell'array
emailFound=false;

for ( let index=0; index < emailList.length; index++ ) {
    const email =  emailList[index];
    console.log(email);
    
    if (userEmail == email){
       emailFound=true;
    }
}    
    
if (emailFound==true){
    console.log(`la mail  ${userEmail} È presente nel nostro database`);
} else {
    console.log(`la mail  ${userEmail} NON È presente nel nostro database`);
}


     
