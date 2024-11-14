import { View, Text, Image } from 'react-native'
import React from 'react';
import {styles} from './Option.style';
import CustomButton from '../../Components/Button/CommonButton';
import { ImagesPath } from '../../../Assets/ImagePath';
import { useNavigation } from '@react-navigation/native';

const Option = () => {
    const navigation = useNavigation();
  return (
    <View style={[styles.optionView]}>
        <Text style={[styles.title]}>Hi Admin, Please choose your activity</Text>
        <Image source={ImagesPath.womanAttendance} style={[styles.womanAttendance]}/>
        <CustomButton
            containerStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            title="Attendance"
            isLoading={false}
            // disable={loading}
            // maxLength={10}
            onPress={ () => navigation.navigate("Attendance")}
          />
           <CustomButton
            containerStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            title="Create Employee"
            isLoading={false}
            // disable={loading}
            // maxLength={10}
            onPress={() => navigation.navigate("Employee")}
            
          />
    </View>
  )
}

export default Option