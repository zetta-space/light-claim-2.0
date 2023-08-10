import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-eva-icons";
import { connection } from "../db/Connection";

const DB = connection();

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="flex flex-row mt-10 px-4 w-full h-auto justify-center items-center">
        <Text className="text-sm text-green-600">Light Claim App</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
