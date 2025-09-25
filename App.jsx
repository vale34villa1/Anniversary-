import { useState } from "react";
import AniversarioGameShowcase from "./components/AniversarioGameShowcase";
import Intro from "./components/Intro";

export default function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center">
      {showMain ? (
        <AniversarioGameShowcase />
      ) : (
        <Intro onContinue={() => setShowMain(true)} />
      )}
    </div>
  );
}
