import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

// Definierar nyckelsträngen som används för att lagra autentiserings-token.
const key = "authToken";

// Funktion för att lagra autentiserings-token i säker lagring.
const storeToken = async (authToken) => {
  try {
   // Försöker lagra autentiserings-token i säker lagring.
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

// Funktion för att hämta autentiserings-token från säker lagring.
const getToken = async () => {
  try {
   // Försöker hämta autentiserings-token från säker lagring.
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

// Funktion för att hämta användaruppgifter från autentiserings-token.
const getUser = async () => {
   // Hämtar autentiserings-token
  const token = await getToken();
  // Om token finns, avkodar och returnerar användaruppgifterna.
  return token ? jwtDecode(token) : null;
};

// Funktion för att ta bort autentiserings-token från säker lagring.
const removeToken = async () => {
  try {
      // Försöker ta bort autentiserings-token från säker lagring.
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };