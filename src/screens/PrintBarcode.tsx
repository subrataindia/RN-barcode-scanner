import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, {useCallback, useContext} from 'react';
import Barcode from '@adrianso/react-native-barcode-builder';
import {BarcodeContext} from '../../App';
import {barcodeToSvg} from '@adrianso/react-native-barcode-builder';
import RNPrint from 'react-native-print';

const PrintBarcode = () => {
  // Barcode format, you can choose other formats as well
  const barcodeFormat = 'CODE128';
  const {barcode} = useContext(BarcodeContext)!;

  const handlePrint = useCallback(async () => {
    const svg = barcodeToSvg({
      value: barcode,
    });

    await RNPrint.print({
      html: '<h1>Barcode Data</h1>' + svg + '<p>' + barcode + '</p>',
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {barcode != '' ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 20,
          }}>
          <View>
            <Barcode
              style={{height: 200}}
              value={barcode}
              format={barcodeFormat}
            />
            <Text>{barcode}</Text>
          </View>
          <Button title="Print" onPress={handlePrint} />
        </View>
      ) : (
        <Text>No Barcode Found</Text>
      )}
    </View>
  );
};

export default PrintBarcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
