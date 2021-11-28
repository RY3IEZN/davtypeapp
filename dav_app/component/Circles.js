/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Circles(props) {
  return (
    <View
      style={[
        styles.outerCircle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          backgroundColor: shadowColor,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#99CCFF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 100,
    width: "25%",
    flexDirection: "row",
    flex: 0,
  },
  container2: {
    backgroundColor: "green",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "25%",
    position: "absolute",
    top: 100,
  },
});

export default Circles;
