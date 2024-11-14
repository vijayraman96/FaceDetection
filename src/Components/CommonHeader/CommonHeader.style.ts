import { StyleSheet } from "react-native";
import { hp, wp, FontSize, FontFamily, Color } from "../../Theme";


export const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: Color.black,
        height: hp(10),
       
    },
    menuContainer: {
        // marginHorizontal: wp(5),
        height: hp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: wp(5),
        // width: wp(100),
        // backgroundColor: "yellow"
    },
    menuHolder: {
        // position: 'absolute',
        // left: wp(5),
        // top: hp(3.5),
        // backgroundColor: 'pink'
    },
   
    menu : {
        width: wp(6),
        height: hp(3),
        objectFit: 'contain'
    },
    text: {
        fontSize: FontSize.font20,
        lineHeight: FontSize.font24,
        fontFamily: FontFamily.RobotoBold,
        color: Color.white,
        verticalAlign: 'middle',
        // backgroundColor: 'yellow'
        // marginTop: hp(3)
    },
    iconContainer: {
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: wp(10),
        //  backgroundColor: 'yellow'
    },
    iconContainer2: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(17),
    },
    close: {
        
    },
    bgCard: {
        height: hp(10),
        width: wp(100),
        textAlign: 'center',
        justifyContent: 'center'
    }
})

