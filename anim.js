// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm heavy", time: 12 },
  { text: "I'm by your side", time: 17 },
  { text: "Forget me 'cause I know what I need", time: 22 },
  { text: "Like a loser like me could be fine", time: 27 },
  { text: "I'm heavy", time: 34 },
  { text: "Alone inside", time: 39 },
  { text: "Don't tell me what I want, what I need", time:  44},
  { text: "Like a loser like me will be fine", time: 49 },
  { text: "Maybe I'm living in my head", time: 55 },
  { text: "Maybe I'm living to pretend", time: 60 },
  { text: "Maybe I wanna stay in bed", time: 65 },
  { text: "Far from the weight of the world in my hands", time: 67 },
  { text: "Cause they don't understand", time: 73 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);