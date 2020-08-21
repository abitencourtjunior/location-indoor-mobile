import React from 'react';
import {
  View, ImageBackground, StyleSheet, Text, KeyboardAvoidingView, Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icons/Index';
import homeBackground from '../../assets/home-background.png';
import Logo from '../../components/Logo/Index';
import { COLORS } from '../../config/theme';

const titleSystem = 'Sistema de localização de pessoas com rede sem fio';
const description = 'Ajudamos pessoas que tenham deficiência visual a se localizarem em ambiente local privado';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigationToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ImageBackground
        style={styles.container}
        source={homeBackground}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Logo />
          <View>
            <Text style={styles.title}>{titleSystem}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>

        <View style={styles.footer}>

          <RectButton style={styles.button} onPress={handleNavigationToLogin}>
            <Icon name="arrow-right" color="#FFF" size={24} />
            <Text style={styles.buttonText}>
              Login
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
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu-Bold',
    fontWeight: '700',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

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

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Home;
