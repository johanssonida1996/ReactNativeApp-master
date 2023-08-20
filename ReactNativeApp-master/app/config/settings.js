import { Constants } from "expo-constants";

const settings = {
   dev: {
      apiUrl: 'http://192.168.50.142:9000/api' //Kom ihåg att ändra beroende på vart du sitter och jobbar
   },
   staging: {
      apiUrl: 'http://192.168.50.142:9000/api' //Kom ihåg att ändra beroende på vart du sitter och jobbar
   },
   prod: {
      apiUrl: 'http://192.168.50.142:9000/api' //Kom ihåg att ändra beroende på vart du sitter och jobbar
   },
};

const getCurrentSettings = () => {
   if (__DEV__) return settings.dev;
   if (Constants.manifest.releaseChannel === "staging") return settings.staging;
   return settings.prod;
 };
 
 export default getCurrentSettings();