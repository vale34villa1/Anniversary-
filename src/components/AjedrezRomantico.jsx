import { useState } from "react";

export default function AjedrezRomantico() {
  const [mensajes, setMensajes] = useState([
    "Hace 2 años empezó nuestra historia 💕",
    "Cada día contigo es un regalo 🎁",
    "Eres mi rey en este tablero y en la vida 👑",
    "Nuestro amor siempre encuentra el mejor movimiento ✨",
    "Checkmate al destino: juntos por siempre 💖"
  ]);
  const [current, setCurrent] = useState(0);

  const siguienteMensaje = () => {
    if (current < mensajes.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0); // Reinicia la historia
    }
  };

  const renderTablero = () => {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const isDark = (i + j) % 2 === 1;
        squares.push(
          <div
            key={`${i}-${j}`}
            className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ${
              isDark ? "bg-purple-400" : "bg-pink-200"
            }`}
          >
            {/* ♥ en las casillas claras */}
            {!isDark && <span className="text-pink-600">♥</span>}
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">♟️ Ajedrez del Amor</h2>

      {/* Tablero */}
      <div className="grid grid-cols-8 border-4 border-purple-700 rounded-lg shadow-xl">
        {renderTablero()}
      </div>

      {/* Historia */}
      <div className="mt-6 p-4 bg-white rounded-2xl shadow-lg max-w-md text-center">
        <p className="text-lg text-gray-700 italic">{mensajes[current]}</p>
        <button
          onClick={siguienteMensaje}
          className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
        >
          Siguiente ❤️
        </button>
      </div>
    </div>
  );
}
