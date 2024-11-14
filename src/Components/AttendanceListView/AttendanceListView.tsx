import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './AttendanceListView.style';
import Employee from './Employee';
const AttendanceListView = (attendanceList: any) => {
  // console.log('attendanceList3');
  let attendance = attendanceList.attendanceList;
  return (
    <View>
      {attendance && attendance.length > 0 ? (
        attendance.map((item: any, index: any) => (
          <Employee item={item} key={index} />
        ))
      ) : (
        <Text style={{textAlign: 'center', marginTop: 20}}>
          No attendance records available.
        </Text>
      )}
    </View>
  );
};

export default AttendanceListView;
