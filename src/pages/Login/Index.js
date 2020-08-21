import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icons/Index';

import homeBackground from '../../assets/home-background.png';
import Logo from '../../components/Logo/Index';
import { COLORS } from '../../config/theme';

const Login = () => {
  const navigation = useNavigation();

  const handleNavigationToPoints = () => {
    navigation.navigate('Points');
  };

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ImageBackground
        style={styles.container}
        source={homeBackground}
        imageStyle={{ width: 274, height: 368 }}
      >
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-left" size={24} color={COLORS.YELLOW} isBack />
        </TouchableOpacity>
        <View style={styles.main}>

          <Logo />

          <TextInput style={styles.input} placeholder="Informe seu RA" />
          <TextInput style={styles.input} placeholder="Informe sua Senha" />

          <RectButton style={styles.button} onPress={handleNavigationToPoints}>
            <Icon name="arrow-right" color="#FFF" size={24} />
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>

        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + StatusBar.currentHeight,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  image: {
    paddingHorizontal: 48,
    marginBottom: 24,
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: COLORS.YELLOW,
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default Login;
