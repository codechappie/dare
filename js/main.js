firebase.initializeApp({
    apiKey: "AIzaSyBe8o-QiOYiY0Kc2QOvBRU93T2h26CKzxw",
    authDomain: "tasker-ea7c9.firebaseapp.com",
    databaseURL: "https://tasker-ea7c9.firebaseio.com",
    projectId: "tasker-ea7c9",
    storageBucket: "tasker-ea7c9.appspot.com",
    messagingSenderId: "767095940991"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  //Add note

  function addNote(){

    let titulo = document.getElementById('ititle').value;
    let descripcion = document.getElementById('idescription').value;
    let fecha = document.getElementById('idate').value;


    db.collection("counts").add({
        title: titulo,
        description: descripcion,
        day: fecha
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Guardado correctamente 😎")
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}

//Show Notes

let cuentas = document.getElementById('formcount');
db.collection("counts").onSnapshot((querySnapshot) => {
    cuentas.innerHTML ='';
    
    querySnapshot.forEach((doc) => {
        
        
        console.log(`${doc.id} => ${doc.data()}`);
        
        var iday= doc.data().day;
        var dia = parseInt(iday.substr(8,10));
        var mes = parseInt(iday.substr(5,8));
        var ano = parseInt(iday.substr(0,4));

        if(mes == 1){
            mes ="Enero";
        }else if(mes==2){
            mes ="febrero";
        }else if(mes == 3){
            mes ="Marzo";
        }else if(mes==4){
            mes ="Abril";
        }else if(mes==5){
            mes ="Mayo";
        }else if(mes == 6){
            mes ="Junio";
        }else if(mes==7){
            mes ="Julio";
        }else if(mes==8){
            mes ="Agosto";
        }else if(mes == 9){
            mes ="Septiembre";
        }else if(mes==10){
            mes ="Octubre";
        }else if(mes==11){
            mes ="Noviembre";
        }else if(mes == 12){
            mes ="Diciembre";
        }

        cuentas.innerHTML +=` 
        <div class="deudas-card">
        <div class="fecha">
            <h1>${dia}</h1>
            <h2>${mes}</h2>
            <h4>${ano}</h4>
        </div>
        <div class="info">
            <h3>${doc.data().title}</h3>
            <p>${doc.data().description}</p>
        </div>
        <div class="botones">
            <button><i class="far fa-edit"></i></button>
            <button><i class="far fa-trash-alt"></i></button>
        </div>
        </div>
   `
        
    });
});