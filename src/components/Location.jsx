import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Icon } from "react-native-eva-icons";

const LocationComponent = ({ length }) => {
  let _text = "Waiting";

  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const status = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, [length]);

  errorMsg ? (_text = errorMsg) : (_text = JSON.stringify(location));
  
  return (
    <TouchableOpacity
      className="px-2 py-3 border-none rounded-lg w-full flex flex-row justify-center items-center space-x-2 bg-primaryBg border-[1px] border-primaryGray">
      <Icon name="pin-outline" width={20} height={20} fill="#020617" />
      <Text className="text-sm font-medium capitalize text-secondaryDark">
        {length > 0 ? _text : "set location"}
      </Text>
    </TouchableOpacity>
  );
};

export default LocationComponent;
