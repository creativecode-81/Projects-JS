const username = document.querySelector(".user"),
  password = document.querySelector('.password'),
  logBtn = document.querySelector(".btn_Login"),
  error = document.querySelector(".error"),
  images = document.querySelectorAll('.main img');


// Obtener el elemento del año actual
let currentYearElement = document.getElementById("currentYear");

// Obtener el año actual
let currentYear = new Date().getFullYear();

// Asignar el año actual al elemento del año
currentYearElement.textContent = currentYear;

/* LOGIN */

const validateInputs = () => {
  const valid = username.value.length > 3 && password.value.length > 3;
  logBtn.disabled = !valid;
};

const login = () => {
  if (username.value === "Fran" && password.value === "F/1245*") {
    error.innerHTML = "¡Ingresó con Éxito! Lástima que aún no se ha iniciado sesión";
  }
  else {
    error.innerHTML = "Contraseña es incorrecta. Vuelva a verificar.";
  }
};

username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);
logBtn.addEventListener('click', login);


/* Slider de Images */

setInterval(() => {
  changeImage();
}, 5000);

let i = 0;

const changeImage = () => {
  const { length } = images;
  const currentImage = images[i];
  currentImage.classList.remove('active');
  const nextImage = i < length - 1 ? images[i + 1] : images[0];
  nextImage.classList.add('active');
  i = i < length - 1 ? i + 1 : 0;
};






