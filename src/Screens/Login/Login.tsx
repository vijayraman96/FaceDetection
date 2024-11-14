import {
  Alert,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from './Login.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../Components/Input/CustomTextInput';
import {BaseStyles} from '../../Theme/BaseStyle';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Dispatch, useEffect, useState} from 'react';
import CustomButton from '../../Components/Button/CommonButton';
import {useDispatch} from 'react-redux';
import {rLoginUser} from '../../Redux/Auth/action';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ImagesPath} from '../../../Assets/ImagePath';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
});
export default function Login() {
  const [loading, setLoading] = useState(false);
  const {isLogin} = useSelector((state: any) => state.Auth);
  const navigation = useNavigation<Yup.AnyObject>();
  const dispatch = useDispatch<any>();
  const route = useRoute();

  const formik = useFormik<any>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: true, // Validates on every change
    validateOnBlur: true,
    onSubmit: values => handleSubmit(values),
  });

  const handleSubmit = (values: any) => {
    // try {
    // console.log(values, 'values');
    let request = {
      login_method: 'EMAIL',
      user_type: 'SuperAdmin',
      email: 'ramlath@energetics.ai',
      password: '12345678',
      device_id: 'Mac_01',
      user_name: 'ramlath',
    };
    // console.log('request', request);
    dispatch(rLoginUser(request));

    // console.log('response', response)

    // } catch (error) {
    //   console.log("error",error)
    // }
  };
  const checkAndRequestStoragePermission = async () => {
    // Check if the permission is already granted
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    if (hasPermission) {
      // Permission is already granted, no need to show any prompt
      return true;
    }

    // If not granted, request permission
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'App needs access to your storage to save images.',
        buttonPositive: 'OK',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };
  useEffect(() => {
    const requestPermissionOnMount = async () => {
      const permissionGranted = await checkAndRequestStoragePermission();
      // if (!permissionGranted) {
      //   Alert.alert('Permission Denied', 'Storage access is required to save images.');
      // }
    };

    // Run the permission check when the component mounts
    requestPermissionOnMount();
  }, []);

  useEffect(() => {
    if (isLogin && route.name === 'Login') {
      navigation.navigate('Option');
    }

    // Perform any action on user login, e.g., navigate to another screen
  }, [isLogin]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer} enableOnAndroid >
        <View style={styles.inputContainer}>
          <View style={[styles.imageView]}>
            <Image source={ImagesPath.faceRecognition} style={[styles.face]} resizeMode='contain'/>
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Enter Your Email</Text>
            <CustomTextInput
              type="text"
              maxLength={128}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              value={formik.values.email ? formik.values.email : ''}
              onChangeText={e => formik.setFieldValue('email', e)}
              error={formik.touched.email && formik.errors.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Enter Your Password</Text>
            <CustomTextInput
              type="text"
              maxLength={128}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              value={formik.values.password ? formik.values.password : ''}
              onChangeText={e => formik.setFieldValue('password', e)}
              error={formik.touched.password && formik.errors.password}
            />
          </View>

          <CustomButton
            containerStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            title="Login"
            isLoading={loading}
            // disable={loading}
            // maxLength={10}
            onPress={() => {
              setLoading(true);
              formik.handleSubmit();
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
