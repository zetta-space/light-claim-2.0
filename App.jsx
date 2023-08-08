import HomeScreen from "./src/views/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JobScreen from "./src/views/JobScreen";
import NotificationScreen from "./src/views/NotificationScreen";
import ProfileScreen from "./src/views/ProfileScreen";
import { Icon } from "react-native-eva-icons";
import { colors } from "./src/utils/colorCodes";
import NewRecordScreen from "./src/views/NewRecordScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="home-outline"
                width={25}
                height={25}
                fill={`${colors.primaryBlue}`}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="attach-outline"
                strokeWidth={1.75}
                width={25}
                height={25}
                className="text-blue-500"
              />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={NewRecordScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="plus-circle-outline"
                strokeWidth={1.75}
                width={25}
                height={25}
                className="text-blue-500"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="bell-outline"
                strokeWidth={1.75}
                width={25}
                height={25}
                className="text-blue-500"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                name="settings-outline"
                strokeWidth={1}
                width={25}
                height={25}
                fill={`${colors.primaryGray}`}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
