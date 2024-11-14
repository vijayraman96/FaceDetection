import {useState} from 'react';
import graphHandler from '../../apollo/graphHandler';
import {GET_POST_INFO} from '../../apollo/ApplicationService/ApplicationQueryRequest';
import {GET_ATTENDANCE_LIST} from '../../apollo/ApplicationService/ApplicationQueryRequest'
// import {sortArray} from '../Functions/filter';

function useAttendanceList(preload = false, itemsPerPage = 10) {
  const [attendanceList, setAttendanceList] = useState<any>([]);
  const [loading, setLoading] = useState(preload);
  const [aloading, setALoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [totalAttendanceList, setTotalAttendanceList] = useState(0);

  const getAttendanceList = async (req = {}) => {
    
    try {
      const {data} = await graphHandler().invoke(
        GET_ATTENDANCE_LIST,
        {
          ...req,
          // pagination: {
          //   items_per_page: itemsPerPage,
          //   page_number: page,
          // },
        },
        1,
        false,
        true,
        false,
      );
      // console.log('data', data);
      

      if (data && data.GetAttendanceList && data.GetAttendanceList.attendances) {
        setAttendanceList(data.GetAttendanceList.attendances);
        setLoading(false);
        
      } else {
       setAttendanceList('');
       setLoading(false);
      }
    } catch (error) {
      console.log('attendece Error', error);
      setAttendanceList('');
    } finally {
      setLoading(false);
      setALoading(false);
    }
  };

  

  return {
    loading,
    aloading,
    attendanceList,
    getAttendanceList,
  };
}

export default useAttendanceList;