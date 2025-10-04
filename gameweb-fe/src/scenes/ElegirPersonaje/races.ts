// races.ts
export const RACES = [
  { id: 'vesperian', name: 'Vesperiano', icon: '/icons/vesperian.png' },
  { id: 'sylvanborn', name: 'Sylvanborn', icon: '/icons/sylvanborn.png' },
  { id: 'ironblood', name: 'Ironblood', icon: '/icons/ironblood.png' },
  { id: 'ashari', name: 'Ashari', icon: '/icons/ashari.png' },
  { id: 'glacien', name: 'Glacien', icon: '/icons/glacien.png' },
  { id: 'ferrumite', name: 'Ferrumita', icon: '/icons/ferrumite.png' },
  { id: 'thalari', name: 'Thal’ari', icon: '/icons/thalari.png' },
]

// sexes.ts
export type Genre = 'male' | 'female' | null
export const SEXES:Genre[] = ['male', 'female']