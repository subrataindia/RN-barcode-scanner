import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigator/MyStack';

export type BarcodeContextType = {
  barcode: string;
  setBarcode: (value: string) => void;
};

export const BarcodeContext = React.createContext<
  BarcodeContextType | undefined
>(undefined);

export default function App() {
  const [barcode, setBarcode] = React.useState('');

  return (
    <BarcodeContext.Provider value={{barcode, setBarcode}}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </BarcodeContext.Provider>
  );
}
