/* Autentiseringskontexten (Authentication Context) i React är en funktion som tillhandahåller en smidig och 
effektiv metod för att dela autentiseringsrelaterad information, som inloggningstillstånd eller användaruppgifter, 
mellan komponenter utan att behöva skicka data genom hela komponentträdet manuellt.

Här är hur autentiseringskontexten fungerar:

Skapa kontexten: Först skapar du en kontext med hjälp av React.createContext(). 
Detta skapar en kontextbehållare som innehåller två komponenter - en Provider och en Consumer.

Provider: Provider-komponenten omsluter en del av ditt komponentträd där autentiseringsinformationen ska vara tillgänglig. 
Den tar emot data (till exempel autentiseringsstatus eller användaruppgifter) som ska delas med andra komponenter. 
Provider-komponenten kan placeras högre upp i komponentträdet och gör informationen tillgänglig för alla komponenter som ligger under den i hierarkin.

Consumer: Consumer-komponenten används i de komponenter som behöver få tillgång till autentiseringsinformationen. 
Den tar emot datan från Provider och gör den tillgänglig i dessa komponenter utan att behöva passera datan genom props.

Använda kontexten: Komponenter som behöver autentiseringsinformation kan enkelt prenumerera på och få tillgång till den via Consumer-komponenten. 
Detta gör det möjligt att visa olika innehåll eller beteenden baserat på autentiseringsstatus eller användaruppgifter.

*/

// Här är ett enkelt exempel på hur autentiseringskontexten kan användas:

// AuthContext.js
import React from "react";

// Skapar en kontext för autentisering.
const AuthContext = React.createContext();

export default AuthContext;

// App.js
import React, { useContext } from "react";
import AuthContext from "./AuthContext";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {authContext.isAuthenticated ? (
        <p>Välkommen, {authContext.user.name}!</p>
      ) : (
        <p>Logga in för att fortsätta.</p>
      )}
    </div>
  );
}