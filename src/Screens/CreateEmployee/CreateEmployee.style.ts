import { Color, FontSize, hp, wp } from '../../Theme';
import { BaseStyles, PADDING_HORIZONTAL } from './../../Theme/BaseStyle';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        paddingHorizontal: wp(5),
        width: wp(100),
        height: hp(100),
        // backgroundColor: 'red'
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: wp(50),
        height: wp(50),
        alignSelf: 'center',
        marginVertical: hp(4),
        borderRadius: wp(50)
    },
    textContainer: {
        marginVertical: hp(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: FontSize.font16,
        lineHeight: FontSize.font18,
        color: Color.black,
        marginVertical: hp(1)
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
})