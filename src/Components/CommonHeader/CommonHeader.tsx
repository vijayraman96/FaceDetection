import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {ImagesPath} from '../../../Assets/ImagePath';
import {styles} from './CommonHeader.style';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../Theme';
import {AnyObject} from '../../Redux/types';

interface CommonHeaderProps {
  title: string;
  isHome?: boolean;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({title, isHome = true}) => {
  const navigation = useNavigation<AnyObject>();

  return (
    <View style={[styles.viewContainer]}>
      <View style={[styles.menuContainer]}>
        <TouchableOpacity
          style={[styles.menuHolder]}
          onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            color={Color.white}
            size={23}
            style={styles.close}
          />
        </TouchableOpacity>

        <Text style={[styles.text]}>{title}</Text>
        <View style={[isHome ? styles.iconContainer2 : styles.iconContainer]}>
          {/* <Icon name="notifications-outline" color={Color.white} size={23} style={styles.close} onPress={undefined}/> */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {isHome && (
              <Icon
                name="home-outline"
                color={Color.white}
                size={23}
                style={styles.close}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommonHeader;
