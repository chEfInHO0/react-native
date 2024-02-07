import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigators/index'
const App = () => {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}

export default App;