import { View, Text, Alert, Platform, PermissionsAndroid, Image  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './Home.style'
import CommonButton from '../../Components/Button/CommonButton';
import { ImagesPath } from '../../../Assets/ImagePath';


export default function Home() {
    const [value, setValue ] = useState(false)

    // const cameraRef = useRef(null);
    // const devices = useCameraDevices();
    // Use the back camera
    // const [isCameraReady, setIsCameraReady] = useState(false);
    // const [device, setDevice] = useState<any>();
    // const [detections, setDetections] = useState([]);
    const navigation = useNavigation();

    useEffect(( ) => {
        const requestCameraPermission = async () => {
            try {
              if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: "Camera Permission",
                    message: "This app needs access to your camera to take photos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  Alert.alert("Permission Granted", "You can now access the camera.", [
                    {
                      text: "OK",
                     
                    },
                  ]);
                } else {
                  Alert.alert("Permission Denied", "Camera access is required to proceed.");
                }
              } else {
                // iOS Permission Check
                const status = await navigator.mediaDevices.getUserMedia({ video: true });
                if (status) {
                  Alert.alert("Permission Granted", "You can now access the camera.", [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate('Camera'),
                    },
                  ]);
                } else {
                  Alert.alert("Permission Denied", "Camera access is required to proceed.");
                }
              }
            } catch (err) {
              console.warn(err);
            }
          };
          requestCameraPermission()
    }, [])
   
    
  return (
    <SafeAreaView>
         <View style={[styles.uploadScreenView]}>
      <Text style={[styles.pictureText]}>Take a Picture</Text>
      <Image source={ImagesPath.FaceDetectionImage} style={[styles.uploadView]}></Image>
      <CommonButton
        containerStyle={[styles.buttonStyle]}
        onPress={() => navigation.navigate('Camera')}
        buttonTextStyle={styles.buttonText}
        title="Upload"
      />
    </View>
    </SafeAreaView>
  )
}