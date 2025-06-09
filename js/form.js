document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          popup.classList.add("show");
          setTimeout(() => popup.classList.remove("show"), 4000);
        } else {
          alert("Ocurrió un error al enviar. Por favor, intentá nuevamente.");
        }
      })
      .catch(() => {
        alert("Error de red. Por favor, revisá tu conexión.");
      });
  });
});
