import { useEffect, useState } from 'react';

interface TextoAnimadoProps {
  texto: string;
  velocidad?: number; // milisegundos entre caracteres
  onCompleto?: () => void; // callback opcional
}

export const TextoAnimado: React.FC<TextoAnimadoProps> = ({
  texto,
  velocidad = 30,
  onCompleto,
}) => {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setVisible((prev) => prev + texto[i]);
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        if (onCompleto) onCompleto();
      }
    }, velocidad);

    return () => clearInterval(intervalo);
  }, [texto, velocidad, onCompleto]);

  return <p className="whitespace-pre-line text-white">{visible}</p>;
};
