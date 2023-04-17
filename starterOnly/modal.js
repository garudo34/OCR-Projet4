function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ISSUE 1
// DOM element
const modalCloseButton = document.querySelector(".close");
// close modal event
modalCloseButton.addEventListener("click", closeModal);

// fonction de fermeture de la modal

function closeModal() {
  modalbg.style.display = "none";
  /* on s'assure que le formulaire réapparaisse après avoir fermé la modal 
   une fois le formulaire validé pour ne pas rester sur le message de validation */
  document.querySelector(".modal-body").style.display = "block";
  document.querySelector(".modal-confirmation").style.display = "none";
}

// ISSUE 2 & 3

// check if a field is not empty
const isRequired = (value) => {
  return value === '' ? false : true;
}

// check if input value is at least 2 characters
const checkValueLength = (value) => {
  return value.trim().length < 2 ? false : true;
}

// check email content
const validateEmail = (email) => {
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return String(email).trim().toLowerCase().match(mailformat);
}

const checkFirstname = () => {
  let valid = false;
  const firstNameElement = document.getElementById("first");
  let firstNameValue = firstNameElement.value.trim();

  if (!isRequired(firstNameValue)) {
    showError(firstNameElement, "Veuillez renseigner votre prénom.");
  } else if (!checkValueLength(firstNameValue)) {
    showError(firstNameElement, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    showSuccess(firstNameElement);
    valid = true;
  }
  return valid;
}


const checkLastname = () => {
  let valid = false;
  const lastNameElement = document.getElementById("last");
  let lastNameValue = lastNameElement.value.trim();

  if (!isRequired(lastNameValue)) {
    showError(lastNameElement, "Veuillez renseigner votre nom.");
  } else if (!checkValueLength(lastNameValue)) {
    showError(lastNameElement, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    showSuccess(lastNameElement);
    valid = true;
  }
  return valid;
}

const checkEmail = () => {
  let valid = false;
  const emailElement = document.getElementById("email");
  let emailValue = emailElement.value.trim();

  if (!isRequired(emailValue)) {
    showError(emailElement, "Veuillez renseigner votre email.");
  } else if (!validateEmail(emailValue)) {
    showError(emailElement, "Vous devez renseigner un email valide.");
  } else {
    showSuccess(emailElement);
    valid = true;
  }
  return valid;
}

const checkBirthdate = () => {
  let valid = false;
  const birthdateElement = document.getElementById("birthdate");
  let birthdateValue = birthdateElement.value;

  if (!isRequired(birthdateValue)) {
    showError(birthdateElement, "Vous devez entrer votre date de naissance.");
  } else {
    showSuccess(birthdateElement);
    valid = true;
  }
  return valid;
}


const checkQuantity = () => {
  let valid = false;
  const quantityElement = document.getElementById("quantity");
  let quantityValue = quantityElement.value;

  if (!isRequired(quantityValue)) {
    showError(quantityElement, "Vous devez renseigné le nombre de tournois auxquels vous avez participé.")
  } else {
    showSuccess(quantityElement);
    valid = true;
  }
  return valid;
}

const checkLocation = () => {
  let valid = false;
  const locationElement = document.querySelector('input[name="location"]');
  let getSelectedValue = document.querySelector('input[name="location"]:checked');

  if (getSelectedValue === null) {
    showError(locationElement, "Vous devez choisir une option.");
  } else {
    showSuccess(locationElement);
    valid = true;
  }
  return valid;
}

const checkTerms = () => {
  let valid = false;
  const termsElement = document.querySelector('#checkbox1');
  const termsValue = document.querySelector('input[id="checkbox1"]:checked');

  if (!termsValue) {
    showError(termsElement, "Vous devez accepter les termes et conditions.");
  } else {
    showSuccess(termsElement);
    valid = true;
  }
  return valid;
}

const showError = (input, message) => {
  // on récupère l'élèment parent de l'input (la div avec la classe formData)
  const formField = input.parentElement;
  // on affecte le message d'erreur en tant que data-attribute de l'element parent (le css se charge de l'afficher)
  formField.dataset.error = message;
  formField.dataset.errorVisible = true;
};

const showSuccess = (input) => {
  // on récupère l'élèment parent de l'input (la div avec la classe formData)
  const formField = input.parentElement;
  // on efface le message d'erreur
  formField.dataset.error = '';
  formField.dataset.errorVisible = false;
}

let form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isFirstnameValid = checkFirstname(),
    isLastnameValid = checkLastname(),
    isEmailValid = checkEmail(),
    isBirthdateValid = checkBirthdate(),
    isQuantityValid = checkQuantity(),
    isLocationValid = checkLocation(),
    isTermsValid = checkTerms();

  // on vérifie que toutes les conditions sont respectées
  let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isTermsValid;
  if (isFormValid) {
    // Issue 4
    // afficher le message de validation du formulaire
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".modal-confirmation").style.display = "block";
  }
});

// on désactive le bouton de soumission par défaut tant que le formulaire n'est pas entièrement rempli
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.disabled = true;

// on affiche les erreurs à la volée lorsqu'on rempli le formulaire
form.addEventListener('input', function (e) {
  switch (e.target.id) {
    case 'first':
      checkFirstname();
      break;
    case 'last':
      checkLastname();
      break;
    case 'email':
      checkEmail();
      break;
    case 'birthdate':
      checkBirthdate();
      break;
    case 'quantity':
      checkQuantity();
      break;
    case 'location1', 'location2', 'location3', 'location4', 'location5', 'location6':
      checkLocation();
      break;
    case 'checkbox1':
      checkTerms();
      break;
  }

  // si tous les champs sont correctement rempli, on donne l'accès au bouton de soumission
  let isFormValid = checkAllInput();
  if (isFormValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const checkAllInput = () => {
  isValid = false;
  // on vérifie que toutes les conditions sont respectées
  if (
    isRequired(document.getElementById("first").value.trim()) &&
    checkValueLength(document.getElementById("first").value.trim()) &&
    isRequired(document.getElementById("last").value.trim()) &&
    checkValueLength(document.getElementById("last").value.trim()) &&
    isRequired(document.getElementById("email").value.trim()) &&
    validateEmail(document.getElementById("email").value.trim()) &&
    isRequired(document.getElementById("birthdate").value) &&
    isRequired(document.getElementById("quantity").value) &&
    document.querySelector('input[name="location"]:checked') &&
    document.querySelector('input[id="checkbox1"]:checked')
  ) {
    isValid = true;
  }
  console.log(isValid)
  return isValid;
}

// ISSUE X
// DOM element
const modalCloseRedButton = document.querySelector(".btn-close");
// close modal event
modalCloseRedButton.addEventListener("click", closeModal);