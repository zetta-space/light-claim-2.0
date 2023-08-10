import { Icon } from "react-native-eva-icons";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import CameraComponent from "../components/Camera";
import { useNavigation } from "@react-navigation/native";
import { ImageContext } from "../services/state/Context";
import LocationComponent from "../components/Location";

const NewRecordScreen = () => {
  const navigation = useNavigation();
  const { image } = useContext(ImageContext);

  useEffect(() => {
    console.log(image);
  }, [image]);

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
            <View className="flex flex-row justify-center gap-x-3 items-center">
              {image.length > 0 ? (
                image.map(({ uri }) => (
                  <Image
                    key={uri.slice(-36)}
                    source={{
                      uri: `${uri}`,
                    }}
                    width={90}
                    height={105}
                  />
                ))
              ) : (
                <View />
              )}
            </View>

            <TouchableOpacity
              className="px-4 py-3 border-none rounded-lg w-full flex flex-row justify-center items-center space-x-2 bg-secondaryBlue"
              onPress={() => navigation.navigate("Camera")}
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
            <LocationComponent length={image.length} />
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
            <Text className="capitalize text-sm font-semibold text-primaryBg">
              submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRecordScreen;
