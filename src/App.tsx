"use client";
import { useState } from "react";
import Confetti from "react-confetti";

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "Por favorrr",
      "Mi so :'v",
      "No seas malita pa",
      "¿Sim?",
      "¡POOOOR FAVOR!",
      "Mimimimi",
      "Triste triston...",
      "Ok, me rindo... ¿o no?",
      "Sin presiones xd",
      "Piénsalo bien jsj",
      "Se va a dañar la página",
      "Bueno... Lo intenté...",
      "Pero no lo suficiente",
      "Podemos jugar algo",
      "Somos los mejores 2 jugadores!",
      "¿De verdad no? Andale pa",
      "Podemos ir a un cocierto :o",
      "Firma Shrek, Firma!!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setConfettiVisible(true);
    setFadeOut(false);
    setCurrentSection(2);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setConfettiVisible(false);
      }, 1000);
    }, 3000);
  };

  const WelcomeSection = () => (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="my-4 text-5xl text-center">
          Camila
        </h1>
        <h2 className="my-4 text-2xl text-center">
          He escrito algo para ti.
        </h2>
        <div className="flex items-center justify-center">
          <a
            href="https://drive.google.com/drive/folders/1MY_pBlyLG5go9HrAQ7fex5LNI9dqBk3R?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 cursor-pointer transition-all bg-pink-500 text-white px-8 py-3 rounded-lg border-pink-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Leer.
          </a>

          <button
            onClick={() => setCurrentSection(1)}
            className="cursor-pointer transition-all bg-yellow-500 text-white px-8 py-3 rounded-lg border-yellow-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Ya la leí.
          </button>
        </div>
      </div>
    </div>
  );

  const ForgivenessSection = () => (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setCurrentSection(0)}
          className="cursor-pointer transition-all bg-gray-500 text-white px-4 py-2 rounded-lg border-gray-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Volver
        </button>
      </div>
      <img
        className="h-[200px]"
        src="https://i.pinimg.com/originals/87/f4/21/87f421ef84eef2c27b0ff23047270fbe.gif"
        alt="SnoopySorry"
      />
        <h2 className="my-4 text-2xl text-center">
        Entonces...
      </h2>
      <h1 className="my-4 text-5xl text-center">
        ¿Me perdonarías? :c
      </h1>
      <div className="flex items-center justify-center">
        <button
          className={`mr-4 cursor-pointer transition-all bg-green-500 text-white px-8 py-3 rounded-lg 
            border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
          style={{ fontSize: yesButtonSize }}
          onClick={handleYesClick}
        >
          Sí.
        </button>
        <button
          onClick={handleNoClick}
          className="cursor-pointer transition-all bg-red-500 text-white px-8 py-3 rounded-lg
            border-red-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          {noCount === 0 ? "No." : getNoButtonText()}
        </button>
      </div>
    </div>
  );

  const FinalSection = () => (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setCurrentSection(1)}
          className="cursor-pointer transition-all bg-gray-500 text-white px-4 py-2 rounded-lg border-gray-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Volver
        </button>
      </div>
      <img
        src="https://i.pinimg.com/originals/f4/7b/b4/f47bb487e55e54e9562a95d6e6206e35.gif"
        alt="SnoopyHug"
      />
      <div className="my-4 text-5xl font-bold">
        Graciaaas. &lt;3
      </div>
      <div className="my-4 text-5xl font-bold">
        Significa mucho para mí. &lt;3
      </div>
      <div className="my-4 text-5xl font-bold">
        ¿Te gustaría hablar un toque?
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://drive.google.com/drive/folders/1MY_pBlyLG5go9HrAQ7fex5LNI9dqBk3R?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 cursor-pointer transition-all bg-purple-500 text-white px-8 py-3 rounded-lg border-purple-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Tal vez.
        </a>
        <a
          href="https://chat.whatsapp.com/DfWyGynTBAn11qpOLiJX9p"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-all bg-emerald-500 text-white px-8 py-3 rounded-lg border-emerald-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Claro que sí.
        </a>
      </div>
    </div>
  );

  return (
    <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      {confettiVisible && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Confetti />
        </div>
      )}

      {currentSection === 0 && <WelcomeSection />}
      {currentSection === 1 && <ForgivenessSection />}
      {currentSection === 2 && <FinalSection />}
    </div>
  );
}