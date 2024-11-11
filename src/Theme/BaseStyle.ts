// import { PADDING_HORIZONTAL } from './BaseStyle';
import {Platform, StyleSheet} from 'react-native';
import {FontFamily, FontSize, hp, wp, Color, height} from '.';
export const ICON_SIZE = hp(2.2);
//App spacings
export const VIEW_SPACING = hp('2.8%');
export const TITLE_SPACING = hp('1.5%');
export const PADDING_HORIZONTAL = VIEW_SPACING;
export const CARD_SPACING = VIEW_SPACING / 2;
export const BaseStyles = StyleSheet.create({
  relative: {
    position: 'relative',
  },
  //Base component spacings
  viewPT: {
    paddingTop: VIEW_SPACING,
  },
  viewPB: {
    paddingBottom: VIEW_SPACING,
  },
  viewMT: {
    marginTop: VIEW_SPACING,
  },
  viewMB: {
    marginBottom: VIEW_SPACING,
  },
  horizontalSpacing: {
    marginHorizontal: wp(5)
  },
  viewPadding: {
    padding: VIEW_SPACING,
  },
  viewPL: {
    paddingLeft: VIEW_SPACING,
  },
  viewPR: {
    paddingRight: VIEW_SPACING,
  },

  viewMargin: {
    marginHorizontal: VIEW_SPACING,
  },
  viewML: {
    marginLeft: VIEW_SPACING,
  },
  viewMR: {
    marginRight: VIEW_SPACING,
  },
  noSpace: {
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  boxShadow: {
    shadowColor: Color.grey,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 8,
  },
  noVerMargin: {marginTop: 0, marginBottom: 0},

  ///containers
  container: {
    paddingTop: VIEW_SPACING,
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },

  containerPadding: {
    // flex: 1,
    backgroundColor: Color.white,
    position: 'relative',
    width: wp(100),
  },
  containerPB: {
    paddingBottom: hp(10),
  },
  HorizontalPadding: {
    //containerHorizontalPadding for ALL PAGES
    paddingHorizontal: PADDING_HORIZONTAL,
  },

  //buttons
  buttonStyle: {
    backgroundColor: Color.buttonBG,
    alignSelf: 'center',
    width: wp('35%'),
    height: hp('6.6%'),
    borderRadius: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: FontSize.font14,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.Roboto,
    fontWeight: '700',
    textTransform: 'none',
  },
  lightButtonStyle: {
    alignSelf: 'center',
    width: wp('35%'),
    height: hp('6.6%'),
    borderRadius: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.black,
    // borderTopColor: Color.black,
    borderWidth: wp(0.4),
    backgroundColor: Color.white,
    // zIndex: -1,
  },
  lightButtonTextStyle: {
    fontSize: FontSize.font14,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FontFamily.Roboto,
    color: Color.black,
  },
  //title
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Roboto,
    fontWeight: '700',
    marginTop: VIEW_SPACING,
    color: Color.black,
  },
  titleContainer: {
    // paddingTop: TITLE_SPACING,
    // paddingBottom: TITLE_SPACING,
  },
  subTitle: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Roboto,
    fontWeight: '600',
    marginTop: TITLE_SPACING,
    color: Color.subTitleColor,
  },

  //heading
  headingContainer: {
    marginTop: TITLE_SPACING,
  },
  heading: {
    fontSize: FontSize.font24,
    fontFamily: FontFamily.Roboto,
    fontWeight: '700',
    marginTop: TITLE_SPACING,
    color: Color.titleColor,
  },
  subHeading: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Roboto,
    fontWeight: '400',
    marginTop: TITLE_SPACING,
    color: Color.subTitleColor,
  },
  secondaryHeading: {
    fontFamily: FontFamily.Roboto,
    fontSize: FontSize.font18,
    fontWeight: '700',
    marginTop: VIEW_SPACING,
    color: Color.titleColor,
  },
  label: {
    // ...subTitle,
    // fontSize: FontSize.font12,
    fontFamily: FontFamily.RobotoMedium,
    // fontWeight: '700',
    marginTop: TITLE_SPACING,
    color: Color.primaryColor,
    fontSize: FontSize.font14,
    // paddingBottom: TITLE_SPACING,
  },
  inputTextStyle: {
    fontFamily: FontFamily.RobotoMedium,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingVertical: Platform.OS === 'ios' ? hp(2) : hp(1),
    color: Color.greyText,
    // fontWeight: '400',
  },
  appLogo: {
    width: wp(40),
    height: hp(10),
    margin: 0,
    padding: 0,
  },
  fullBorderStyle: {
    borderRadius: hp(1),
    borderColor: Color.grey,
    borderWidth: wp(0.3),
  },
  bottomBorderStyle: {
    borderRadius: hp(1),
    borderColor: Color.grey,
    borderBottomWidth: wp(0.3),
  },
  BGcolor: {backgroundColor: Color.bgColor},
  //others
  blackText: {
    color: Color.black,
  },
  greyText: {
    color: Color.greyText,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  textCenter: {
    textAlign: 'center',
  },
  Lexend: {
    fontFamily: FontFamily.Roboto,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
});
