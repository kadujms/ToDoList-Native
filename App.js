import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./pages/splash-screen";
import Home from "./pages/home";
import TarefaAberta from "./pages/tarefaAberta";
import { pt, registerTranslation } from "react-native-paper-dates";
import AddTarefa from "./pages/addTarefa";
import Teste from "./service/teste";

const Stack = createNativeStackNavigator();

export default function App() {
  registerTranslation("pt", pt);
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ title: null }}
        />
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{ title: null }}

        />
        <Stack.Screen
          name="tarefaAberta"
          component={TarefaAberta}
          options={{ title: null }}
        />
        <Stack.Screen
          name="addTarefa"
          component={AddTarefa}
          options={{ title: null }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
