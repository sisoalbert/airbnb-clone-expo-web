import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { searchWhite } from "../../../../../assets/icons";

const BigScreenSearchBar = ({ isTablet }: { isTablet: boolean }) => {
  const SearchText = ({ top, bottom }: { top: string; bottom: string }) => (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>{top}</Text>
      <Text style={{ color: "#717171", fontSize: 12 }}>{bottom}</Text>
    </View>
  );
  return (
    <View
      style={[
        isTablet ? { width: "auto" } : { width: 930, alignSelf: "center" },
      ]}
    >
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          borderWidth: 1,
          borderColor: "#DDDDDD",
          borderRadius: 60 / 2,
          height: 60,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          marginBottom: 10,
        }}
      >
        <View style={{ paddingLeft: 10, flex: 2 }}>
          <SearchText top={"Where"} bottom={"Search Destinations"} />
        </View>
        <View style={{ flex: 1 }}>
          <SearchText top={"Check in"} bottom={"Add dates"} />
        </View>
        <View style={{ flex: 1 }}>
          <SearchText top={"Check out"} bottom={"Add dates"} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <SearchText top={"Who"} bottom={"Add guests"} />
          <View
            style={{
              borderWidth: 1,
              borderColor: "#FF385C",
              backgroundColor: "#FF385C",
              borderRadius: 45 / 2,
              height: 45,
              width: 45,
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={searchWhite}
              style={{
                width: 18,
                height: 18,
                paddingRight: 10,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BigScreenSearchBar;
