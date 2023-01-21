import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./screens/splashscreen/SplashScreen";
import Home from "./screens/homepage/Home";
import Login from "./screens/login/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { CoinContextProvider } from "./store/CoinContext";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const navTheme = DefaultTheme;
  navTheme.colors.background = "#94C0C0";

  return (
    <QueryClientProvider client={queryClient}>
      <CoinContextProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="dark" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </CoinContextProvider>
    </QueryClientProvider>
  );
}
