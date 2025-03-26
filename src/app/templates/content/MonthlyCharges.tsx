import { Box, DataChart, Skeleton, Text, DataChartProps } from 'grommet';
import { AnalyticCard } from '@/components';

import expenses from '@/mockData/expenses.json';
import { AnimationType } from 'grommet/utils';

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

export const MonthlyCharges = (
  { animation, skeleton, ...rest }:
    { animation: AnimationType, skeleton: boolean }
) => {
  return (
    <AnalyticCard title="Monthly charges" level={2} animation={animation} {...rest}>
      <Box height={{ min: 'small', max: 'medium' }} direction="row">
        {skeleton ? <Skeleton height={{ min: 'small', max: 'medium' }} /> :
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