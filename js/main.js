firebase.initializeApp({
    apiKey: "AIzaSyBse9FlkX-vBRYTtBwU180YikcBAOzGKd8",
    authDomain: "dare-ae032.firebaseapp.com",
    databaseURL: "https://dare-ae032.firebaseio.com",
    projectId: "dare-ae032",
    storageBucket: "dare-ae032.appspot.com",
    messagingSenderId: "137119318931"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

/*db.collection("Dare").add({
        codigo: "3",
        dare: "publicar una foto llorando en tu estado de whatsapp"
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Guardado correctamente 😎")
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });*/

  //Add note

  function addDare(){

    let reto = document.getElementById('reto').value;
    let code = document.getElementById('code').value;


    db.collection("Dare").add({
        codigo: code,
        dare: reto
    })
    .then(function(docRef) {
        document.getElementById('reto').value='';
        document.getElementById('code').value='';
        console.log("Document written with ID: ", docRef.id);
        alert("Guardado correctamente 😎");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert(" ERROR ERROR ERROR  😪 ")
    });

}



// let codedatos = document.getElementById('codedare');

// codedatos.innerHTML='';

// db.collection("Dare").orderBy("codigo", "desc").limit(tos1).onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//         codedatos.innerHTML=`
//         <p>${doc.data().codigo}</p>
//         `;
//     });
// });





function nextDare(){
let datos = document.getElementById('dare');

    datos.innerHTML='';
    

    let numeroRandom =getRandom(1,4);
    console.log(numeroRandom);

    db.collection("Dare").where("codigo", "==", String(numeroRandom))
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            datos.innerHTML=`
            <p>${doc.data().dare}</p>
                console.log(doc.data().dare)
            `;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

