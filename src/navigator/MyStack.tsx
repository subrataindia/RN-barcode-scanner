import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../App';
import BarcodeThroughCamera from '../components/BarcodeThroughCamera';
import BarcodeThroughScanner from '../components/BarcodeThroughScanner';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="BarcodeThroughCamera"
        component={BarcodeThroughCamera}
      />
      <Stack.Screen
        name="BarcodeThroughScanner"
        component={BarcodeThroughScanner}
      />
    </Stack.Navigator>
  );
}
