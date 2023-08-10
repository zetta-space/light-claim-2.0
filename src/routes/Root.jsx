import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/HomeScreen";
import JobScreen from "../views/JobScreen";
import NewRecordScreen from "../views/NewRecordScreen";
import NotificationScreen from "../views/NotificationScreen";
import ProfileScreen from "../views/ProfileScreen";
import { Icon } from "react-native-eva-icons";
import { colors } from "../utils/colorCodes";

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
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
              fill={`${colors.primaryGray}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Job"
        component={NewRecordScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="plus-circle-outline"
              strokeWidth={1.75}
              width={25}
              height={25}
              fill={`${colors.primaryGray}`}
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
              fill={`${colors.primaryGray}`}
            />
          ),
          headerShown: false,
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
  );
};

export default Root;
