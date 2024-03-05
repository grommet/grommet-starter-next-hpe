import StyledComponentsRegistry from './registry';
import { AppLayout } from '@/components';

const APP_TITLE = 'My Application Name';

export const metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`,
  },
  description: 'Grommet Next.js + HPE Design System Starter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppLayout name={APP_TITLE}>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
