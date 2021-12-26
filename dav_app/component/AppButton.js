/** @format */

import React from "react";
import { View, StyleSheet, Text, style, TouchableOpacity } from "react-native";

function Appbutton({ title, onPress }, color) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("The register button was pressed")}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#99CCFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "90%",
    height: "20%",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Appbutton;
