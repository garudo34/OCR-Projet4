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

const checkValue = (value) => {
  if (value.length < 2) {
    return false;
  }
  return true;
}

const validateEmail = (email) => {
  const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return String(email).toLowerCase().match(mailformat);
}

const checkFirstname = () => {
  console.log('toto')
  const firstNameElement = document.getElementById("first");
  firstNameValue = firstNameElement.value;
  if (!checkValue(firstNameValue)) {
    alert("Valeur requise!");
  }
}

const checkLastname = () => {
  console.log('toto')
  const lastNameElement = document.getElementById("last");
  lastNameValue = lastNameElement.value;
  if (!checkValue(lastNameValue)) {
    alert("Valeur requise!");
  }
}

const checkEMail = () => {
  console.log('toto')
  const emailElement = document.getElementById("email");
  emailValue = emailElement.value;
  if (!validateEmail(emailValue)) {
    alert("Email incorrect");
  }
}

const checkNumber = () => {
  console.log('toto')
  const quantityElement = document.getElementById("quantity");
  quantityValue = quantityElement.value;
  if (isNaN(quantityValue)) {
    alert("Nombre incorrect");
  }
}

const checkLocation = () => {
  console.log('toto')
  const getSelectedValue = document.querySelector('input[name="location"]:checked');
  if (getSelectedValue === null) {
    alert("Il faut choisir une ville!");
  }
}

const checkTerms = () => {
  console.log('toto')
  if (!document.getElementById("checkbox1").checked) {
    alert("Vous devez acceptez les conditions")
  }
}

const validate = (e) => {
  e.preventDefault();
  checkFirstname();
  checkLastname();
  checkEMail();
  checkNumber();
  checkLocation();
  checkTerms();
}

const form = document.getElementsByName('reserve');
console.log(form)
form[0].addEventListener('submit', validate);
