// CharacterSelection.tsx
import { useState } from 'react'
import { RACES, SEXES, type Genre } from './races'
import CharacterPreview from './PrevistaPersonaje'
import { motion } from 'framer-motion'
import texturaFondo from '../../assets/fondo2.png'
import { useEscena } from '../../hooks/useEscena'

export const ElegirPersonaje = ()=> {
  const [selectedRace, setSelectedRace] = useState<string | null>(null)
  const [selectedSex, setSelectedSex] = useState<Genre>(null)

  const { cambiarEscena} = useEscena();

  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen max-w-[600px] mx-auto bg-cover bg-center flex flex-col justify-center items-center gap-4 px-4 text-white"
      style={{ backgroundImage: `url(${texturaFondo})` }}
    >
      <h2 className="text-xl font-bold text-center">Elegí tu linaje</h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {RACES.map((race) => (
          <button
            key={race.id}
            onClick={() => setSelectedRace(race.id)}
            className={`border rounded-lg p-2 text-center bg-white/10 ${
              selectedRace === race.id ? 'border-yellow-500' : 'border-gray-700'
            }`}
          >
            <img src={race.icon} alt={race.name} className="mx-auto size-12 object-contain" />
            <span className="text-sm">{race.name}</span>
          </button>
        ))}
      </div>

      {selectedRace && (
        <>
          <h3 className="text-lg font-semibold">Elegí sexo</h3>
          <div className="flex gap-4">
            {SEXES.map((sex) => (
              <button
                key={sex}
                onClick={() => setSelectedSex(sex)}
                className={`px-4 py-2 rounded ${
                  selectedSex === sex ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'
                }`}
              >
                {sex === 'male' ? 'Masculino' : 'Femenino'}
              </button>
            ))}
          </div>
        </> 
      )}

      {selectedRace && selectedSex && (
        <>
        <CharacterPreview race={selectedRace} sex={selectedSex} />
        <button className=' bg-slate-800 p-2' onClick={()=> cambiarEscena('intro')}>Confirmar</button>
        </>

      )}
    </motion.div>
  )
}
