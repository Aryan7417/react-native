/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import hello from './hello.tsx';
import componet from './componet.tsx'
import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName,()=> hello);

AppRegistry.registerComponent(appName,()=> componet);

