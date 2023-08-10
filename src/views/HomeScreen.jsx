import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-eva-icons";
import { connection } from "../db/Connection";

const DB = connection();

const HomeScreen = () => {
  useEffect(() => {
    const table = new Promise((resolve, reject) => {
      DB.transaction(
        function (tx) {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, jobId INTEGER NOT NULL, numberPlate TEXT NOT NULL, imageUri BLOB NOT NULL, location REAL NOT NULL, note TEXT NOT NULL)"
          );
        },
        function (error) {
          reject(error.message);
        },
        function () {
          resolve(true);
          console.log("Created database OK");
        }
      );
    });

    // const createJob = new Promise((resolve, reject) => {
    //   DB.transaction(
    //     function (tx) {
    //       tx.executeSql(
    //         "INSERT INTO places(id, title, imageUri, address, lat, lng) values(1, 'South', 'https://dummy.com', 'New South Wales', 73.60864,47.41353);"
    //       );
    //     },
    //     function (error) {
    //       reject(error.message);
    //     },
    //     function () {
    //       resolve(true);
    //       console.log("Created Record OK");
    //     }
    //   );
    // });

  }, []);
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="flex flex-row mt-10 px-4 w-full h-auto justify-center items-center">
        <Text className="text-sm text-green-600">Light Claim App</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
