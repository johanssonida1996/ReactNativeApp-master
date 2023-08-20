import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = (notificationListener) =>{
   useEffect(() => {
      registerForPushNotifications();

      if(notificationListener) Notifications.addPushTokenListener(notificationListener);
    }, []);
  
    const registerForPushNotifications = async () =>{
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
  
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
  
      if (finalStatus !== 'granted') {
        console.log('Permission not granted for notifications');
        return;
      }
  
      try {
        const token = await Notifications.getExpoPushTokenAsync();
        expoPushTokensApi.register(token.data);
  
      } catch (error) {
        console.log('Error getting a push token', error);
      }
    };
}