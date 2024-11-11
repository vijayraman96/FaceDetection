import { FontFamily, FontSize } from '../../Theme/FontSize';
import { StyleSheet } from "react-native";
import { Color, hp, wp } from "../../Theme";

export const styles = StyleSheet.create({
    uploadScreenView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(100)
    },
    uploadView: {
        width: wp(60),
        height: wp(60),
        marginTop: hp(3)
        // r: 'cover'
    },
    buttonStyle: {
        backgroundColor: Color.black,
        width: wp(40),
        height: hp(6),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(4)
    },
    buttonText: {
        fontFamily: FontFamily.Roboto,
        fontSize: FontSize.font20,
        color: Color.white
    },
    captureContainer: {
        width: wp(40),
        height: hp(30),
        // r :'cover'
    },
    captureButton: {
        backgroundColor: Color.black,
        width: wp(40),
        height: hp(6),
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2)
    },
    cameraPreview: {
        width: wp(40),
        height: hp(6),
    },
    camera: {
        // flex: 1,
        width: wp(80),
        height: hp(30),
        // r: 'cover'
      },
      faceDetected: {
        color: 'green',
        fontSize: 18,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
      },
      noFaceDetected: {
        color: 'red',
        fontSize: 18,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
      },
      overlay: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
      },
      faceDetectedText: {
        color: 'green',
        fontSize: 18,
      },
      preview: {
        // justifyContent: 'flr
        width: '100%',
        height: '30%',
        // r: 'contain'
      },
      cameraView: {
        width: wp(80),
        height: hp(20),
      },
      pictureText: {
        fontSize: FontSize.font24,
        lineHeight: FontSize.font26,
        color: Color.black,
        fontWeight: '800',
        marginBottom: hp(3)
      }
     
})