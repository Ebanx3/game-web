import { useEffect } from "react";

interface Props {
  message: string;
  setMessage: (s: string) => void;
}

export const AlertError = ({ message, setMessage }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  });
  return <span className="absolute bg-red-700 p-2 text-white text-sm font-medium whitespace-pre-line max-w-[80%]">{message}</span>;
}
