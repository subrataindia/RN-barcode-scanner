import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center'}}> Barcode Reader App</Text>
      <View
        style={{
          flex: 1,
          padding: 50,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('clicked...');
            navigation.navigate('BarcodeThroughScanner');
          }}>
          <Text> Scan Barcode Through Scanner </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('clicked...');
            navigation.navigate('BarcodeThroughCamera');
          }}>
          <Text> Scan Barcode Through Camera </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
