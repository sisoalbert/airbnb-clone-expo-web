import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopRow from "../TopRow";
import { useMediaQuery } from "react-responsive";
import BigScreenSearchBar from "../searchBars/bigscreen";
import SearchBarMobile from "../searchBars/mobilescreen";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      {!isMobile && <TopRow isTablet={isTablet} />}
      {!isMobile ? (
        <BigScreenSearchBar isTablet={isTablet} />
      ) : (
        <SearchBarMobile />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
