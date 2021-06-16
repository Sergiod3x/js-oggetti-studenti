var output=document.getElementById("out");


// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
 

var student = {
     nome : "Gino",
     cognome : "Paoli",
     age : 80 
 }

 //Stampiamo a schermo la coppia chiave valore

 for (var K in student){
    output.innerHTML += K + "  : " + student[K] + " " ;
 }

 var studentList = [
     {  nome : "Pippo",
     cognome : "Baudo",
     age : 80 

     },
     {
        nome : "Mimmo   ",
        cognome : "Mimmo",
        age : 11 
     }
 ]


 for ( var x = 0; x < studentList.length; x++){
     console.log (studentList[x].nome, studentList[x].cognome);
 }


 var newName = prompt("inserisci il nome dello studente");
 var newSurname = prompt("inserisci il nome dello studente");
 var newAge = prompt("inserisci il nome dello studente");

 studentList.push({
     nome : newName,
     cognome : newSurname,
     age : newAge
 });

 console.log(studentList);


// PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for. (CONOSCIAMO GIà LA STRUTTURA)



// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.


// var userName = "";
// var userSurname = "";
// var userPhone = 0;

// var rubrica = {
//     users: []
//  }


//  while( rubrica.users.length < 3){
//     userName = prompt("inserisci il nome ");
//     userSurname = prompt("inserisci il cognome");
//     userPhone = prompt("inserisci il  numero di telefono");
     
//      rubrica.users.push({
//          name : userName,
//          surname : userSurname,
//          phone : userPhone 
//      });
//  }

//  console.log(rubrica);



// for(var i = 0 ; i<rubrica.users.length; i++){
//     console.log(rubrica.users[i]);
//     for (var k in rubrica.users[i]){
//             var uName = rubrica.users[i][k];
//             output.innerText += k + " " + uName+ " " ;
//     }
// }
    
//  # pushiamo gli oggetti delle persone in users, man mano che l'utente li inserisce


