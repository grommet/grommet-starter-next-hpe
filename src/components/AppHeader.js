import { Avatar, Box, Button, Header, Nav, Text } from 'grommet';
import { ButtonGroup } from '@/components';
import { Moon, Sun } from '@/icons';

export const AppHeader = ({ name, themeMode: themeModeProp, ...rest }) => {
  const { themeMode, setThemeMode } = themeModeProp;

  return (
    <Header
      background="background-front"
      pad={{ horizontal: 'large', vertical: 'small' }}
      sticky="scrollup"
      {...rest}
    >
      <Text color="text-strong">
        <Text weight="bold">HPE</Text> {name}
      </Text>
      <Box flex />
      <Nav direction="row" gap="small">
        <Button label="Home" href="/" />
        <Button label="About" href="/about" />
        <Button label="Contact" href="/contact" />
      </Nav>
      <Box flex />
      <ButtonGroup>
        <Button
          icon={themeMode === 'dark' ? <Moon /> : <Sun />}
          tip={
            themeMode === 'dark'
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
          onClick={() => {
            themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark');
          }}
        />
        <Avatar
          background="background-contrast"
          size="36px"
          src="https://avatars.githubusercontent.com/u/1756948?v=4"
        />
      </ButtonGroup>
    </Header>
  );
};
