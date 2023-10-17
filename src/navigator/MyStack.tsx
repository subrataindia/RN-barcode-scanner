import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BarcodeThroughCamera from '../screens/BarcodeThroughCamera';
import BarcodeThroughScanner from '../screens/BarcodeThroughScanner';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Barcode Scanning App'}}
      />
      <Stack.Screen
        name="BarcodeThroughCamera"
        component={BarcodeThroughCamera}
        options={{headerTitle: 'Scan Using Camera'}}
      />
      <Stack.Screen
        name="BarcodeThroughScanner"
        component={BarcodeThroughScanner}
        options={{headerTitle: 'Scan Using Scanner'}}
      />
    </Stack.Navigator>
  );
}
