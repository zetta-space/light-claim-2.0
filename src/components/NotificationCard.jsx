import { View, Text } from "react-native";
import React from "react";

const NotificationCard = ({ description, time }) => {
  return (
    <View className="flex flex-row justify-center px-4">
      <View className="py-5 my-4 border-2 px-4 rounded-lg border-primaryGray bg-primaryBg w-full">
        <Text className="text-sm font-semibold">{description}</Text>
        <Text className="mt-2 text-primaryBlue font-normal">
          {time} minutes ago
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;
