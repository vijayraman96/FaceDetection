import { Dimensions, StyleSheet } from 'react-native'
import { BaseStyles, PADDING_HORIZONTAL, VIEW_SPACING } from '../../Theme/BaseStyle'
import { hp, wp } from '../../Theme';
const screenWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: VIEW_SPACING
  },
  inputContainer: {
    // width: wp(100),
    // height: hp(100),
    //  backgroundColor: 'yellow',
    marginTop: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  input: {
    //    marginHorizontal: wp(5),
    // backgroundColor: 'orange',
    width: wp(90),
    marginVertical: hp(2)

  },
  label: {
    ...BaseStyles.label
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
  imageView: {
    // position: 'absolute',
    // top: hp(7),
    // left: 0,
    width: wp(100),
    height: hp(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  face: {
    width: wp(42),
    height: hp(20),
    // resizeMode: 'contain',

  }
})