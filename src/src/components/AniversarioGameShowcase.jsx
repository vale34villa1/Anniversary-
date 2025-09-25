export default function AniversarioGameShowcase() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-600 mb-8">
        🎬 Nuestro Mundo de Películas y Juegos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Romance */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-pink-500">💘 Romance</h3>
          <p className="mt-2 text-gray-600">Aquí puedes poner fotos o un memory game.</p>
        </div>

        {/* Suspenso */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800">🕵️ Suspenso</h3>
          <p className="mt-2 text-gray-600">Un puzzle misterioso con tu toque personal.</p>
        </div>

        {/* Ciencia Ficción */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-blue-500">🚀 Ciencia Ficción</h3>
          <p className="mt-2 text-gray-600">Un clicker futurista con mensajes románticos.</p>
        </div>

        {/* Superhéroes */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-red-500">🦸 Superhéroes</h3>
          <p className="mt-2 text-gray-600">Juego de acción donde siempre ganas por amor.</p>
        </div>
      </div>

      {/* Ajedrez */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-purple-700">♟️ Ajedrez del Amor</h3>
        <p className="mt-2 text-gray-600">
          Aquí más adelante podrás jugar ajedrez con historias románticas.
        </p>
      </div>
    </div>
  );
}
