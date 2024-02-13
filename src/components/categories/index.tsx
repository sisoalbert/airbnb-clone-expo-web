import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { filterOptions } from "../../../assets/icons/filters";
import { Entypo } from "@expo/vector-icons";
import { filter } from "../../../assets/icons";

const Categories = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current item index
  const flatListRef = useRef(null); // Ref to FlatList component

  console.log("currentIndex", currentIndex);

  const handleNext = () => {
    // Check if there's a next item
    if (currentIndex < filterOptions.length - 1) {
      setCurrentIndex(currentIndex + 1);

      flatListRef.current &&
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleBack = () => {
    // Check if there's a previous item
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current &&
        flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {!isMobile && (
        <View
          style={{
            left: 0,
            position: "absolute",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            paddingHorizontal: 10,
            paddingVertical: 20,
            display: currentIndex === 0 ? "none" : "flex",
          }}
        >
          <Pressable style={styles.button} onPress={handleBack}>
            <Entypo name="chevron-left" size={24} color="black" />
          </Pressable>
        </View>
      )}

      <View
        style={[
          { flex: 0.8, backgroundColor: "white" },
          isTablet && { flex: 0.9 },
          isMobile && { flex: 1 },
        ]}
      >
        <FlatList
          ref={flatListRef}
          data={filterOptions}
          horizontal
          initialScrollIndex={currentIndex} // Set initial scroll position
          renderItem={({ item }) => (
            <Pressable
              style={(state: any) => [
                state.hovered && {
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                },
                {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                },
              ]}
            >
              <Image
                source={item.url}
                style={{
                  height: 30,
                  width: 30,
                  opacity:
                    currentIndex === filterOptions.indexOf(item) ? 1 : 0.5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color:
                    currentIndex === filterOptions.indexOf(item)
                      ? "#000"
                      : "#717171",
                  fontSize: 12,
                  fontWeight:
                    currentIndex === filterOptions.indexOf(item)
                      ? "bold"
                      : "400",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {!isMobile && (
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              flex: 0.1,
            },
            isTablet && { flex: 0.2 },
          ]}
        >
          <View
            style={{
              marginRight: 20,
              display:
                currentIndex === filterOptions.length - 4 ? "none" : "flex",
            }}
          >
            <Pressable style={styles.button} onPress={handleNext}>
              <Entypo name="chevron-right" size={24} color="black" />
            </Pressable>
          </View>
          <View
            style={{
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#DDDDDD",
              borderWidth: 1,
              borderRadius: 16,
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={filter}
              style={{ height: 20, width: 20, marginHorizontal: 10 }}
              resizeMode="contain"
            />
            <Text>Filters</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderColor: "#DDDDDD",
    borderWidth: 2,
    borderRadius: 30 / 2,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
