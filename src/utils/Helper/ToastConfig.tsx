import {View, StyleSheet} from 'react-native';
import {BaseToast, ErrorToast, ToastProps } from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Color, FontFamily, FontSize, hp, wp} from '../../Theme';
import { VIEW_SPACING } from '../../Theme/BaseStyle';

const ToastConfig = {
    success: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={styles.successToast}
        contentContainerStyle={styles.contentContainer}
        text1Style={styles.text1}
        text2Style={styles.text2}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <AntIcon name="checkcircleo" size={wp(6)} color={Color.darkGreen} />
          </View>
        )}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        style={styles.errorToast}
        contentContainerStyle={styles.contentContainer}
        text1Style={styles.text1}
        text2Style={styles.text2}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <Icon name="error" size={wp(6)} color={Color.red + 'B0'} />
          </View>
        )}
      />
    ),
    info: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={styles.infoToast}
        contentContainerStyle={styles.contentContainer}
        text1Style={styles.text1}
        text2Style={styles.text2}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <Icon name="info" size={wp(6)} color={Color.blue} />
          </View>
        )}
      />
    ),
  };

const styles = StyleSheet.create({
  successToast: {
    borderLeftWidth: 0,
    backgroundColor: Color.primaryColor,
    pointerEvents: 'none',
    marginTop:hp(0.8),

  },
  errorToast: {
    borderLeftWidth: 0,
    backgroundColor: Color.primaryColor,
    pointerEvents: 'none',
    marginTop:hp(0.8),

  },
  infoToast: {
    borderLeftWidth: 0,
    backgroundColor: Color.primaryColor,
    pointerEvents: 'none',
    marginTop:hp(0.8),
    // marginTop:VIEW_SPACING

  },
  contentContainer: {
    paddingHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical:hp(2)
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(8),
  },
  text1: {
    fontSize: FontSize.font14,
    color: Color.white,
    fontWeight: '400',
    // paddingRight:wp(8),
    width: wp(60),
    fontFamily: FontFamily.Roboto,
  },
  text2: {
    fontSize: 14,
    width: wp(60),

    paddingRight: wp(8),
    color: Color.white,
  },
});

export default ToastConfig;
