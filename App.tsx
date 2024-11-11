/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStack} from './src/Navigation/RootStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import {persistor, store} from './src/Redux/Store/Store';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/utils/Helper/ToastConfig';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [box, setBox] = useState(null);
  const cameraRef = useRef(null);
  const [local, setLocal] = useState<NavigationState>();

  // const handlerFace = ({faces}) => {
  //   if (faces[0]) {
  //     setBox({
  //       boxs: {
  //         width: faces[0].bounds.size.width,
  //         height: faces[0].bounds.size.height,
  //         x: faces[0].bounds.origin.x,
  //         y: faces[0].bounds.origin.y,
  //         yawAngle: faces[0].yawAngle,
  //         rollAngle: faces[0].rollAngle,
  //       },
  //       rightEyePosition: faces[0].rightEyePosition,
  //       leftEyePosition: faces[0].leftEyePosition,
  //       bottomMounthPosition: faces[0].bottomMounthPosition,
  //     });
  //   } else {
  //     setBox(null);
  //   }
  // };
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer initialState={local} onStateChange={setLocal}>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast config={ToastConfig} visibilityTime={2000} autoHide={true} />
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray',
//   },
//   camera: {
//     flexGrow: 1,
//   },
//   bound: ({width, height, x, y}) => {
//     return {
//       position: 'absolute',
//       top: y,
//       left: x - 50,
//       height,
//       width,
//       borderWidth: 5,
//       borderColor: 'red',
//       zIndex: 3000,
//     };
//   },
//   glasses: ({rightEyePosition, leftEyePosition, yawAngle, rollAngle}) => {
//     return {
//       position: 'absolute',
//       top: rightEyePosition.y - 60,
//       left: rightEyePosition.x - 100,
//       resizeMode: 'contain',
//       width: Math.abs(leftEyePosition.x - rightEyePosition.x) + 100,
//     };
//   },
// });

export default App;
