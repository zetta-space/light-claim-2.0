import { View, Text } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View className="flex flex-row justify-center space-y-2 p-4 mx-2 border-[1.25px] border-primaryBlue border-dashed">
      <View className="flex flex-col justify-start items-start flex-grow">
        <Text className="text-sm font-medium text-primaryGray">Job ID</Text>
        <Text className="text-xl font-semibold capitalize text-primaryDark">1156789</Text>
      </View>
      <View className="flex flex-col justify-center items-center flex-grow-0 border-4 border-primalYellow bg-primalLightYellow px-4 py-8 ring-1 ring-primaryBlue rounded-full">
        <Text className="font-semibold text-base capitalize text-primaryDark">pending</Text>
      </View>
    </View>
  );
};

export default Card;
