import { Anchor, Grid, PageHeader, Text } from "grommet";

const Pages = () => {
  return (
    <>
      <PageHeader title="Pages" subtitle="Examples to be populated" />
      <Grid columns="medium" gap="medium">
        <Anchor href="#">Record detail</Anchor>
        <Anchor href="#">List-detail</Anchor>
        <Anchor href="#">Editor</Anchor>
        <Anchor href="#">Manage</Anchor>
        <Anchor href="#">Navigation</Anchor>
      </Grid>
    </>
  );
}

export default Pages;
