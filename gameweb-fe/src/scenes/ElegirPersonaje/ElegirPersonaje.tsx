import { useState } from "react";
import { motion } from "framer-motion";
import KaelImg from "../../assets/kael.png";
import TharaImg from "../../assets/thara.png";
import NiloImg from "../../assets/nilo.png";
import fondo2 from "../../assets/fondo2.png";

const characters = [
  {
    id: "kael",
    name: "Kael",
    image: KaelImg,
    description: `Exiled from the crystal sanctum, Kael wanders with memories not his own.`,
    traits: ["Teleportation", "Memory Echo", "Psychic Resistance"],
  },
  {
    id: "thara",
    name: "Thara",
    image: TharaImg,
    description: `Raised at the edge of worlds, Thara guards the threshold between realms.`,
    traits: ["Spectral Wall", "Echo Strike", "Shield Bond"],
  },
  {
    id: "nilo",
    name: "Nilo",
    image: NiloImg,
    description: `Born of forest and spirit, Nilo seeks to restore the broken bond.`,
    traits: ["Root Snare", "Animal Whisper", "Natural Regeneration"],
  },
];

export const ElegirPersonaje = ({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      className="h-screen max-w-[600px] m-auto flex flex-col gap-4 items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${fondo2})` }}
    >
      <h1 className="text-3xl mb-6 font-pixel">Choose your path</h1>

      {characters.map((char) => (
        <motion.div
          key={char.id}
          whileHover={{ scale: 1.05 }}
          className={`border-2 rounded-lg p-4 cursor-pointer transition flex ${
            selected === char.id ? "border-cyan-400" : "border-gray-700"
          }`}
          onClick={() => {
            setSelected(char.id);
            onSelect(char.id);
          }}
        >
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-36 object-contain mb-2"
          />
          <div>
            <h2 className="text-xl font-bold mb-1">{char.name}</h2>
            <p className="text-sm mb-2">{char.description}</p>
            <ul className="text-xs list-disc pl-4">
              {char.traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

      {selected && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded font-bold"
          onClick={() => onSelect(selected)}
        >
          Confirm {characters.find((c) => c.id === selected)?.name}
        </motion.button>
      )}
    </motion.div>
  );
};
