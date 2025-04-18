document.addEventListener('DOMContentLoaded', () => {
  // Récupération des éléments du formulaire
  let form = document.getElementById('myForm');
  let recupInputName = document.getElementById('inputNom');
  let recupEmail = document.getElementById('inputEmail');
  let recupMdp = document.getElementById('inputMdp');
  let recupMdpVerif = document.getElementById('inputMdpVerif');

  // Événements
  form.addEventListener('input', () => {
    form_verify();
  });

  // Fonction
  function form_verify() {
    let nameValue = recupInputName.value.trim();
    let emailValue = recupEmail.value.trim();
    let mdpValue = recupMdp.value.trim();
    let mdpVerifValue = recupMdpVerif.value.trim();

  // Vérification du champ Username
    if (nameValue.length < 3) {
      let message ="Username doit avoir au moins 3 caractères";
      setError(recupInputName,message);
    
     } else {
      setSuccess(recupInputName);
      }}

  
  // Véification de l'email
  if (!email_verify(emailValue)){
    let message = "Email non valide";
    setError(recupEmail,message);

  }else{
    setSuccess(recupEmail);
}})


      function setError(elem,message) {
      let formControl = elem.parentElement;
      let small = formControl.querySelector('small');
      // Ajout du message d'erreur
      small.innerText = message
      // Ajout de la classe error
      formControl.className = "form-control error";
  }
  
  function setSuccess(elem) {
      let formControl = elem.parentElement;
      formControl.className ='form-control success'
  }


  function email_verify(recupEmail) {
    return "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$".test(recupEmail);
  }