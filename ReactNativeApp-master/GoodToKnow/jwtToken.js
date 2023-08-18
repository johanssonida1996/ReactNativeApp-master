/*
Självklart! jwtDecode är en JavaScript-biblioteksfunktion som används för att avkoda JSON Web Tokens (JWT) och få tillbaka dess innehåll i klartext. 
En JWT är en kompakt, självständig och säker representationsmetod för att överföra information mellan två parter som består av en JSON-objektsträng. 
Denna token används ofta för att verifiera identitet och tilldela behörigheter i webbapplikationer och API:er.

Här är hur jwtDecode fungerar och används:

Installera biblioteket: För att använda jwtDecode, måste du först installera biblioteket jwt-decode med hjälp av npm eller yarn.

Importera biblioteket: Efter installationen kan du importera jwtDecode-funktionen i din kod.

Använda funktionen: När du har en JWT kan du använda jwtDecode-funktionen för att avkoda den och få tillbaka dess innehåll. 
Detta innehåll inkluderar oftast olika claims (påståenden) som används för att överföra användarinformation och behörigheter.

*/

// Här är ett exempel på hur jwtDecode kan användas:

import jwtDecode from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Din JWT här

const decodedToken = jwtDecode(token);

console.log(decodedToken);

/* 
'decodedToken' kommer nu att innehålla det dekrypterade innehållet av din JWT. 
Det kan inkludera saker som utgångsdatum, utfärdare, användar-ID, behörigheter och mer, beroende på hur din JWT är strukturerad.

Det är viktigt att komma ihåg att även om jwtDecode ger dig tillgång till JWT:ns innehåll, är det inte lämpligt för att verifiera JWT:ns äkthet. 
För att verifiera en JWT bör du använda dess signatur och rätt bibliotek för tokenhantering, som "jsonwebtoken" på serversidan.

*/