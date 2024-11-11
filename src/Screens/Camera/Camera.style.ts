import { StyleSheet } from "react-native";
import { hp, wp } from "../../Theme";

export const CameraStyles = StyleSheet.create({
    areaView: {
        flex: 1,
        width: wp(100),
        height: hp(100),
        // backgroundColor: 'red'
    },
    container: {
        backgroundColor: 'gray',
        width: wp(100),
        height: hp(100),
      },
      iconContainer: {
        position: 'absolute',
        bottom: hp(2),
        width: wp(100),
        zIndex: 10,
        height: hp(10),
        paddingHorizontal: wp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      camera: {
        flexGrow: 1,
      },
      back: {
        width: wp(10),
        height: wp(10)
      },
      cameraButton: {
        width: wp(17),
        height: wp(17)
      },
      flip: {
        width: wp(10),
        height: wp(10)
      }
})