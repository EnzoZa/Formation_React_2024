import React, { lazy, Suspense } from 'react';

const LazyTemplateName = lazy(() => import('./TemplateName'));

const TemplateName = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;

/* Utilisation du lazy loading pour charger le composant TemplateName de manière asynchrone */
/* Utilisation du suspense pour afficher un fallback pendant le chargement du composant TemplateName */
/* On utilise le lazy quand c'est des modules peux utiliser */
/* Si il est utiliser une fois on non lazy ca ne sert à rien de mettre un lazy */