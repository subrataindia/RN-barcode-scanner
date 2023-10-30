import {useCallback, useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import {BarcodeContext, BarcodeContextType} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParams} from '../navigator/RouteParams';
import {RouteKeys} from '../navigator/RouteKeys';

const App = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RouteStackParams, RouteKeys.Home>;
}) => {
  const {barcode, setBarcode} = useContext(BarcodeContext)!; // // Use "!" to assert that it's not null or undefined

  const handlePrintBarcode = useCallback(() => {
    navigation.navigate(RouteKeys.PrintBarcode);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        Barcode Scanned: {'' + barcode}
      </Text>
      <View
        style={{
          flex: 1,
          padding: 50,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <TouchableOpacity>
          <Button
            title="Scan Through Scanner"
            onPress={() => {
              console.log('clicked...');
              navigation.navigate(RouteKeys.BarcodeThroughScanner);
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Scan Through Camera"
            onPress={() => {
              console.log('clicked...');
              navigation.navigate(RouteKeys.BarcodeThroughCamera);
            }}
          />
        </TouchableOpacity>

        <Button
          title="Reset"
          onPress={() => {
            setBarcode('');
          }}
        />
        <Button title="Print Barcode" onPress={handlePrintBarcode} />
      </View>
    </View>
  );
};

export default App;
