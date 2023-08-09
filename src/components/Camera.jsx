import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { Icon } from "react-native-eva-icons";

const CameraComponent = () => {
  const camera = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function toggleCameraType() {
    const options = {
      quality: 1,
      base64: true,
      fixOrientation: true,
      exif: true,
    };
    // setType((current) =>
    //   current === CameraType.back ? CameraType.front : CameraType.back
    // );
    const snap = await camera.current.takePictureAsync(options);
    const { uri } = snap;
    console.log(uri);
  }

  return (
    <View className="flex-1 justify-center w-full h-screen bg-primaryDark">
      <Camera
        className="flex-1 max-w-full items-center justify-center"
        type={type}
        ref={camera}
        focusDepth={1}
        onCameraReady={(e) => console.log("camera ready")}
      >
        <View className="flex-1 flex-col justify-end w-full items-center bg-transparent">
          <TouchableOpacity
            className="w-fit flex flex-row justify-center items-center"
            onPress={() => toggleCameraType()}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraComponent;
