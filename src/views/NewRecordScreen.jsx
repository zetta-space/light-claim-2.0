import { Icon } from "react-native-eva-icons";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const NewRecordScreen = () => {
  return (
    <SafeAreaView className="bg-primaryBg w-full py-8 h-auto">
      <ScrollView>
        <View className="flex flex-col justify-start items-center gap-4 m-5 p-3 border-2 border-primaryBlue rounded">
          <View className="w-full space-y-2 mr-3">
            <Text>Job ID</Text>
            <TextInput className="border-[1px] border-primaryGray bg-primaryBg rounded-md w-full px-4 py-2.5 focus:ring-2 focus:ring-primaryBlue" />
          </View>
          <View className="w-full space-y-2 mr-3">
            <Text className="text-sm font-semibold capitalize">
              number plate
            </Text>
            <TextInput className="border-[1px] border-primaryGray bg-primaryBg rounded-md w-full px-4 py-2.5 focus:ring-2" />
          </View>
          <View className="w-full space-y-2 mx-3">
            <Text className="text-sm font-semibold capitalize">Images</Text>
            <TouchableOpacity
              className="px-4 py-3 border-none rounded-lg w-full flex flex-row justify-center items-center space-x-2 bg-secondaryBlue"
              onPress={() => console.log("Clicked")}
            >
              <Icon
                name="cloud-upload-outline"
                width={20}
                height={20}
                fill="#ffffff"
              />
              <Text className="text-sm font-medium capitalize text-primaryBg">
                upload images
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full space-y-2 mx-3">
            <Text className="text-sm font-semibold capitalize">Location</Text>
            <TouchableOpacity
              className="px-2 py-3 border-none rounded-lg w-full flex flex-row justify-center items-center space-x-2 bg-primaryBg border-[1px] border-primaryGray"
              onPress={() => console.log("Clicked Location")}
            >
              <Icon name="pin-outline" width={20} height={20} fill="#020617" />
              <Text className="text-sm font-medium capitalize text-secondaryDark">
                set location
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full space-y-2 mx-3">
            <Text className="text-sm font-semibold capitalize">
              note (optional)
            </Text>
            <TextInput
              multiline
              numberOfLines={5}
              maxLength={35}
              className="border-[1px] border-primaryGray bg-primaryBg rounded-md w-full px-4 py-0 focus:ring-2"
            />
          </View>
          <TouchableOpacity className="bg-primaryBlue px-10 py-2 rounded-lg">
            <Text className="capitalize text-sm font-semibold text-primaryBg">submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRecordScreen;
