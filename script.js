function mostrarInfo(asignatura) {
  const info = {
    comunicacion: "Asignatura centrada en el desarrollo de habilidades orales y escritas fundamentales para la formación académica y profesional del psicólogo.",
    sociales: "Estudia los procesos sociales básicos, como la socialización, la identidad y la cultura, en relación con el comportamiento humano.",
    filosofia: "Propone una reflexión sobre los fundamentos filosóficos y políticos que sustentan las teorías psicológicas."
  };

  document.getElementById("infoAsignatura").innerHTML = `<p>${info[asignatura]}</p>`;
}
