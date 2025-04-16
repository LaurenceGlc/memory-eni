
    //recup valeur saisie par le use 1)cibler le formulaire
    let form = document.getElementById('myForm');

    //recup valeur saisie par le user
    let recupInputName = document.getElementById('inputName');
  
    //ecoute
    form.addEventListener('input', function(event) {
    
    let recupInputName = document.getElementById('inputName');
        




    //vérification
    function verifLength()
    {
        if (document.getElementById("inputName").value.length <= 3 )
        {
            alert("Attention : Votre pseudo doit contenir 3 lettres au minimum !");
            return false;
        }else {
          return true;
      
        }}
      

    /*if (inputName.value.trim().length < 4) {
        // Le nom doit avoir au minimum 3 caractères
        console.log('choisissez un pseudo contenant 3 lettre minimum');

    } else { 
        // Le nom doit avoir au minimum 3 caractères
        console.log('good');
   }})*/

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
    // Select the email input element by its name
    var email = document.getElementsByName("email")[0];
    // Call the validateEmail function and store the result
    var valid = validateEmail(email.value);
    // If the result is false, prevent the default submission and show an alert
    if (!valid) {
      event.preventDefault();
      alert("Please enter a valid email address");
    }
  })