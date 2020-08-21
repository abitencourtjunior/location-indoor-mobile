import React from 'react';
import {
  Text, View, StyleSheet, StatusBar, TouchableOpacity, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import WifiManager from 'react-native-wifi-reborn';
import { COLORS } from '../../config/theme';
import { requestWifiPermission } from '../../services/permission';

const Points = () => {
  const getAllNetworks = async () => {
    const results = await WifiManager.loadWifiList();
    const wifiArray = JSON.parse(results);
    wifiArray.map((value, index) => {
      console.log(`Wifi ${index + 1} - ${value.SSID}`);
      console.log(value);
    });
  };
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  const handleNavigationDetail = () => {
    navigation.navigate('Detail');
  };

  const handleNavigationSettings = () => {
    navigation.navigate('Settings');
  };

  const handleNavigationInfo = () => {
    navigation.navigate('Info');
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-left" size={24} color={COLORS.YELLOW} />
        </TouchableOpacity>

        <Text style={styles.title}>
          Bem vindo caro usuário
        </Text>
        <Text style={styles.description}>
          Nesta tela iremos lhe ajudar a localizar-se no ambiente!
        </Text>

        <TouchableOpacity style={styles.search} onPress={requestWifiPermission}>
          <Icon name="wifi" size={36} color={COLORS.YELLOW} />
          <Text style={styles.descriptionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.search} onPress={getAllNetworks}>
          <Icon name="wifi" size={36} color={COLORS.YELLOW} />
          <Text style={styles.descriptionIcon} />
        </TouchableOpacity>

      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity style={styles.item} onPress={handleNavigationSettings}>
            <Icon name="settings" size={36} color={COLORS.YELLOW} />
            <Text style={styles.descriptionIcon}>
              Configurações
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleNavigationDetail}>
            <Icon name="user" size={36} color={COLORS.YELLOW} />
            <Text style={styles.descriptionIcon}>
              Perfil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleNavigationInfo}>
            <Icon name="info" size={36} color={COLORS.YELLOW} />
            <Text style={styles.descriptionIcon}>
              Informações
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + StatusBar.currentHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Bold',
    fontWeight: '700',
    marginTop: 24,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  descriptionIcon: {
    color: '#6C6C80',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 8,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },

  search: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 8,
    paddingVertical: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 13,
  },
});

export default Points;
