import {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import {BarcodeContext} from '../App';

const App = ({navigation}) => {
  const {barcode, setBarcode} = useContext(BarcodeContext);

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
              navigation.navigate('BarcodeThroughScanner');
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Scan Through Camera"
            onPress={() => {
              console.log('clicked...');
              navigation.navigate('BarcodeThroughCamera');
            }}
          />
        </TouchableOpacity>

        <Button
          title="Reset"
          onPress={() => {
            setBarcode('');
          }}
        />
      </View>
    </View>
  );
};

export default App;
