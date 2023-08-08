import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "../components/ui/Card";

const JobScreen = () => {
  return (
    <SafeAreaView className="bg-primaryBg flex flex-col justify-center w-full py-8 px-4 h-auto">
      <ScrollView contentContainerStyle={{ padding: 5, margin: 2 }}>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobScreen;
