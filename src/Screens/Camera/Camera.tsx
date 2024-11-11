import {Alert, Dimensions, Image, PermissionsAndroid, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CameraStyles} from './Camera.style';
import {RNCamera} from 'react-native-camera';
import {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { hp, wp } from '../../Theme';
import { ImagesPath } from '../../../Assets/ImagePath';
import { useNavigation } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { AWS_KEY, AWS_SECRET_KEY, AWS_REGION, AWS_BUCKET_NAME } from '@env';
import AWS from 'aws-sdk';
import { rSetEmployeeDetails } from '../../Redux/Employee/action';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Camera = () => {
    const navigation = useNavigation();
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [box, setBox] = useState<any>(null);
  const [boxVisible, setBoxVisible] = useState(false);
  const [boxColor, setBoxColor] = useState('red');
  const dispatch = useDispatch<any>();
  const cameraRef = useRef(null);
  const [previewWidth, setPreviewWidth] = useState(0);
  const [previewHeight, setPreviewHeight] = useState(0);

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const onLayoutPreview = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setPreviewWidth(width);
    setPreviewHeight(height);
  };
  const {
    employee,
    } = useSelector((state:any) => state.Employee);
  
  useEffect(() => {
   
  }, [employee])
  const handlerFace = ({ faces }) => {
    if (faces.length > 0) {
        setBoxVisible(true);
        setBoxColor('green'); // Change to green if face is detected
        const face = faces[0];
  
        // Assuming you have your screen dimensions and camera adjustments
        const scaleX = previewWidth / screenWidth;
      const scaleY = previewHeight / screenHeight;

      // Scale the bounding box dimensions and position
      const adjustedBox = {
        width: face.bounds.size.width * scaleX,
        height: face.bounds.size.height * scaleY,
        x: face.bounds.origin.x * scaleX - 20,
        y: face.bounds.origin.y * scaleY,
      };
  
        setBox(adjustedBox);
      } else {
        setBoxVisible(true);
        setBoxColor('red'); // Change back to red when no face is detected
        setBox({ // Set a default box size and position when no face is detected
          width: 100, // Set a default width
          height: 100, // Set a default height
          x: wp(40), // Set a default x position (adjust as needed)
          y: hp(40), // Set a default y position (adjust as needed)
        });
      }
  
  };

  const toggleCameraType = () => {
    setType(prevType => 
        prevType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    );
};

//   };

const uploadToS3 = async (fileUri: any) => {
    const file = {
      uri: fileUri,
      name: `photo-${Date.now()}.jpg`,
      type: 'image/jpeg',
    };

    AWS.config.update({
      accessKeyId: AWS_KEY,
      secretAccessKey: AWS_SECRET_KEY,
      region: AWS_REGION,
    });

    const s3 = new AWS.S3();
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: file.name,
      Body: await fetch(file.uri).then(response => response.blob()),
      ContentType: 'image/jpeg',
      ACL: 'public-read',
    };

    try {
      const response = await s3.upload(params).promise();
      return response;
     
    //   Alert.alert('Upload Successful', `File uploaded to: ${response.Location}`);
    } catch (error) {
        console.error('Upload error:', error);
      Alert.alert('Upload Failed', error.message);
    }
  };
  const directoryPath = `${RNFS.ExternalStorageDirectoryPath}/FaceDetector`;

  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.85, base64: true };
      setBoxVisible(false);
  
  
        // Capture the picture
        const data = await cameraRef.current.takePictureAsync(options);
        let upload;
  
        if (data.uri) {
         // Log the URI for sending to the server
  
          // Upload to S3
          try {
            upload = await uploadToS3(data.uri);
           
          } catch (error) {
            console.error('Upload error:', error);
            return;
          }
  
          // Prepare and dispatch the request
          const request = {
            ...employee,
            employee_image_url: {
              url: upload?.Location,
              image_type: 'Thumbnail',
              key: upload?.Key,
              sort_order: 'ascending',
            },
          };
          
          dispatch(rSetEmployeeDetails(request));
  
          // Show success message
          Toast.show({
            type: 'success',
            text1: 'The Picture is taken',
          });
  
          // Navigate to CreateEmployee after a delay
          setTimeout(() => {
            navigation.navigate('CreateEmployee');
          }, 2000);
        } else {
          Alert.alert('Error', 'No image data received.');
        }
     
    }
  };
      

  return (
    <SafeAreaView style={[CameraStyles.areaView]}>
      <View style={CameraStyles.container}>
        <RNCamera
          ref={cameraRef}
          style={CameraStyles.camera}
          type={type}
          captureAudio={false}
          onFacesDetected={handlerFace}
          faceDetectionLandmarks={
            RNCamera.Constants.FaceDetection.Landmarks.all
          }
          faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
          onLayout={onLayoutPreview}
        //   androidCameraPermissionOptions={'Camera Permission'}
        
        />
       {boxVisible && box && (
        <View
          style={{
            position: 'absolute',
            borderWidth: 5,
            borderColor: boxColor, // Use the color based on face detection
            width: box.width,
            height: box.height,
            left: box.x,
            top: box.y,
          }}
        />
      )}

        <View style={[CameraStyles.iconContainer]}>

            <TouchableOpacity onPress={() => navigation.navigate('Employee')}>
            <Image source={ImagesPath.back} style={[CameraStyles.back]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCapture} >
            <Image source={ImagesPath.cameraButton} style={[CameraStyles.cameraButton]}/>
            </TouchableOpacity>
            <TouchableOpacity >
            {/* <Image source={ImagesPath.cameraFlip} style={[CameraStyles.flip]}/> */}
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bound: ({width, height, x, y}) => {
    return {
      position: 'absolute',
      top: y,
      left: x,
      height,
      width,
      borderWidth: 5,
      borderColor: 'red',
      zIndex: 3000,
      backgroundColor: 'rgba(255, 0, 0, 0.2)'
    };
  },
  glasses: ({rightEyePosition, leftEyePosition, yawAngle, rollAngle}) => {
    return {
      position: 'absolute',
      top: rightEyePosition.y - 60,
      left: rightEyePosition.x - 100,
      resizeMode: 'contain',
      width: Math.abs(leftEyePosition.x - rightEyePosition.x) + 100,
    };
  },
});
export default Camera;
