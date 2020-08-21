import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Info from './pages/Info/Index';
import Points from './pages/Points/Index';
import Detail from './pages/Detail/Index';
import Settings from './pages/Settings/Index';

const AppStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5',
        },
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Points" component={Points} />
      <AppStack.Screen name="Detail" component={Detail} />
      <AppStack.Screen name="Info" component={Info} />
      <AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
