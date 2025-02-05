import React from 'react';
import { Meta } from '@storybook/react';
import Loading from './index';
import { Spacer } from '../index';

export default {
  title: 'Feedback/Loading',
  component: Loading,
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = ({ children }: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginLeft: '1rem',
      width: '100%',
      maxWidth: '340px',
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <Container>
    <Loading />
  </Container>
);

export const Text = () => (
  <Container>
    <Loading size="mini">Loading</Loading>
    <Spacer y={2} />
    <Loading size="small">Loading</Loading>
    <Spacer y={2} />
    <Loading size="medium">Loading</Loading>
    <Spacer y={2} />
    <Loading size="large">Loading</Loading>
    <Spacer y={2} />
    <Loading size="xlarge">Loading</Loading>
    <Spacer y={2} />
  </Container>
);

export const Colors = () => (
  <Container>
    <Loading color="primary">Primary</Loading>
    <Spacer y={2} />
    <Loading color="secondary">Secondary</Loading>
    <Spacer y={2} />
    <Loading color="success">Success</Loading>
    <Spacer y={2} />
    <Loading color="warning">Warning</Loading>
    <Spacer y={2} />
    <Loading color="error">Error</Loading>
    <Spacer y={2} />
    <Loading color="#f81ce5">#f81ce5</Loading>
    <Spacer y={2} />
  </Container>
);

export const TextColors = () => (
  <Container>
    <Loading textColor="primary">Primary</Loading>
    <Spacer y={2} />
    <Loading textColor="secondary">Secondary</Loading>
    <Spacer y={2} />
    <Loading textColor="success">Success</Loading>
    <Spacer y={2} />
    <Loading textColor="warning">Warning</Loading>
    <Spacer y={2} />
    <Loading textColor="error">Error</Loading>
    <Spacer y={2} />
    <Loading textColor="#f81ce5">#f81ce5</Loading>
    <Spacer y={2} />
  </Container>
);

export const Sizes = () => (
  <Container>
    <Loading size="mini">mini</Loading>
    <Spacer y={2} />
    <Loading size="small">small</Loading>
    <Spacer y={2} />
    <Loading size="medium">medium</Loading>
    <Spacer y={2} />
    <Loading size="large">large</Loading>
    <Spacer y={2} />
    <Loading size="xlarge">xlarge</Loading>
    <Spacer y={2} />
  </Container>
);

export const Types = () => (
  <Container>
    <Loading type="default">default</Loading>
    <Spacer y={2} />
    <Loading type="spinner" size="large">
      spinner
    </Loading>
    <Spacer y={2} />
    <Loading type="points" style={{ marginLeft: '-0.5rem' }}>
      points
    </Loading>
    <Spacer y={2} />
    <Loading style={{ marginLeft: '-0.5rem' }} type="points-opacity">
      points-opacity
    </Loading>
    <Spacer y={2} />
    <Loading type="gradient" style={{ marginLeft: '-0.5rem' }}>
      gradient
    </Loading>
  </Container>
);
