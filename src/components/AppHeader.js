import Link from 'next/link';
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
      <Link href="/" passHref legacyBehavior>
        <Button>
          <Text color="text-strong">
            <Text weight="bold">HPE</Text> {name}
          </Text>
        </Button>
      </Link>
      <Box flex />
      <Nav direction="row" gap="small">
        <Link href="/pages" passHref legacyBehavior>
          <Button label="Pages" />
        </Link>
        <Link href="/templates" passHref legacyBehavior>
          <Button label="Templates" />
        </Link>
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
