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

// FERMETURE MODAL
// DOM element
const modalCloseButton = document.querySelector(".close");
// close modal event
modalCloseButton.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Vérification la validité du formulaire

// check input value is at least 2 characters
const checkValue = (value) => {
  if (value.trim().length < 2) {
    return false;
  }
  return true;
}

// check email content
const validateEmail = (email) => {
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return String(email).trim().toLowerCase().match(mailformat);
}

const checkFirstname = () => {
  const firstNameElement = document.getElementById("first");
  let firstNameValue = firstNameElement.value;
  let errorSpan = document.getElementById('error-firstname');
  if (!firstNameValue) {
    errorSpan.innerHTML = "Veuillez renseigner votre prénom.";
    errorSpan.style.color = 'red';
  } else if (!checkValue(firstNameValue)) {
    errorSpan.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

const checkLastname = () => {
  const lastNameElement = document.getElementById("last");
  let lastNameValue = lastNameElement.value;
  let errorSpan = document.getElementById('error-lastname');
  if (!lastNameValue) {
    errorSpan.innerHTML = "Veuillez renseigner votre nom.";
    errorSpan.style.color = 'red';
  } else if (!checkValue(lastNameValue)) {
    errorSpan.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

const checkEMail = () => {
  const emailElement = document.getElementById("email");
  let emailValue = emailElement.value;
  let errorSpan = document.getElementById('error-email');
  if (!validateEmail(emailValue)) {
    errorSpan.innerHTML = "Vous devez renseigner un email valide.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

const checkBirthDate = () => {
  const birthdateElement = document.getElementById("birthdate");
  let birthdateValue = birthdateElement.value;
  let errorSpan = document.getElementById('error-birthdate');
  if (!(birthdateValue)) {
    errorSpan.innerHTML = "Vous devez entrer votre date de naissance.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}


const checkQuantity = () => {
  const quantityElement = document.getElementById("quantity");
  let quantityValue = quantityElement.value;
  let errorSpan = document.getElementById('error-quantity');
  if (!(quantityValue)) {
    errorSpan.innerHTML = "Vous devez renseigné le nombre de tournois auxquels vous avez participé.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

const checkLocation = () => {
  const getSelectedValue = document.querySelector('input[name="location"]:checked');
  let errorSpan = document.getElementById('error-location');
  if (getSelectedValue === null) {
    errorSpan.innerHTML = "Vous devez choisir une option.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

const checkTerms = () => {
  let errorSpan = document.getElementById('error-checkbox');
  if (!document.getElementById("checkbox1").checked) {
    errorSpan.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorSpan.style.color = 'red';
  } else {
    errorSpan.innerHTML = "";
  }
}

let form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkFirstname();
  checkLastname();
  checkEMail();
  checkBirthDate();
  checkQuantity();
  checkLocation();
  checkTerms();
});