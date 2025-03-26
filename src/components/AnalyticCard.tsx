import { Card, CardBody, CardFooter, CardHeader, Heading } from 'grommet';
import { AnimationType } from 'grommet/utils';
import { LinkNext } from 'grommet-icons';

export const AnalyticCard = (
  { animation, children, footer, level, title, ...rest }:
    {
      animation: AnimationType,
      children: React.ReactNode,
      footer?: React.ReactNode,
      level: 1 | 2 | 3 | 4 | 5 | 6,
      title: string
    }
) => {
  return (
    <Card animation={animation} {...rest}>
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