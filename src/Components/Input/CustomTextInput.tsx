import React, {memo, useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TextStyle,
  ImageStyle,
  ViewStyle,
  Text,
} from 'react-native';
// import InsetShadow from 'react-native-inset-shadow';
import {ImagesPath} from '../../../Assets/ImagePath';
import {Color, FontSize, hp, wp} from '../../Theme';
import {styles} from './Input.styles';
import {BaseStyles, VIEW_SPACING} from '../../Theme/BaseStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// MaterialIcons
{
  /* <MaterialIcons
                  name="error"
                  color={Color.error}
                  size={hp(1.5)}
                /> */
}
interface CustomTextInputProps {
  onChangeText?: (text: string) => void;
  onChange?: () => void;
  placeHolder?: string;
  type?: string;
  width?: number;
  containerStyle?: any;
  errorStyle?: TextStyle;
  errorTextStyle?: TextStyle;
  error?: any;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  // error:any;
  value?: string;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  icon?: any;
  textStyle?: any;
  maxLength?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText = () => {},
  onChange = () => {},
  type = '',
  width,
  containerStyle,
  errorStyle,
  errorTextStyle,
  error = '',
  keyboardType = 'default',
  onBlur = () => {},
  onFocus = () => {},
  value = '',
  editable = true,
  placeHolder,
  multiline = false,
  numberOfLines = 1,
  icon,
  textStyle = {},
  maxLength = 100,
  ...otherProps
}) => {
  const isPassword = type === 'password';
  const [showPassword, setShow] = useState(!isPassword);
  const isError = Boolean(error);
  // console.log(value,"valuevaluevalue");

  useEffect(() => {
    if (!editable) {
      setShow(false);
    }
  }, [editable]);

  const onLocalChangeText = (text: string) => {
    let updatedText = text;
    if (type === 'number') {
      updatedText = text?.replace(/[^0-9]/g, '');
    } else if (keyboardType === 'email-address') {
      updatedText = text?.replace(/[^a-zA-Z0-9@._-]/g, '');
    }
    onChangeText(updatedText?.trimStart());
  };

  const onLocalBlur = (e: any) => {
    onChangeText(value ? value : '');
    onBlur(e);
  };
  // console.log(error,"errorerror");

  return (
    <View>
      <View
        style={[
          styles.inputBox,
          {width: width || '100%'},
          containerStyle,
          {position: 'relative'},
          {
            borderColor: error ? Color.error : Color.grey,
          },
        ]}>
        <View
          style={[
            styles.inputViewText,
            {paddingHorizontal: icon ? VIEW_SPACING * 2 : 0},
            isError ? styles.errorGlow : {},
          ]}>
          {icon && (
            <View
              style={{
                position: 'absolute',
                top: hp(1.5),
                left: wp(4),
              }}>
              {icon}
            </View>
          )}
          <TextInput
            {...otherProps}
            keyboardType={
              type === 'number' ? 'number-pad' : keyboardType || 'default'
            }
            secureTextEntry={isPassword && !showPassword}
            style={[styles.input, !editable && styles.disableText, textStyle]}
            onChangeText={onLocalChangeText}
            onChange={onChange}
            onBlur={onLocalBlur}
            onFocus={onFocus}
            value={value}
            editable={editable}
            placeholderTextColor={Color.placeholderColor}
            placeholder={placeHolder}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
          />
        </View>
        {isPassword && (
          <TouchableOpacity
            disabled={!editable}
            onPress={() => setShow(x => !x)}
            style={{position: 'absolute', right: 0, top: hp(2.5)}}>
            {showPassword && editable ? (
              <Image
                source={ImagesPath.eyeOpen}
                style={styles.eyeIcon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={ImagesPath.eyeClose}
                style={styles.eyeIcon}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View
          style={[
            {position: 'absolute', bottom: hp(-2.5), left: wp(1),
            },
            errorStyle,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="error" color={Color.error} size={hp(1.8)} />
            <Text
              style={[
                // BaseStyles.subTitle,
                {
                  color: Color.error,
                  fontSize: FontSize.font13,
                  marginLeft: wp(1),
                },
              ]}>
              {error}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(CustomTextInput);
