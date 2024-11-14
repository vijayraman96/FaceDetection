import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {startTransition, useEffect, useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CustomTextInput from '../../Components/Input/CustomTextInput';
import {hp, Color, wp, FontSize, FontFamily, BaseStyles} from '../../Theme';
import CommonButton from '../../Components/Button/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../Components/Button/CommonButton';
import {
  rSetEmployeeDetails,
  rUpdateEmployeeDetails,
} from '../../Redux/Employee/action';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Employe.style';
import {ImagesPath} from '../../../Assets/ImagePath';
const validationSchema = Yup.object().shape({
  employee_name: Yup.string()
    .required('Name is required')
    .max(50, 'Name cannot be longer than 50 characters'),
  employee_uid: Yup.string()
    .required('Employee ID is required')
    .matches(
      /^[A-Za-z0-9]+$/,
      'Employee ID must contain only letters and numbers',
    )
    .max(30, 'Employee ID cannot be longer than 30 characters'),
  company_name: Yup.string()
    .required('Company Name is required')
    .max(50, 'Name cannot be longer than 50 characters'),
  mobile_number: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]+$/, 'Mobile number must contain only numbers')
    .length(10, 'Mobile number must be exactly 10 digits'),
});
const Employee = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    employeeId: '',
    companyName: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();

  const navigation = useNavigation<Yup.AnyObject>();
  const {employee} = useSelector((state: any) => state.Employee);

  useEffect(() => {
    // console.log(employee, 'fvfvefv');
  }, [employee]);

  const formik = useFormik<any>({
    initialValues: {
      employee_name: '',
      employee_uid: '',
      company_name: '',
    },
    validationSchema,
    validateOnChange: true, // Ensures validation on each change
    validateOnBlur: true,
    onSubmit: values => handleSubmit(values),
  });

  const handleSubmit = (values: any) => {
    let request = {
      employee_name: formik.values.employee_name,
      employee_uid: formik.values.employee_uid,
      company_name: formik.values.company_name,
    };
    dispatch(rSetEmployeeDetails(request));
    navigation.navigate('Camera');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.loginContainer}
        keyboardShouldPersistTaps="handled">
        {/* <View style={[styles.imageView]}>
          <Image source={ImagesPath.employee} style={[styles.employee]} />
        </View> */}
        <View>
          <Text style={[BaseStyles.heading, {marginTop: hp(10)}]}>
            Create your employee
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={styles.label}>Name</Text>
            <CustomTextInput
              type="text"
              maxLength={50}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              value={
                formik.values.employee_name ? formik.values.employee_name : ''
              }
              onChangeText={e => formik.setFieldValue('employee_name', e)}
              error={
                formik.touched.employee_name && formik.errors.employee_name
              }
              onBlur={formik.handleBlur('employee_name')}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Company</Text>
            <CustomTextInput
              type="text"
              maxLength={50}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              value={
                formik.values.company_name ? formik.values.company_name : ''
              }
              onChangeText={e => formik.setFieldValue('company_name', e)}
              error={formik.touched.company_name && formik.errors.company_name}
              onBlur={formik.handleBlur('company_name')}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Employee ID</Text>
            <CustomTextInput
              type="text"
              maxLength={30}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              value={
                formik.values.employee_uid ? formik.values.employee_uid : ''
              }
              onChangeText={e => formik.setFieldValue('employee_uid', e)}
              error={formik.touched.employee_uid && formik.errors.employee_uid}
              onBlur={formik.handleBlur('employee_uid')}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.label}>Mobile number</Text>
            <CustomTextInput
              type="text"
              maxLength={10}
              editable={!loading}
              containerStyle={[
                BaseStyles.bottomBorderStyle,
                {alignSelf: 'center'},
              ]}
              keyboardType="phone-pad"
              value={
                formik.values.mobile_number ? formik.values.mobile_number : ''
              }
              onChangeText={e => formik.setFieldValue('mobile_number', e)}
              error={
                formik.touched.mobile_number && formik.errors.mobile_number
              }
              onBlur={formik.handleBlur('mobile_number')}
            />
          </View>

          <CustomButton
            containerStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            title="Create Employee"
            onPress={formik.handleSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Employee;
