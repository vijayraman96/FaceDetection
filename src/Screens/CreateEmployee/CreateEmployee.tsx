import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CreateEmployee.style';
import CustomButton from '../../Components/Button/CommonButton';
import { rSetEmployeeDetails, rUpdateEmployeeDetails } from '../../Redux/Employee/action';
import { useNavigation } from '@react-navigation/native';
 const CreateEmployee = () =>  {

const [imageUrl, setImageUrl] = useState<any>('');
const dispatch = useDispatch<any>();
const navigation = useNavigation();
    const {
        employee,
        } = useSelector((state:any) => state.Employee);
    
      useEffect(() => {
        
        const imageUrl = employee && employee.employee_image_url.url;
    
        setImageUrl(imageUrl)
      }, [employee])

      const handleSubmit = () => {
          let request = {
      user_type: 'Employee',
      user_name: employee?.employee_name ,
      company_name: employee?.company_name,
      employee_uid: employee?.employee_uid,
      employee_image_url:  {
        key: employee?.employee_name,
        sort_order: 1,
        image_type: employee.employee_image_url.image_type,
        url: employee.employee_image_url.url
      }
    };
   
    dispatch(rUpdateEmployeeDetails(request));

     request = {
        user_type: 'Employee',
      user_name: "" ,
      company_name: "",
      employee_uid: "",
      employee_image_url:  {
        key: "",
        sort_order: 1,
        image_type: "",
        url: ""
      }
    }
    dispatch(rSetEmployeeDetails(request));

    setTimeout(() => {
        navigation.navigate('Employee')
    }, 1000)
   

    
      }
  return (
   <SafeAreaView style={{flex: 1}}>
    <View style={[styles.viewContainer]}>
        <Image source={{ uri: imageUrl }} style={[styles.imageContainer]}/>

        <View style={[styles.textContainer]}>
            <Text style={[styles.text]}>Name: {employee?.employee_name || ""}</Text>
            <Text style={[styles.text]}>Company Name: {employee?.company_name}</Text>
            <Text style={[styles.text]}>Employee id: {employee?.employee_uid || ""} </Text>
            <CustomButton
            containerStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            title="Update Profile"
            // isLoading={loading}
            // disable={loading}
            // maxLength={10}
            onPress={handleSubmit}
          />
        </View>

    </View>

   </SafeAreaView>
  )
}


export default CreateEmployee