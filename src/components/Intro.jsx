import { useState } from "react";

export default function Intro({ onContinue }) {
  const [showVideo, setShowVideo] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "40%" });

  const moveNo = () => {
    const randTop = Math.floor(Math.random() * 80) + 10;
    const randLeft = Math.floor(Math.random() * 80) + 10;
    setNoPos({ top: `${randTop}%`, left: `${randLeft}%` });
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center p-4">
      {!showVideo ? (
        <>
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 drop-shadow-lg animate-pulse">
            💖 Feliz 2 años de aniversario amor 💖
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700">
            Mi amor, ¿quieres saber el regalo que te quiero regalar?
          </p>
          <div className="relative w-full h-40 mt-6">
            <button
              onClick={() => setShowVideo(true)}
              className="px-6 py-3 bg-pink-500 text-white rounded-2xl text-lg shadow-lg hover:bg-pink-600 transition"
            >
              Sí 💕
            </button>
            <button
              onMouseEnter={moveNo}
              style={{ position: "absolute", top: noPos.top, left: noPos.left }}
              className="px-6 py-3 bg-gray-400 text-white rounded-2xl text-lg shadow-lg"
            >
              No 🥺
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <video
            src="/video.mp4"
            controls
            className="rounded-2xl shadow-lg w-full max-w-lg"
          />
          <button
            onClick={onContinue}
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-2xl shadow-lg hover:bg-purple-600 transition"
          >
            Continuar ➡️
          </button>
        </div>
      )}
    </div>
  );
}
