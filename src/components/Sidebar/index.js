import {
  Flex,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  CloseButton,
  DrawerBody,
  IconButton,
  Spacer,
  Button,
} from '@chakra-ui/react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { CgArrowsExchangeAlt } from 'react-icons/cg';

import Logo from '../Logo';
import ToggleTheme from '../ToggleTheme/index';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify='center'
        align='center'
        m='auto'
        maxW={['380px']}
        py={4}
        bg='highlight'
      >
        <IconButton
          isRound='true'
          size='sm'
          icon={<HiOutlineMenuAlt1 />}
          onClick={onOpen}
        />
        <Spacer />
        <Logo />
        <Spacer />
        <ToggleTheme />
      </Flex>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' display='flex'>
            <Logo />
            <Spacer />
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody my={10}>
            <Stack spacing={4}>
              <Button leftIcon={<MdOutlineDashboard />} colorScheme='purple'>
                Dashboard
              </Button>
              <Button leftIcon={<CgArrowsExchangeAlt />} colorScheme='purple'>
                Convert to
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
