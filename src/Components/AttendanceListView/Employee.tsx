import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './Employee.style';
import useEmployeeInfo from '../../utils/CustomHooks/useEmployeInfo';
import { AnyObject } from 'yup';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Employee = ({item}:AnyObject) => {
//   console.log('item', item);
  const {getEmployeeInfo, employeeInfo} = useEmployeeInfo();
//   const {user}: any = useSelector(({Auth}: any) => Auth);
  useEffect(() => {
    getEmployeeInfo({user_id : item.employee_id});
  }, [item]);
//   console.log(item,"item")
//   console.log(employeeInfo.user,"employeeInfo");

  return (
    <View style={[styles.attendanceCard]}>
      <View style={[styles.cardView]}>
        <View style={[styles.leftContainer]}>
          <Image
            source={{
              uri:
                item?.employee_image_url?.url || 'https://placeholder.com/100',
            }}
            style={[styles.profileImage]}
          />
        </View>
        <View style={[styles.rightContainer]}>
          <Text style={[styles.name]}>Name: {employeeInfo?.employee?.employee_image_url?.key} </Text>
          <Text style={[styles.employeeId]}>
            Employee Id: {employeeInfo?.employee?.employee_uid || 'N/A'}
          </Text>
          <Text style={[styles.companyName]}>Company Name: {employeeInfo?.employee?.company_name ?? ""} </Text>
        </View>
      </View>
      <View style={[styles.bottomContainer]}>
      <Text style={[styles.fromDate]}>Time: {moment(item.time_stamp).format('YYYY-MM-DD hh:mm A')}</Text>
        {/* <Text style={[styles.toDate]}>Check Out: </Text> */}
      </View>
    </View>
  );
};

export default Employee;
