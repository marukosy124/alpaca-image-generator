export enum EType {
  DIRECTORY = 'DIRECTORY',
  ITEM = 'ITEM'
}
export const alpacaData: App.IAlpacaData[] = [
  {
    directory: 'accessories',
    selected: true,
    items: [
      { name: 'earings', selected: true },
      { name: 'flower', selected: false },
      { name: 'glasses', selected: false },
      { name: 'headphone', selected: false },
    ]
  },
  {
    directory: 'backgrounds',
    selected: false,
    items: [
      { name: 'blue50', selected: true },
      { name: 'blue60', selected: false },
      { name: 'blue70', selected: false },
      { name: 'darkblue30', selected: false },
      { name: 'darkblue50', selected: false },
      { name: 'darkblue70', selected: false },
      { name: 'green50', selected: false },
      { name: 'green60', selected: false },
      { name: 'green70', selected: false },
      { name: 'grey40', selected: false },
      { name: 'grey70', selected: false },
      { name: 'grey80', selected: false },
      { name: 'red50', selected: false },
      { name: 'red60', selected: false },
      { name: 'red70', selected: false },
      { name: 'yellow50', selected: false },
      { name: 'yellow60', selected: false },
      { name: 'yellow70', selected: false },
    ]
  },
  {
    directory: 'ears',
    selected: false,
    items: [
      { name: 'default', selected: true },
      { name: 'tilt-backward', selected: false },
      { name: 'tilt-forward', selected: false },
    ]
  },
  {
    directory: 'eyes',
    selected: false,
    items: [
      { name: 'angry', selected: false },
      { name: 'default', selected: true },
      { name: 'naughty', selected: false },
      { name: 'panda', selected: false },
      { name: 'smart', selected: false },
      { name: 'star', selected: false },
    ]
  },
  {
    directory: 'hair',
    selected: false,
    items: [
      { name: 'bang', selected: false },
      { name: 'curls', selected: false },
      { name: 'default', selected: true },
      { name: 'elegant', selected: false },
      { name: 'fancy', selected: false },
      { name: 'quiff', selected: false },
      { name: 'short', selected: false },
    ]
  },
  {
    directory: 'leg',
    selected: false,
    items: [
      {
        name: 'bubble-tea',
        selected: false
      },
      { name: 'cookie', selected: false },
      { name: 'default', selected: true },
      { name: 'game-console', selected: false },
      { name: 'tilt-backward', selected: false },
      { name: 'tilt-forward', selected: false },
    ]
  },
  {
    directory: 'mouth',
    selected: false,
    items: [
      { name: 'astonished', selected: false },
      { name: 'default', selected: true },
      { name: 'eating', selected: false },
      { name: 'laugh', selected: false },
      { name: 'tongue', selected: false },
    ]
  },
  {
    directory: 'neck',
    selected: false,
    items: [
      { name: 'bend-backward', selected: false },
      { name: 'bend-forward', selected: false },
      { name: 'default', selected: true },
      { name: 'thick', selected: false },
    ]
  },
  {
    directory: 'nose',
    selected: false,
    items: [
      { name: 'nose', selected: true },
    ]
  },
]