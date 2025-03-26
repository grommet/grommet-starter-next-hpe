import Link from 'next/link';
import { Avatar, Box, Button, Header, Nav, Text, BoxProps } from 'grommet';
import { ButtonGroup } from '@/components';
import { Moon, Sun } from '@/icons';

export const AppHeader = ({ name, themeMode: themeModeProp, ...rest }: {
  name: string;
  themeMode: {
    themeMode: 'auto' | 'dark' | 'light' | undefined;
    setThemeMode: (mode: 'auto' | 'dark' | 'light') => void;
  } & BoxProps;
}) => {
  const { themeMode, setThemeMode } = themeModeProp;

  return (
    <Header
      background="background-front"
      pad={{ horizontal: 'large', vertical: 'small' }
      }
      sticky="scrollup"
      {...rest}
    >
      <Link href="/" passHref legacyBehavior >
        <Button>
          <Text color="text-strong" >
            <Text weight="bold" > HPE </Text> {name}
          </Text>
        </Button>
      </Link>
      <Nav direction="row" gap="small" >
        <Link href="/pages" passHref legacyBehavior >
          <Button label="Pages" />
        </Link>
        < Link href="/templates" passHref legacyBehavior >
          <Button label="Templates" />
        </Link>
      </Nav>
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
        < Avatar
          background="background-contrast"
          size="36px"
          src="https://avatars.githubusercontent.com/u/1756948?v=4"
        />
      </ButtonGroup>
    </Header>
  );
};
