import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
