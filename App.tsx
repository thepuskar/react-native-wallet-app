import { useFonts } from "expo-font";
import { Welcome } from "./screens/Welcome";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Welcome />;
}
