'use client';

import { useEffect, useState } from 'react';
import { Grommet, Main, SkipLink, SkipLinks } from 'grommet';
import { hpe } from '@/theme/hpe';
import { AppFooter, AppHeader } from '@/components';

export const AppLayout = ({ children, name }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [animate, setAnimate] = useState(false);

  const DURATION = 700;
  const modeTransition = ({ delay }) => [
    { type: 'fadeIn', delay: delay, duration: DURATION },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, DURATION);
    setAnimate(true);
    return () => clearTimeout(timer);
  }, [themeMode]);

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
      <AppHeader
        name={name}
        themeMode={{ themeMode, setThemeMode }}
        animation={animate && modeTransition({ delay: 0 })}
      />
      <Main id="main" animation={animate && modeTransition({ delay: 300 })}>
        {children}
      </Main>
      <AppFooter id="footer" />
    </Grommet>
  );
};
