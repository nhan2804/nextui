import React from 'react';
import { Meta } from '@storybook/react';
import Pagination from './pagination';
import { Grid } from '../index';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <Grid.Container gap={2} sm={12}>
        <Story />
      </Grid.Container>
    )
  ]
} as Meta;

export const Default = () => <Pagination total={20} initialPage={1} />;

export const Colors = () => (
  <>
    <Grid xs={12}>
      <Pagination color="primary" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="secondary" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="success" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="warning" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="error" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="gradient" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="#f4a" total={10} />
    </Grid>
  </>
);

export const Sizes = () => (
  <>
    <Grid xs={12}>
      <Pagination size="mini" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination size="small" total={5} />
    </Grid>
    <Grid xs={12}>
      <Pagination size="medium" total={10} initialPage={6} />
    </Grid>
    <Grid xs={12}>
      <Pagination size="large" total={10} initialPage={6} />
    </Grid>
    <Grid xs={12}>
      <Pagination size="xlarge" total={30} initialPage={6} />
    </Grid>
  </>
);

export const Rounded = () => (
  <>
    <Grid xs={12}>
      <Pagination rounded size="mini" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded size="small" total={5} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded size="medium" total={10} initialPage={6} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded size="large" total={10} initialPage={6} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded size="xlarge" total={30} initialPage={6} />
    </Grid>
  </>
);

export const Bordered = () => (
  <>
    <Grid xs={12}>
      <Pagination bordered total={20} initialPage={1} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded bordered total={20} initialPage={1} />
    </Grid>
  </>
);

export const Shadow = () => (
  <>
    <Grid xs={12}>
      <Pagination shadow color="primary" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded shadow color="secondary" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination shadow color="success" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded shadow color="warning" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination shadow color="error" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination rounded shadow color="gradient" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination shadow color="#f4a" total={10} />
    </Grid>
  </>
);

export const OnlyDots = () => (
  <>
    <Grid xs={12}>
      <Pagination color="primary" onlyDots size="mini" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination shadow color="secondary" onlyDots size="small" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="success" onlyDots size="medium" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination shadow color="warning" onlyDots size="large" total={10} />
    </Grid>
    <Grid xs={12}>
      <Pagination color="error" onlyDots size="xlarge" total={10} />
    </Grid>
  </>
);

export const Loop = () => (
  <>
    <Grid xs={12}>
      <Pagination loop total={6} initialPage={1} />
    </Grid>
  </>
);

export const NoMargin = () => (
  <>
    <Grid xs={12}>
      <Pagination shadow noMargin color="secondary" total={6} initialPage={1} />
    </Grid>
  </>
);

export const NoControls = () => (
  <>
    <Grid xs={12}>
      <Pagination
        shadow
        controls={false}
        color="success"
        total={20}
        initialPage={1}
      />
    </Grid>
  </>
);

export const NoAnimated = () => (
  <>
    <Grid xs={12}>
      <Pagination animated={false} total={6} initialPage={1} />
    </Grid>
  </>
);
