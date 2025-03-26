'use client';

import { useEffect, useState } from 'react';
import { Grommet, Main, SkipLink, SkipLinks } from 'grommet';
import { AnimationType } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';
import { AppFooter, AppHeader } from '@/components';

export const AppLayout = ({ children, name }: {
  children: React.ReactNode,
  name: string
}) => {
  const [themeMode, setThemeMode] = useState<'auto' | 'dark' | 'light' | undefined>('auto');
  const [animate, setAnimate] = useState(false);

  const DURATION = 700;
  const modeTransition = ({ delay }: { delay: number }) => [
    { type: 'fadeIn', delay: delay, duration: DURATION },
  ] as AnimationType;

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
        {...(animate && { animation: modeTransition({ delay: 0 }) })}
      />
      <Main id="main" animation={animate ? modeTransition({ delay: 300 }) : undefined}>
        {children}
      </Main>
      <AppFooter id="footer" />
    </Grommet>
  );
};
