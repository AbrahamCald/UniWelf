const form = document.getElementById("loginForm");
const btn = document.getElementById("nextBtn");

const USER = "Psicologia";
const PASS = "Ingenieria";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    btn.innerHTML = "Verificando...";
    btn.style.opacity = "0.8";

    setTimeout(() => {
        if (usuario === USER && contrasena === PASS) {
            btn.innerHTML = "Acceso Correcto ✓";
            btn.style.background = "#16a380";

            setTimeout(() => {
                window.location.href = "presentacion.html";
            }, 1000);
        } else {
            btn.innerHTML = "Credenciales incorrectas";
            btn.style.background = "#c0392b";

            setTimeout(() => {
                btn.innerHTML = "Iniciar sesión";
                btn.style.opacity = "1";
                btn.style.background = "";
            }, 2000);
        }
    }, 1200);
});