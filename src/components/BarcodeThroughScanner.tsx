import React, {useState, useEffect} from 'react';
import {View, Text, DeviceEventEmitter, NativeModules} from 'react-native';
import KeyEvent from 'react-native-keyevent';

function BarcodeScannerComponent() {
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    let barCode = '';
    KeyEvent.onKeyDownListener(keyEvent => {
      const pressedKey = keyEvent.pressedKey;

      if (pressedKey == '\n') {
        setScannedData(barCode);
      } else if (/^\d+$/.test(pressedKey)) {
        barCode = barCode + pressedKey;
      }
    });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Scanned Data: {scannedData}</Text>
    </View>
  );
}

export default BarcodeScannerComponent;

// import React, {useState, useEffect} from 'react';
// import {View, Text, DeviceEventEmitter, NativeModules} from 'react-native';

// const {BarcodeScanner} = NativeModules;

// function BarcodeScannerComponent() {
//   const [scannedData, setScannedData] = useState('');

//   useEffect(() => {
//     // Call the method to start barcode scanning
//     BarcodeScanner.startBarcodeScanning();

//     // Listen for the custom event
//     const subscription = DeviceEventEmitter.addListener(
//       'onBarcodeScanned',
//       data => {
//         setScannedData(data);
//       },
//     );

//     // Clean up the subscription when the component unmounts
//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   return (
//     <View>
//       <Text>Scanned Data: {scannedData}</Text>
//       {/* Add other UI components as needed */}
//     </View>
//   );
// }

// export default BarcodeScannerComponent;
