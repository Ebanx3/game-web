// type Race = {
//     id:string,
//     name:string;
// }

interface Props {
    race:string,
    sex:"male" | "female" | null
}
export default function CharacterPreview({ race, sex }:Props) {
  const imagePath = `/races/${race}_${sex}.png`

  return (
    <div className="mt-6 text-center">
      <img src={imagePath} alt={`${race} ${sex}`} className="mx-auto size-56 object-contain border border-gray-700" />
      {/* <p className="text-sm mt-2">Previsualización: {race} ({sex === 'male' ? 'Masculino' : 'Femenino'})</p> */}
    </div>
  )
}
