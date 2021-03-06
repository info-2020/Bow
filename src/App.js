import React from 'react';
import { renderRoutes } from 'react-router-config';
import '@/styles/App.less';

const App = ({ route }) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

export default App;
