import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    highlight: '#44337A',
    background: '#171923',
    contrast: '#E2E8F0',
    complementary: '#90CDF4',
  },
  style: {
    global: {
      body: {
        bg: mode('#E2E8F0', '#171923'),
        color: mode('#171923', '#E2E8F0'),
      },
    },
  },
};

const theme = extendTheme({ config });

export default theme;
