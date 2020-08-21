import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export const handleNavigationBack = () => {
  navigation.goBack();
};

export const handleNavigationDetail = () => {
  navigation.navigate('Detail');
};

export const handleNavigationSettings = () => {
  navigation.navigate('Settings');
};

export const handleNavigationInfo = () => {
  navigation.navigate('Info');
};

export const handleNavigationLogin = () => {
  navigation.navigate('Login');
};

export default {
  handleNavigationBack,
  handleNavigationDetail,
  handleNavigationSettings,
  handleNavigationInfo,
  handleNavigationLogin,
};
