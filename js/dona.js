let bt2= document.getElementById("btn1");
let login=document.getElementById("login");
let pwd=document.getElementById("pwd");
let erreur1= document.getElementById("erreur1");
let erreur2= document.getElementById("erreur2");
let erreur3= document.getElementById('erreur3');


 bt2.addEventListener('click', (event) => {

 	if (login.value.trim()=="" || pwd.value.trim()=="") {


 		event.preventDefault();


 		erreur1.innerHTML= "Veillez remplir ce champs ";
 		erreur2.innerHTML= "Veillez remplir ce champs";
        
        erreur1.style.color='red';
        erreur2.style.color='red';

      if (!(login.value.trim()=="")) {
      	erreur1.innerHTML= "";
        
        if (login.value.length<5) {
          erreur1.innerHTML="Le login doit comporter au moins 5 caractères";
        }

      }

      if (!(pwd.value.trim()=="")) {
      	erreur2.innerHTML= "";
        if (pwd.value.length<3) {
          erreur2.innerHTML="Le mot de passe doit comporter au moins 3 caractères";
        }
      }

    

 	}

   

    
        
            });
       






