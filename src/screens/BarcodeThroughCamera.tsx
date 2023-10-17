import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {BarcodeContext} from '../../App';

const BarcodeScannerComponent = ({navigation}) => {
  const [scannedData, setScannedData] = useState(null);
  const {setBarcode} = useContext(BarcodeContext);

  const onBarCodeRead = event => {
    if (event.data) {
      // Handle the scanned barcode data here
      const scannedBarcode = event.data;
      //setScannedData(scannedBarcode); // Update the state with scanned data
      setBarcode(scannedBarcode);
      navigation.goBack();
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera style={{flex: 1}} onBarCodeRead={onBarCodeRead} />
      <Text style={{fontSize: 20, color: 'black', backgroundColor: 'white'}}>
        Scanned Data: {scannedData}
      </Text>
    </View>
  );
};

export default BarcodeScannerComponent;
