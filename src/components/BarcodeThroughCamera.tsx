import {View, Text} from 'react-native';
import React from 'react';
import KeyEvent from 'react-native-keyevent';

const BarcodeThroughCamera = () => {
  // if you want to react to keyDown
  KeyEvent.onKeyDownListener(keyEvent => {
    console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
    console.log(`Action: ${keyEvent.action}`);
    console.log(`Key: ${keyEvent.pressedKey}`);
    console.log(`Key: ${keyEvent.pressedKey == '\n'}`);
  });

  return (
    <View>
      <Text>BarcodeThroughCamera</Text>
    </View>
  );
};

export default BarcodeThroughCamera;
