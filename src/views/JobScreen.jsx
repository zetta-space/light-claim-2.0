import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import { getJob } from "../db/query";

const JobScreen = () => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const query = getJob.then((e) => console.log(e));
  }, []);

  return (
    <SafeAreaView className="bg-primaryBg flex flex-col justify-center w-full py-8 px-4 h-auto">
      <ScrollView contentContainerStyle={{ padding: 5, margin: 2 }}>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobScreen;
