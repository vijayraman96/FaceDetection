// import React, {useEffect, useMemo, useState, useRef} from 'react';
// import Orientation, {
//   ALL_ORIENTATIONS_BUT_UPSIDE_DOWN,
//   LANDSCAPE,
//   OrientationLocker,
//   PORTRAIT,
// } from 'react-native-orientation-locker';
// import {Alert, DeviceEventEmitter, Linking, StatusBar} from 'react-native';
// import {CommonActions, useNavigation} from '@react-navigation/native';
// import {rSetBrand} from '../Redux/Auth/action';
// import {useDispatch, useSelector} from 'react-redux';
// import {rGetNotifications} from '../Redux/DataSet/action';
// import useSplendidURLRouter from '../utils/Functions/useSplendidURLRouter';

// const ControlContext = React.createContext({
//   switchMode: () => {},
// });

// export const ControlContextProvider = ({children}: any) => {
//   const [mode, setMode] = useState('Phone');
//   const [brandId, setBrandId] = useState(null);
//   const dispatch = useDispatch();
//   const {notifications, counter} = useSelector(({DataSet}: any) => DataSet);
//   const {deepLinkRoute} = useSplendidURLRouter();
//   const {isLogin, user, loading, isLoading, is_affliated} = useSelector(
//     ({Auth}: any) => Auth,
//   );
//   const listenerRef = useRef<any>(null);
//   const navigation = useNavigation<any>();

//   useEffect(() => {
//     linkConfig();
//     return () => {
//       listenerRef.current && listenerRef.current.remove();
//     };
//   }, []);

//   const linkConfig = async () => {
//     listenerRef.current = Linking.addEventListener('url', linkPass => {
//       deepLinkRoute(linkPass?.url);
//     });
//     const linkPass = await Linking.getInitialURL();
//     linkPass && deepLinkRoute(linkPass);
//   };

//   useEffect(() => {
//     const fetchNotifications = () => {
//       if (user.user_id && isLogin) {
//         dispatch(rGetNotifications({user_id: user.user_id}));
//       }
//     };

//     fetchNotifications();
//     const intervalId = setInterval(fetchNotifications, 180000);
//     // 3 mins Timer interval

//     return () => clearInterval(intervalId);
//   }, [isLogin, user.user_id, counter]);

//   const checkType = (val: any) => {
//     if (val === 'Phone') {
//       Orientation.lockToPortrait();
//       StatusBar.setHidden(false);
//     } else if (val === 'Video') {
//       StatusBar.setHidden(true);
//       Orientation.unlockAllOrientations();
//     }
//   };

//   const switchMode = (val = 'Phone') => setMode(val);

//   useMemo(() => {
//     checkType(mode);
//   }, [mode]);

//   return (
//     <ControlContext.Provider
//       value={{
//         switchMode,
//       }}>
//       <OrientationLocker
//         orientation={
//           mode === 'Phone'
//             ? PORTRAIT
//             : mode === 'Video'
//             ? LANDSCAPE
//             : ALL_ORIENTATIONS_BUT_UPSIDE_DOWN
//         }
//       />
//       <StatusBar
//         backgroundColor="transparent"
//         showHideTransition="slide"
//         translucent
//         barStyle="dark-content"
//         animated={true}
//       />
//       {children}
//     </ControlContext.Provider>
//   );
// };

// export const useOrientation = () => React.useContext(ControlContext);

// export const withSheet = (Component: any) => (props: any) =>
//   (
//     <ControlContextProvider>
//       <Component {...props} />
//     </ControlContextProvider>
//   );
