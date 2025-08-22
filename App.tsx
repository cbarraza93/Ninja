import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// Import our navigation and state management
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';
import { theme } from './src/theme';
import LoadingScreen from './src/screens/LoadingScreen';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <AppNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
}