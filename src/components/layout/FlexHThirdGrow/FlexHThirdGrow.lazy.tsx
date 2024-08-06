import React, { lazy, Suspense } from 'react';

const LazyFlexHThirdGrow = lazy(() => import('./FlexHThirdGrow'));

const FlexHThirdGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexHThirdGrow {...props} />
  </Suspense>
);

export default FlexHThirdGrow;
