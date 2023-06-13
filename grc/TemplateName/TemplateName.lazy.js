import React, { lazy, Suspense } from 'react';

//lazy : permet de charger le composant que quand il sera nécessaire
// il chargera tout l'utile (props, etc)

const LazyTemplateName = lazy(() => import('./TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
