import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function AjedrezRomantico() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");
  const [mensajeIndex, setMensajeIndex] = useState(0);

  const mensajes = [
    "💖 Hace 2 años empezó nuestra historia...",
    "👫 Cada jugada contigo me acerca más a ti.",
    "👑 Eres mi rey en el tablero y en la vida.",
    "✨ Nuestro amor siempre encuentra el mejor movimiento.",
    "💕 Checkmate al destino: siempre juntos."
  ];

  const safeGameMutate = (modify) => {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setFen(newGame.fen());
  };

  const onDrop = (sourceSquare, targetSquare) => {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
    });

    if (move === null) return false;

    // Avanza en los mensajes románticos
    setMensajeIndex((prev) => (prev + 1) % mensajes.length);

    return true;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">♟️ Ajedrez del Amor</h2>

      {/* Tablero interactivo */}
      <div className="rounded-lg shadow-xl border-4 border-pink-400">
        <Chessboard
          position={fen}
          onPieceDrop={onDrop}
          boardWidth={350}
          customBoardStyle={{
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          }}
          customDarkSquareStyle={{ backgroundColor: "#a855f7" }} // morado
          customLightSquareStyle={{ backgroundColor: "#fbcfe8" }} // rosado
        />
      </div>

      {/* Historia romántica */}
      <div className="mt-6 p-4 bg-white rounded-2xl shadow-lg max-w-md text-center">
        <p className="text-lg text-gray-700 italic">
          {mensajes[mensajeIndex]}
        </p>
      </div>
    </div>
  );
}
