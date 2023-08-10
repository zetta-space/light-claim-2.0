import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Icon } from "react-native-eva-icons";
import { ImageContext } from "../services/state/Context";
import { useNavigation } from "@react-navigation/native";

const CameraComponent = () => {
  const camera = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(null);

  const { updateImage } = useContext(ImageContext);
  const navigation = useNavigation();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-base font-medium px-2 text-center">
          Requesting permission to access the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function takeSnap() {
    const options = {
      quality: 1,
      base64: true,
      fixOrientation: true,
      exif: true,
    };

    if (cameraReady !== null) {
      const { uri } = await camera.current.takePictureAsync(options);
      updateImage(uri);
    }

    navigation.goBack();
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View className="flex-1 justify-center w-full h-screen bg-primaryDark">
      <Camera
        className="flex-1 max-w-full items-center justify-center"
        type={type}
        ref={camera}
        focusDepth={1}
        onCameraReady={() => setCameraReady(1)}
      >
        <View className="flex-1 flex-col justify-end w-full items-center bg-transparent">
          <TouchableOpacity
            className="w-fit flex flex-row justify-center items-center"
            onPress={() => takeSnap()}
          >
            <Icon
              name="radio-button-on"
              width={75}
              height={75}
              fill={"white"}
            />
          </TouchableOpacity>
          <View className="flex flex-row w-full py-8 justify-center space-x-8 bg-secondaryDark opacity-75">
            <Text className="text-base capitalize font-bold text-primaryBg">
              camera
            </Text>
            <Text className="text-base capitalize font-bold text-primaryBg">
              gallery
            </Text>
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
