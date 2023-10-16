package com.barcodereader;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import android.view.KeyEvent;
import android.view.InputDevice;
import android.view.View;
import java.util.ArrayList;
import java.util.List;
import android.util.Log;

public class BarcodeScannerModule extends ReactContextBaseJavaModule {
    private List<Character> scannedData = new ArrayList<>();
    private final ReactApplicationContext reactContext;

    public BarcodeScannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "BarcodeScanner";
    }

    @ReactMethod
    public void startBarcodeScanning() {
        View rootView = getCurrentActivity().getWindow().getDecorView();
        Log.d("TAGY","Barcode scanning started");
        
        rootView.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                Log.d("TAGY","Key Pressed");
                if (event.getAction() == KeyEvent.ACTION_DOWN) {
                    char pressedKey = (char) event.getUnicodeChar();

                    if (pressedKey == '\n') {
                        // Barcode is complete; process the scanned data
                        String scannedDataStr = getScannedData();
                        // Handle the scanned data, e.g., emit a custom event
                        Log.d("TAGY", "" + scannedDataStr);
                        sendScannedData(scannedDataStr);
                        // Clear the accumulated data for the next scan
                        scannedData.clear();
                    } else {
                        // Accumulate the characters until a delimiter is detected
                        scannedData.add(pressedKey);
                        Log.d("TAGY", "scanned data" + getScannedData());
                    }
                }
                return true;
            }
        });

        // Request focus for the view to ensure it can receive key events
        rootView.requestFocus();
    }

    private String getScannedData() {
        StringBuilder scannedDataStr = new StringBuilder(scannedData.size());
        for (Character character : scannedData) {
            scannedDataStr.append(character);
        }
        return scannedDataStr.toString();
    }

    private void sendScannedData(String data) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onBarcodeScanned", data);
    }
}

// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;
// import com.facebook.react.modules.core.DeviceEventManagerModule;
// import android.view.KeyEvent;
// import android.view.View;
// import android.view.View.OnKeyListener;
// import java.util.ArrayList;
// import java.util.List;
// import android.util.Log;

// public class BarcodeScannerModule extends ReactContextBaseJavaModule {
//     private List<Character> scannedData = new ArrayList<>();
//     private final ReactApplicationContext reactContext;

//     public BarcodeScannerModule(ReactApplicationContext reactContext) {
//         super(reactContext);
//         this.reactContext = reactContext;
//     }

//     @Override
//     public String getName() {
//         return "BarcodeScanner";
//     }

//     @ReactMethod(isBlockingSynchronousMethod = true)
//     public void startBarcodeScanning() {
//         View rootView = getCurrentActivity().getWindow().getDecorView();

//         rootView.setOnKeyListener(new OnKeyListener() {
//             @Override
//             public boolean onKey(View v, int keyCode, KeyEvent event) {
//                 if (event.getAction() == KeyEvent.ACTION_DOWN) {
//                     char pressedKey = (char) event.getUnicodeChar();

//                     if (pressedKey == '\n') {
//                         // Barcode is complete; process the scanned data
//                         String scannedDataStr = getScannedData();
//                         // Handle the scanned data, e.g., emit a custom event
//                         Log.d("TAGY",""+scannedDataStr);
//                         sendScannedData(scannedDataStr);
//                         // Clear the accumulated data for the next scan
//                         scannedData.clear();
//                     } else {
//                         // Accumulate the characters until a delimiter is detected
//                         scannedData.add(pressedKey);
//                         Log.d("TAGY","scanned data"+getScannedData());
//                     }
//                 }
//                 return true;
//             }
//         });
//     }

//     private String getScannedData() {
//         StringBuilder scannedDataStr = new StringBuilder(scannedData.size());
//         for (Character character : scannedData) {
//             scannedDataStr.append(character);
//         }
//         return scannedDataStr.toString();
//     }

//     private void sendScannedData(String data) {
//         reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//             .emit("onBarcodeScanned", data);
//     }
// }
