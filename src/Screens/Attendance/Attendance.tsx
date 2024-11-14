import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component
import {styles} from './Attendance.style';
import CommonHeader from '../../Components/CommonHeader/CommonHeader';
import AttendanceListView from '../../Components/AttendanceListView/AttendanceListView';
import useAttendanceList from '../../utils/CustomHooks/useAttendanceList';
import {ScrollView} from 'react-native-gesture-handler';
import {Color, hp} from '../../Theme';

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString();
};

const getTodayDateISO = () => {
  return new Date().toISOString();
};
const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState(getYesterdayDate());
  const [toDate, setToDate] =useState(getTodayDateISO()); 
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const {attendanceList, getAttendanceList,loading} = useAttendanceList(true);

  useEffect(() => {
    // console.log('fromDate', fromDate, 'toDate', toDate);
    getAttendanceList({
      dateFilter: {
        date_from: fromDate,
        date_to: toDate,
      },
    });
  }, [fromDate, toDate]);
console.log(attendanceList,"attendanceList");
if(loading) return <View style = {{justifyContent:"center",flex:1}}>
  <ActivityIndicator size={"large"}  color={Color.black}  />
  </View>
  return (
    <View style={{paddingBottom: hp(8)}}>
      <CommonHeader title={'Attendance'} />

      {/* Accordion toggle button */}
      <TouchableOpacity
        onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={
              isCalendarVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
            }
            size={24}
            color="black"
          />
          <Text style={{color: 'black', fontSize: 16, marginRight: 5}}>
            Calendar
          </Text>
        </View>
      </TouchableOpacity>

      {/* Conditionally render the Calendar */}
      {isCalendarVisible && (
        <Calendar
          style={[styles.calendar]}
          onDayPress={day => {
            setSelectedDate(day.dateString);
            const date = new Date(day.dateString);
            const isoDate = date.toISOString();
            setFromDate(isoDate);
            const currentIsoDate = new Date().toISOString();
            setToDate(currentIsoDate);
          }}
          markedDates={{
            [selectedDate]: {selected: true, selectedColor: '#2a9df4'},
          }}
          theme={{
            selectedDayBackgroundColor: '#2a9df4',
            todayTextColor: '#2a9df4',
            arrowColor: '#2a9df4',
          }}
        />
      )}

      <ScrollView style={{paddingBottom: hp(10)}}>
        <AttendanceListView attendanceList={attendanceList} />
      </ScrollView>
    </View>
  );
};

export default Attendance;
