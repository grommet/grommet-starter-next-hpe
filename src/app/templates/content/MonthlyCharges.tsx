import { Box, DataChart, Skeleton, Text, DataChartProps, BoxProps } from 'grommet';
import { AnalyticCard } from '@/components';

import expenses from '@/mockData/expenses.json';

const series = [
  {
    property: 'date',
    render: (date: string) => (
      <Text>
        {Intl.DateTimeFormat(undefined, {
          month: 'short',
        }).format(new Date(date))}
      </Text>
    ),
  },
  'storage',
  'compute',
  'networking',
];

const chartProps = [
  {
    property: [
      {
        property: 'storage',
        thickness: 'small',
        color: 'purple!',
      },
      {
        property: 'compute',
        thickness: 'small',
        color: 'blue',
      },
      {
        property: 'networking',
        thickness: 'small',
        color: 'orange',
      },
    ],
    type: 'bars',
  },
] as DataChartProps['chart'];

export const MonthlyCharges = ({ skeleton, ...rest }: { skeleton: boolean } & BoxProps) => {
  return (
    <AnalyticCard title="Monthly charges" level={2} {...rest}>
      <Box height={{ min: 'small', max: 'medium' }} direction="row">
        {skeleton ? <Skeleton height={{ min: 'small', max: 'medium' }} width="medium" /> :
          <DataChart
            data={expenses}
            series={series}
            chart={chartProps}
            axis={{ x: { property: 'date', granularity: 'medium' }, y: true }}
            guide={{ y: { granularity: 'fine' } }}
            pad={{ horizontal: 'medium', vertical: 'small' }}
            detail
            gap="xsmall"
            legend
            size="fill"
          />}
      </Box>
    </AnalyticCard>
  );
}