import { StyleSheet } from "react-native";
import { hp, wp } from "../../Theme";

export const styles = StyleSheet.create({
    selectedDate: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
      },
      calendar: {
        marginHorizontal: wp(5),
        resizeMode: 'cover'
      }
})