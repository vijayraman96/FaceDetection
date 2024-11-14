import { StyleSheet } from "react-native";
import { Color, FontSize, hp, wp } from "../../Theme";

export const styles = StyleSheet.create({
    attendanceCard: {
        marginHorizontal: wp(5),
        marginTop: hp(2),
        marginBottom: hp(3),
        borderRadius: wp(5),
        // backgroundColor: 'yellow',
        // paddingHorizontal: wp(3),
        paddingTop: hp(2),
        backgroundColor: Color.white,
        overflow: 'hidden'
    },
    cardView: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: wp(5),
    },
    profileImage: {
        width: wp(10),
        height: wp(10),
        resizeMode: 'cover',
        borderRadius: wp(50),
        marginRight: wp(8)
    },
    leftContainer: {

    },
    rightContainer: {


    },
    name: {
        color: Color.black
    },
    companyName: {
        color: Color.black
    },
    employeeId: {
        color: Color.black
    },
    bottomContainer: {
        borderTopColor: Color.lightGray,
        borderTopWidth: 1,
        height: hp(5),
        marginTop: hp(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(5)
    },
    fromDate: {
        color: Color.black,
        fontSize: FontSize.font14
    },
    toDate: {
        color: Color.black,
        fontSize: FontSize.font14
    }
})
