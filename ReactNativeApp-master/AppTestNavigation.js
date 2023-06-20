import React, { useEffect, useState } from "react";
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Button from './app/components/AppButton';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from "./app/components/Screen"

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
    title="View Tweet"
    onPress={() => navigation.navigate("TweetsDetails", { id: 1})} />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "dodgerblue" },
    headerTintColor: "white",
  }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} options={({ route }) => ({title: route.params.id})} />
  </Stack.Navigator>
  
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: "tomato",
    activeTintColor: "white",
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black'
  }}>
    <Tab.Screen 
    name="Feed" 
    component={Tweets} 
    options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function AppTestNavigation() {
  return(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}