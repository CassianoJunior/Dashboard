import {
  Flex, Stack, Text, Icon,
} from '@chakra-ui/react';
import Logo from '../Logo';

const Sidebar = () => (
  <Flex direction='column'>
    <Logo />
    <Stack>
      <Flex>
        <Text>Dashboard</Text>
        <Icon />
      </Flex>
      <Flex>
        <Text>Exchange</Text>
        <Icon />
      </Flex>
      <Flex>
        <Text>Oi</Text>
        <Icon />
      </Flex>
      <Flex>
        <Text>Ola</Text>
        <Icon />
      </Flex>
    </Stack>
  </Flex>
);

export default Sidebar;
