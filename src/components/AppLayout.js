'use client';

import { useState } from 'react';
import { Grommet, Main, SkipLink, SkipLinks } from 'grommet';
import { hpe } from '@/theme/hpe';
import { AppFooter, AppHeader } from '@/components';

export const AppLayout = ({ children, name }) => {
  const [themeMode, setThemeMode] = useState('auto');

  return (
    <Grommet
      theme={hpe}
      themeMode={themeMode}
      full="min"
      background="background-back"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <SkipLinks>
        <SkipLink id="main" label="Skip to main content" />
        <SkipLink id="footer" label="Skip to application footer" />
      </SkipLinks>
      <AppHeader name={name} themeMode={{ themeMode, setThemeMode }} />
      <Main id="main">{children}</Main>
      <AppFooter id="footer" />
    </Grommet>
  );
};
