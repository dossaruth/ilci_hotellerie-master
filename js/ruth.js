function byId(id) {
    return document.getElementById(id);
}

let price  = byId("prix");
let superficie = byId("superficie");

let lits  = byId("nombre_lits");
let nbp = byId("nombre_pers");

let desc  = byId("descript");


let add  = byId("add");


let pic= byId("pic");

console.log(pic);






add.addEventListener('click', (e) => {

 	
 if (price.value=="" || superficie.value=="" 
 	|| lits.value=="" || nbp.value=="" 
 	|| desc.value.trim()=="") {

    e.preventDefault();	


erreur1.innerHTML= "Veillez remplir ce champs ";
 		erreur2.innerHTML= "Veuillez remplir ce champs";
 		erreur3.innerHTML= "Veuillez remplir ce champs ";
 		erreur4.innerHTML= "Veuillez remplir ce champs";
 		erreur5.innerHTML= "Veuillez remplir ce champs ";
 		


      if (!(price.value=="")) {
      	erreur1.innerHTML= "";

      }

      if (!(superficie.value=="")) {
      	erreur2.innerHTML= "";
      }
      
      if(!(lits.value=="")){
      	erreur3.innerHTML="";
      }


      if (!nbp.value=="" ) {
      	erreur4.innerHTML="";
      }


    if (!(desc.value.trim()=="")) {
    	erreur5.innerHTML="";
    	if (desc.value.length <30) {
    		erreur5.innerHTML="Ce champs doit comporter au moins 30 caractères";
    	}

    }



 }	



            });
