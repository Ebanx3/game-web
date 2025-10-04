// RaceIntro.tsx
import { useState } from 'react'
import { RACE_INTROS } from './Intros'

export const Intro = () => {
  const [textIndex, setTextIndex] = useState(0)
  const intro = RACE_INTROS[race]

  const handleNext = () => {
    if (textIndex < intro.length - 1) {
      setTextIndex(textIndex + 1)
    } else {
    //   onContinue()
    }
  }

  return (
    <div className="flex flex-col justify-between h-full p-6">
      <div className="text-sm text-gray-300 leading-relaxed">
        {intro[textIndex]}
      </div>

      <button
        onClick={handleNext}
        className="mt-6 self-end bg-yellow-500 text-black px-4 py-2 rounded"
      >
        {textIndex < intro.length - 1 ? 'Continuar' : 'Comenzar'}
      </button>
    </div>
  )
}
