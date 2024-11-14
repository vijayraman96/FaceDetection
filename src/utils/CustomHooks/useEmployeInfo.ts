import { useState } from 'react';
import graphHandler from '../../apollo/graphHandler';
import { GET_POST_INFO } from '../../apollo/ApplicationService/ApplicationQueryRequest';
import { GET_ATTENDANCE_LIST, GET_EMPLOYEE_INFO } from '../../apollo/ApplicationService/ApplicationQueryRequest'
// import {sortArray} from '../Functions/filter';

const useEmployeeInfo = (preload = false, itemsPerPage = 10) => {
    const [employeeInfo, setEmployeeInfo] = useState<any>([]);
    const [loading, setLoading] = useState(preload);
    const [aloading, setALoading] = useState(false);


    const getEmployeeInfo = async (req = {}) => {

        try {
            const { data } = await graphHandler().invoke(
                GET_EMPLOYEE_INFO,
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


            if (data && data.GetEmployeeInfo && data.GetEmployeeInfo) {
                setEmployeeInfo(data.GetEmployeeInfo);
                setLoading(false);

            } else {
                setEmployeeInfo('');
                setLoading(false);
            }
        } catch (error) {
            console.log('employee Error', error);
            setEmployeeInfo('');
        } finally {
            setLoading(false);
            setALoading(false);
        }
    };
    return {
        loading,
        aloading,
        getEmployeeInfo,
        employeeInfo,
    };
}

export default useEmployeeInfo;