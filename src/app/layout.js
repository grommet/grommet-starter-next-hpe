import { Grommet, Main, SkipLink, SkipLinks } from 'grommet';
import { hpe } from '@/theme/hpe';
import { AppLayout } from '@/components';

const APP_TITLE = 'My Application Name';

export const metadata = {
  title: {
    default: { APP_TITLE },
    template: `%s | ${APP_TITLE}`,
  },
  description: 'Grommet Next.js + HPE Design System Starter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppLayout name={APP_TITLE}>{children}</AppLayout>
      </body>
    </html>
  );
}
