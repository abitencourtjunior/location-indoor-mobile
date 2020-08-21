import React from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/Icons/Index';
import { COLORS } from '../../config/theme';

const Container = styled.View`
    flex: 1;
    padding: 32px;
    paddingTop: 42px;
`;

const Default = ({ buttonBack, children }) => {
  const navigation = useNavigation();

  const handleNavigationBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        {buttonBack && (
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-left" size={24} color={COLORS.YELLOW} isBack={buttonBack} />
        </TouchableOpacity>
        )}
        {children}
      </Container>
    </SafeAreaView>
  );
};

export default Default;
