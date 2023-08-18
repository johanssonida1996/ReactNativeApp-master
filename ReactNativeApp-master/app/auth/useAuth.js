import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
   // Hämtar användaruppgifter och funktionen för att uppdatera användaruppgifter från kontexten.
  const { user, setUser } = useContext(AuthContext);

  // Funktion för inloggning.
  const logIn = (authToken) => {
    const user = jwtDecode(authToken);  // Avkodar JWT-token för att få användaruppgifter.
    setUser(user); // Uppdaterar användaruppgifter i kontexten.
    authStorage.storeToken(authToken); // Lagrar autentiserings-token i säker lagring.
  };

  // Funktion för utloggning.
  const logOut = () => {
    setUser(null); // Återställer användaruppgifter i kontexten till null.
    authStorage.removeToken(); // Tar bort autentiserings-token från säker lagring.
  };

  return { user, logIn, logOut };
};
