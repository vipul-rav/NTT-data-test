import React, { memo } from 'react';
import { AppRouter } from './routes';
import { ErrorComponent } from './components/Error';

const AppComponent = memo(function App() {
  return (
    <>
      <div>NTT Data Test</div>
      <ErrorComponent>{AppRouter}</ErrorComponent>
    </>
  );
});

const App = AppComponent;

export { App };
