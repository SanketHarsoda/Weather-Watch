import React from 'react';
import {HomeScreen} from './modules';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

const App = (): React.JSX.Element => {
  return <HomeScreen />;
};

export default App;
