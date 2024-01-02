import React, { Suspense } from 'react';

import './App.css';
import Loader from './Loader';




const OtherComponent = React.lazy(() => {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./OtherComponent'));
    }, 2000);
  });
});

const OtherComponent1 = React.lazy(() => {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./OtherComponent1'));
    }, 2000);
  });
});




const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<>Loading....</>}>
        <OtherComponent />
      <OtherComponent1/>
      </Suspense>
    </div>
  );
};

export default App;