import {TITLE_SPACING} from './../../Theme/BaseStyle';
import {Platform, StyleSheet} from 'react-native';
import {FontFamily, FontSize, hp, wp} from '../../Theme';
import {Color} from '../../Theme/Colors';
import {BaseStyles, VIEW_SPACING} from '../../Theme/BaseStyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Color.white,
  },
  inputBox: {
    borderColor: Color.lightGray,
    // borderBottomWidth: wp(0.3),

    width: '100%',
    // height:hp(6)
  },
  inputView: {
    backgroundColor: Color.lightGray,
    width: '100%',
    borderRadius: hp(1),
    // alignItems:"flex-start"
  },
  inputViewText: {
    // backgroundColor: Color.black,
    // alignItems: 'center',
    // justifyContent:'flex-start',
    width: wp(90),
    // paddingHorizontal: VIEW_SPACING ,
  },
  errorGlow: {
    borderColor: Color.red,
  },
  input: {
    fontFamily: FontFamily.RobotoMedium,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingVertical: Platform.OS === 'ios' ? hp(2) : hp(1),
    color: Color.greyText,
    fontWeight: "600",
    // backgroundColor: 'red'
  },
  disableText: {},
  searchIcon: {
    position: 'absolute',
    top: hp(1),
  },
  selectInputBox: {
    // borderRadius:hp(1)
    marginRight: wp(-4),
    flexDirection: 'row-reverse',
    paddingHorizontal: wp(1),
  },
  dropDownText: {
    color: Color.black,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSize.font12,
    textAlign: 'center',
    // width: '100%',
  },
  imageView: {
    // alignItems:"center",
    alignSelf: 'center',
    // justifyContent:"center"
  },
  iconStyle: {
    paddingRight: wp(1),
  },
  dropDownInput: {
    color: Color.white,
    fontFamily: FontFamily.Roboto,
    fontSize: FontSize.font12,
    textAlign: 'center',
    paddingHorizontal: wp(1),
  },
  textItem: {
    color: Color.black,
    fontSize: FontSize.font12,
    textAlign: 'left',
    paddingLeft: wp(3),
  },
  item: {},
  eyeIcon: {
    width: hp(2.5),
    height: hp(2.5),
  },
});