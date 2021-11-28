/** @format */

import React from "react";
import { View, StyleSheet, Text, style, TouchableOpacity } from "react-native";

function Appbutton({ title, onPress }, color) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("the get started button was pressed")}
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
    width: "80%",
    marginVertical: 50,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Appbutton;
