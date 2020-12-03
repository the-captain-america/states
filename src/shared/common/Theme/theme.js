const siteBasefontSize = 16;

export const asRem = fontSize =>
  `${parseFloat(fontSize) / siteBasefontSize}rem`;

export const asEm = (fontSize, baseSize = siteBasefontSize) =>
  `${parseFloat(fontSize) / parseFloat(baseSize)}em`;

export const getSpacing = level => level * 16;

export const convertHex = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
};

// This output darker/lighten shade of a hex colour
// - hex: base colour in hex (with hash)
// - lum: precentage in dicimal formate. +ve for lighter shade and -ve for darker shade.
export const colorLuminance = (color, lum = 0) => {
  const luminanceCalculation = value => {
    const result = Math.round(
      Math.min(Math.max(0, value + value * lum), 255),
    ).toString(16);

    return result.length < 2 ? `0${result}` : result;
  };

  const getHexArray = value => {
    const hexArray = value.replace(/[^0-9a-f]/gi, '').split('');

    if (hexArray.length < 6) {
      return [
        hexArray[0],
        hexArray[0],
        hexArray[1],
        hexArray[1],
        hexArray[2],
        hexArray[2],
      ];
    } else {
      return hexArray;
    }
  };

  const hex = getHexArray(color);

  const getRgbLum = startIndex => {
    const rgb = parseInt(hex[startIndex] + hex[startIndex + 1], 16);
    const lumRgb = luminanceCalculation(rgb);

    return lumRgb;
  };

  return `#${getRgbLum(0)}${getRgbLum(2)}${getRgbLum(4)}`;
};

const theme = {
  font: {
    primary: `'IBM Plex Sans', sans-serif`,
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  border: {
    defaultRadius: '7px',
    basic: '1px solid #dbdbdb',
  },
  button: {
    weight: 600,
    defaultSize: 'xlarge',
  },
  mq: {
    sm: 376,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  shadow: {
    primary: '0px 2px 2px 0px rgba(28, 17, 44, .15)',
    secondary: '0px 4px 14px 0px rgba(28, 17, 44, .10)',
  },
  colors: {
    orange: '#EF6C4D',
    grapefruit: '#EB3D2B',
    blueberry: '#5186EC',
    passionfruit: '#6C20CC',
    grape: '#BE8BFF',
    charcoal: '#1B1A29',
    ocean: '#1D2A43',
    greyXXXDark: '#5d646f',
    greyXXDark: '#8B8E94',
    greyXDark: '#B3B6BC',
    grey: '#BEC2CF',
    greyLight: '#D7DAE4',
    greyXLight: '#EDEEEF',
    greyXXLight: '#F6F5FC',
  },
};

export default theme;
