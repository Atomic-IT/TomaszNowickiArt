const imageNames: string[] = [
  'glacier',
  'circle',
  'nocturne',
  'in-the-clouds',
  'foggy-portal',
  'in-the-air',
  'castle-tree',
  'spire',
  'hovering-pyramid',
  'pyramid',
  'floating-pyramid',
  'mystical-pyramid',
  'fire-walk-with-me',
  'ink-flood',
  'enormous-loneliness',
  'weeping-willow',
  'surreal-tree',
  'barrens',
  'without-title-2',
  'frozen-tree',
  'tower',
  'without-title-1',
  'uroboros',
  'dragon-hunting',
]

export const paintings = imageNames.map((name: string) => ({
  source: `img/gallery/${name}.webp`,
  alt: `${name.replace(/-/g, ' ')} painting`,
}))