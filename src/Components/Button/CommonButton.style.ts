import {StyleSheet} from 'react-native';
import {FontSize} from '../../Theme/FontSize';
import { wp } from '../../Theme';

const styles = StyleSheet.create({
  buttonText: {
    // textTransform: 'uppercase',
    fontSize: FontSize.font18,
    lineHeight: 24,
    color: '#142C52',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingHorizontal:wp(2),
  },
});

export default styles;
