import { StyleSheet } from "react-native";
import { hp, wp, Color, FontSize, FontFamily, BaseStyles } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    padding: hp(2),
  },
  inputContainer: {
    marginBottom: hp(2), // Add spacing between inputs
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ddd',
    paddingHorizontal: hp(0),
    paddingVertical: hp(1),
    width: wp(90),
    // height: hp(100)
  },
  inputStyle: {
    flex: 1,
    fontSize: hp(2),
    color: '#000',
  },
  iconStyle: {
    marginRight: hp(1),
  },
  errorText: {
    color: Color.red,
    marginBottom: hp(1),
    marginLeft: hp(1),
  },
  ProfileView: {
    paddingHorizontal: wp(5),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile: {
    fontSize: FontSize.font20,
    lineHeight: FontSize.font23,
    marginBottom: hp(4),
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: FontFamily.RobotoBold,
    fontWeight: '800',
    color: Color.black
  },
  //   buttonStyle: {
  //       backgroundColor: Color.black,
  //       width: wp(40),
  //       height: hp(6),
  //       borderRadius: wp(2),
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       marginTop: hp(2)
  //   },
  buttonText: {
    fontFamily: FontFamily.Roboto,
    fontSize: FontSize.font20,
    color: Color.white
  },
  loginContainer: {

    //  backgroundColor: 'yellow',
    // width: wp(100),
    // height: hp(100),
    paddingHorizontal: wp(5),

    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center'
  },
  input: {
    width: wp(90),
    height: hp(6),
    marginVertical: hp(3)
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
    marginTop: hp(6)
  },
  imageView: {
    position: 'absolute',
    top: hp(10),
    left: 0,
    width: wp(100),
    height: hp(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  employee: {
    width: wp(30),
    height: hp(15),
    resizeMode: 'cover',

  }
  // Your styles remain unchanged
});

