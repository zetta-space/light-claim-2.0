import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Root from "./src/routes/Root";
import CameraComponent from "./src/components/Camera";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Camera" component={CameraComponent} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
