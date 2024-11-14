import { StyleSheet } from "react-native";
import { BaseStyles, wp, hp, Color, FontSize, FontFamily } from "../../Theme";

export const styles = StyleSheet.create({
    optionView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white

    },
    buttonTextStyle: {
        ...BaseStyles.buttonText,
      },
      buttonStyle: {
        ...BaseStyles.buttonStyle,
        width: wp(90),
        marginHorizontal: wp(5),
        marginTop: hp(3)
      },
      womanAttendance: {
        width: wp(90),
        height: hp(40),
        resizeMode: 'cover'
      },
      title: {
        fontSize: FontSize.font23,
        lineHeight: FontSize.font26,
        color: Color.black,
        fontFamily: FontFamily.RobotoBold,
        alignSelf: 'center',
        fontWeight: '800'
      }

})
