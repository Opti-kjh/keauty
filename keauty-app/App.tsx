import * as React from 'react';
import './i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './app/home/HomeScreen';
import SearchScreen from './app/search/SearchScreen';
import PromotionScreen from './app/promotion/PromotionScreen';
import MessageScreen from './app/message/MessageScreen';
import MyScreen from './app/my/MyScreen';
import type { RouteProp, ParamListBase } from '@react-navigation/native';
import { Text } from 'react-native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Promotion: undefined;
  Message: undefined;
  My: undefined;
};

function MainTabs() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<ParamListBase, string> }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          if (route.name === 'Home') return <Ionicons name="home" size={size} color={color} />;
          if (route.name === 'Search') return <Ionicons name="search" size={size} color={color} />;
          if (route.name === 'Promotion') return <Feather name="percent" size={size} color={color} />;
          if (route.name === 'Message') return <MaterialCommunityIcons name="message-outline" size={size} color={color} />;
          if (route.name === 'My') return <Ionicons name="person" size={size} color={color} />;
          return null;
        },
        tabBarLabel: ({ focused, color }: { focused: boolean; color: string }): React.ReactNode => {
          if (route.name === 'Home') return <Text style={{ color }}>{t('home')}</Text>;
          if (route.name === 'Search') return <Text style={{ color }}>{t('explore')}</Text>;
          if (route.name === 'Promotion') return <Text style={{ color }}>{t('promotion')}</Text>;
          if (route.name === 'Message') return <Text style={{ color }}>{t('message')}</Text>;
          if (route.name === 'My') return <Text style={{ color }}>{t('my')}</Text>;
          return route.name;
        },
        tabBarActiveTintColor: '#222',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Promotion" component={PromotionScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="My" component={MyScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </I18nextProvider>
  );
}
