export type btnDesign = {
  border: null | string
  body: null | string
}

export const chooseBtnDesign = (btnType: 'primary' | 'disabled'): btnDesign => {
  const color: btnDesign = {
    border: null,
    body: null
  }

  switch (btnType) {
    case 'disabled':
      color.border = 'bg-brown-900 border-b-brown-900'
      color.body = 'bg-brown-600 cursor-not-allowed'
      break;
    default: {
      color.border = 'bg-chess-green-900 border-b-chess-green-900'
      color.body = 'bg-chess-green-800 active:translate-y-[2px] cursor-pointer'
    }
  }

  return color
}