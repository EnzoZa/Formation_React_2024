import React, { lazy, Suspense } from 'react';

const LazyFlexWFirstGrow = lazy(() => import('./FlexWFirstGrow'));

const FlexWFirstGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexWFirstGrow {...props} />
  </Suspense>
);

export default FlexWFirstGrow;
