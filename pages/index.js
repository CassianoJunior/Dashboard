/* eslint-disable react/function-component-definition */

import { IconButton, Spacer, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import MyHead from '../src/components/MyHead';
import Sidebar from '../src/components/Sidebar';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <MyHead />
      <IconButton
        onClick={toggleColorMode}
        isRound='true'
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        size='sm'
      />
      <Spacer />
      <Sidebar />
    </>
  );
}
