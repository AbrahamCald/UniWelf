// ================================
// LOGIN UNIWELL
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const btn = document.getElementById("nextBtn");

    function limpiarTexto(texto) {
        return texto
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const usuario = limpiarTexto(document.getElementById("usuario").value);
        const contrasena = limpiarTexto(document.getElementById("contrasena").value);

        btn.innerHTML = "Verificando...";
        btn.style.opacity = "0.8";
        btn.disabled = true;

        setTimeout(() => {

            if (
                usuario === "psicologia" &&
                contrasena === "ingenieria"
            ) {

                // ==========================
                // CREA LA SESIÓN
                // ==========================

                sessionStorage.setItem("uniwell_access", "granted");

                btn.innerHTML = "Acceso Correcto ✓";
                btn.style.background = "#16a380";

                setTimeout(() => {

                    window.location.replace("presentacion.html");

                }, 900);

            } else {

                btn.innerHTML = "Credenciales incorrectas";
                btn.style.background = "#c0392b";

                setTimeout(() => {

                    btn.innerHTML = "Iniciar sesión";
                    btn.style.background = "";
                    btn.style.opacity = "1";
                    btn.disabled = false;

                }, 1800);

            }

        }, 900);

    });

});