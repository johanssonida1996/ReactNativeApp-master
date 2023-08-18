import React, { useState, useEffect } from 'react'; // Lägg till useEffect
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen'; // Uppdaterad import
// Ta bort importen för expo-app-loading

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      await SplashScreen.preventAutoHideAsync(); // Förhindra att splash screen försvinner automatiskt
      await restoreUser();
      setIsReady(true);
      SplashScreen.hideAsync(); // Dölj splash screen när appen är redo
    };
    prepareApp();
  }, []); // Använd useEffect för att köra detta när komponenten monteras

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}




