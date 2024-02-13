import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { avatar, globe, logo, logoSM, search } from "../../../../assets/icons";

const TopRow = ({ isTablet }: { isTablet: boolean }) => {
  const MiddleText = () => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", color: "#717171", fontSize: 16 }}>
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "400", color: "#717171", fontSize: 16 }}>
          Experiences
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "400", color: "#717171", fontSize: 16 }}>
          Online Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={isTablet ? logoSM : logo}
            style={{
              height: 100,
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isTablet && <MiddleText />}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              color: "#717171",
              fontSize: 16,
              paddingRight: 10,
            }}
          >
            Airbnb your home
          </Text>
          <View
            style={{
              paddingRight: 10,
            }}
          >
            <Image
              source={globe}
              style={{
                width: 15,
                height: 15,
                paddingRight: 10,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: "white",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#DDDDDD",
              padding: 5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingRight: 10,
              }}
            >
              <Image
                source={search}
                style={{
                  width: 15,
                  height: 15,
                }}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                source={avatar}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        {isTablet && <MiddleText />}
      </View>
    </View>
  );
};

export default TopRow;

const styles = StyleSheet.create({});
