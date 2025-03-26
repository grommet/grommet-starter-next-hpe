'use client';

import { useState } from 'react';
import { CheckBox, Heading, PageHeader } from 'grommet';
import { ContentPane } from '@/components';
import { cardAnimation } from '@/components/utils/animations';
import { MonthlyCharges } from './content/MonthlyCharges';

const Templates = () => {
  const [skeleton, setSkeleton] = useState(false);

  return (
    <>
      <PageHeader
        title="Templates"
        subtitle="Example patterns for building applications to be populated."
        actions={
          <CheckBox
            label="Skeletonize"
            onChange={() => setSkeleton(!skeleton)}
            toggle
            reverse
          />
        }
      />
      <Heading level={2}>Tables</Heading>
      <Heading level={2}>Forms</Heading>
      <ContentPane heading="Cards" level={2} skeleton={skeleton}>
        <MonthlyCharges animation={cardAnimation(0)} skeleton={skeleton} alignSelf="start" />
      </ContentPane>
      <Heading level={2}>Charts</Heading>
    </>
  );
};

export default Templates;
