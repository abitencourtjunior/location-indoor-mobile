import { PermissionsAndroid } from 'react-native';

export const requestWifiPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
      'This app needs location permission as this is required  '
      + 'to scan for wifi networks.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Passou');
      return true;
    }
    console.log('Não Passou');
    return false;
  } catch (err) {
    console.warn(err);
  }
};

export default requestWifiPermission;
