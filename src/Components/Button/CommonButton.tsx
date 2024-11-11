import React, {Component, ReactNode} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import styles from './CommonButton.style';
import {BaseStyles, Color, hp, wp} from '../../Theme';

interface CustomButtonProps {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  isLoading?: boolean;
  icon?: any;
  iconRight?: any;
  buttonTextStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  lightTheme?: boolean;
}

interface CustomButtonState {
  wait: boolean;
}

class CustomButton extends Component<CustomButtonProps, CustomButtonState> {
  constructor(props: CustomButtonProps) {
    super(props);
    this.state = {wait: false};
  }

  onPress = () => {
    this.setState({wait: true});
    setTimeout(() => {
      this.setState({wait: false});
    }, 500);
    if (this.props.onPress) {
      this.props.onPress();
    }
  };
  // const animatedStyle = {
  //   transform: [
  //     {
  //       translateX: animatedValue.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, wp(1)],
  //       }),
  //     },
  //     {
  //       translateY: animatedValue.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, wp(1)],
  //       }),
  //     },
  //   ],
  //   opacity: animatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [1, 0.85],
  //   }),
  // };

  // const shadowStyle = {
  //   top: animatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [wp(1), 0],
  //   }),
  //   left: animatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [wp(1), 0],
  //   }),
  // };
  render(): ReactNode {
    const {wait} = this.state;
    const {
      title,
      containerStyle,
      lightTheme = false,
      disable,
      iconRight = true,
      isLoading,
      icon,
      buttonTextStyle,
    } = this.props;
    return (
      <View style={{position: 'relative'}}>
        <TouchableOpacity
        // activeOpacity={0.5}
          disabled={Boolean(disable || wait)}
          style={[
            containerStyle,
            {
              opacity: disable ? 0.9 : 1,
              // backgroundColor: !disable ? 'transparant' : Color.buttonBG + 'D0',
              // transform: pressed
              //   ? [{translateX: wp(1)}, {translateY: wp(1)}]
              //   : [{translateX: 0}, {translateY: 0}],
              // backgroundColor: pressed ? Color.black : Color.buttonBG,
            },
          ]}
          onPress={this.onPress}
          // delayPressIn={0}
          // delayPressOut={0}
        >
          <>
            {isLoading ? (
              <ActivityIndicator
                color={lightTheme ? Color.black : Color.white}
                size={'small'}
              />
            ) : (
              <View
                style={{
                  flexDirection: iconRight ? 'row-reverse' : 'row',
                  alignItems: 'center',
                }}>
                {icon}
                <Text style={[styles.buttonText, buttonTextStyle]}>
                  {title}
                </Text>
              </View>
            )}
            {/* {!disable && (
                <View
                  style={[
                    containerStyle,
                    BaseStyles.noSpace,
                    {
                      borderBlockColor: pressed
                        ? 'transparent'
                        : Color.buttonBorder,
                      borderTopColor: Color.white,
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      // borderStartEndRadius:hp(2),
                      borderBottomWidth: pressed ? wp(0.6) : wp(1.5),
                      borderRightWidth: pressed ? wp(0.6) : wp(1.5),

                      zIndex: -10000,
                      position: 'absolute',
                      top: pressed ? wp(0) : wp(0.5),
                      left: pressed ? wp(0) : wp(0.5),
                    },
                  ]}
                />
              )} */}
          </>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton;
