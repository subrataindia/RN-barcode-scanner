import React, {useState, useEffect, useContext} from 'react';
import {View, Text, DeviceEventEmitter, NativeModules} from 'react-native';
import KeyEvent from 'react-native-keyevent';
import {BarcodeContext} from '../../App';

function BarcodeScannerComponent({navigation}) {
  const {setBarcode} = useContext(BarcodeContext);

  useEffect(() => {
    let barCode = '';
    let i = 1;
    KeyEvent.onKeyUpListener(keyEvent => {
      const pressedKey = keyEvent.pressedKey;

      if (pressedKey != '\u0000') {
        barCode = barCode.concat(pressedKey.toString()).concat('');
      }

      if (pressedKey == '\n') {
        setBarcode(barCode);
        barCode = '';
        navigation.goBack();
      }
    });

    return () => {
      KeyEvent.removeKeyUpListener();
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Please Scan The Barcode</Text>
    </View>
  );
}

export default BarcodeScannerComponent;
