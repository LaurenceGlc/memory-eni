
    //recup valeur saisie par le use 1)cibler le formulaire
    let form = document.getElementById('myForm');

    //recup les valeurs saisies par le user
    let recupInputName = document.getElementById('inputNom');
    let recupEmail = document.getElementById('inputEmail');
    let recupMdp = document.getElementById('inputMdp');
    let recupMdpVerif = document.getElementById('inputMdpVerif');
  
  // Evenements
  form.addEventListener('input', e=>{
  e.preventDefault();

  form_verify();
})

 // Fonctions
 function form_verify() {

  // Obtenir toutes les valeurs des inputs
  let nameValue = recupInputName.value.trim();
  let emailValue = recupEmail.trim();
  let mdpValue = recupMdp.value.trim();
  let mdpVerifValue = recupMdpVerif.value.trim();
  
  // Username verif
  if (userValue === "") {
    let message ="Username ne peut pas être vide";
    setError(recupInputName,message);

  }else{
      let letterNum = nameValue.length;
      if (letterNum < 3) {
          let message ="Le pseudo doit contenir au moins 3 caractères";
      setError(recupInputName,message)

      } else {
      setSuccess(recupInputName);
      }
  }}