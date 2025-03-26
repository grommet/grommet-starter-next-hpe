import { BoxProps, Card, CardBody, CardFooter, CardHeader, Heading } from 'grommet';
import { AnimationType } from 'grommet/utils';
import { LinkNext } from 'grommet-icons';

export const AnalyticCard = (
  { children, footer, level, title, ...rest }:
    {
      children: React.ReactNode,
      footer?: React.ReactNode,
      level: 1 | 2 | 3 | 4 | 5 | 6,
      title: string
    } & BoxProps
) => {
  return (
    <Card {...rest}>
      <CardHeader>
        <Heading level={level} margin="none">{title}</Heading>
        <LinkNext color="brand" />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}