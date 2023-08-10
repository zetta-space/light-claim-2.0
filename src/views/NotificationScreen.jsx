import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NotificationCard from "../components/NotificationCard";
import { notificationSegment } from "../utils/data";

const dataList = notificationSegment;

const NotificationScreen = () => {
  return (
    <SafeAreaView className="bg-primaryBg h-screen">
      <View className="flex flex-col mt-8 mb-4">
        {dataList.map(({ description, time, key }) => {
          return (
            <NotificationCard key={key} description={description} time={time} />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
