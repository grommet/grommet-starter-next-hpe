import { Button, Grid, Page, PageContent, PageHeader, Text } from 'grommet';
import { ContentPane } from '@/components';
import { Next } from '@/icons';

export default function Home() {
  return (
    <Page>
      <PageContent>
        <PageHeader title="Home" />
        <Grid columns={['flex', 'medium']} gap="large">
          <ContentPane
            heading="Primary content"
            level={2}
            actions={<Button icon={<Next />} />}
            contain
          >
            <Text>Home</Text>
          </ContentPane>
          <ContentPane
            heading="Secondary content"
            level={2}
            actions={<Button icon={<Next />} />}
            contain
          >
            <Text>Home</Text>
          </ContentPane>
        </Grid>
      </PageContent>
    </Page>
  );
}
