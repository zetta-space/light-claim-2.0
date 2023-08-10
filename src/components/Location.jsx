import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(()=>{
    
  },[])

  return (
    <TouchableOpacity
      className="px-2 py-3 border-none rounded-lg w-full flex flex-row justify-center items-center space-x-2 bg-primaryBg border-[1px] border-primaryGray"
      onPress={() => alert("set location")}
    >
      <Icon name="pin-outline" width={20} height={20} fill="#020617" />
      <Text className="text-sm font-medium capitalize text-secondaryDark">
        set location
      </Text>
    </TouchableOpacity>
  );
};

export default LocationComponent;
