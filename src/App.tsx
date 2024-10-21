"use client";
import { useState } from "react";
import Confetti from "react-confetti"; // Importa el componente de confeti

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // Estado para manejar el fade out
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Estás segura?",
      "No me rendiré, pa",
      "Mi so :'v",
      "¡ES UN CONCIERTO DE BMTH!",
      "¿Sim?",
      "¡POOOOR FAVOR!",
      "Mimimimi",
      "Triste triston...",
      "Ok, me rindo... ¿o no?",
      "Sin presiones xd",
      "Piénsalo bien jsj",
      "Bueno... Lo intenté...",
      "Pero no lo suficiente",
      "Mira la pagina, ya se daño alv",
      "¿De verdad no? Andale pa",
      "En serio, será divertido! jiji",
      "Firma Shrek, Firma!!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setConfettiVisible(true); // Muestra el confeti
    setFadeOut(false); // Asegúrate de que no esté en fade out inicialmente

    // Configura el fade out después de 3 segundos
    setTimeout(() => {
      setFadeOut(true); // Activa el fade out
      setTimeout(() => {
        setConfettiVisible(false); // Oculta el confeti después de que termine el fade out
      }, 1000); // Tiempo que coincide con la duración del fade out
    }, 3000); // Tiempo antes de iniciar el fade out
  };

  return (
    <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] flex h-screen w-screen flex-col items-center justify-center">
      {confettiVisible && (
        <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Confetti /> {/* Muestra el confeti si es visible */}
        </div>
      )}

      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-5xl font-bold"> {/* Aumentado de text-4xl a text-5xl */}
            ¡Soo essss! ¡Vamos a ver a Bring Me The Horizon! 🤘💀
          </div>
          <div className="my-4 text-5xl font-bold"> {/* Aumentado de text-4xl a text-5xl */}
            Sigue aquí abajo, para poder organizar to'
          </div>
          <a
            href="https://chat.whatsapp.com/invitacion_grupo" // reemplaza con tu enlace
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded bg-blue-500 px-6 py-3 text-lg font-bold text-white hover:bg-blue-700" // Aumentado py de 2 a 3
          >
            Continuar
          </a>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="my-4 text-5xl text-center"> {/* Aumentado de text-4xl a text-5xl */}
            ¿Te gustaría ir al concierto de Bring Me The Horizon conmigo?
          </h1>
          <div className="flex items-center justify-center">
            <button
              className={`mr-4 cursor-pointer transition-all bg-green-500 text-white px-8 py-3 rounded-lg // Aumentado px de 6 a 8 y py de 2 a 3
                border-green-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              ¡Sí!
            </button>
            <button
              onClick={handleNoClick}
              className="mr-4 cursor-pointer transition-all bg-red-500 text-white px-8 py-3 rounded-lg // Aumentado px de 6 a 8 y py de 2 a 3
                border-red-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
