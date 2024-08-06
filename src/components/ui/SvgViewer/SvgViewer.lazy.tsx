import React, { lazy, Suspense } from 'react';

const LazySvgViewer = lazy(() => import('./SvgViewer'));

const SvgViewer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySvgViewer {...props} />
  </Suspense>
);

export default SvgViewer;
