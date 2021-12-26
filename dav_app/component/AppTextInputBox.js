/** @format */

import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInputBox({ icon, ...otherProps }) {
  return (
    <>
      <View style={[styles.container]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={30}
            color="black"
            style={styles.icons}
          />
        )}

        <TextInput style={styles.textInput} {...otherProps} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF9F6",
    borderRadius: 25,
    flex: 0,
    padding: 10,
    marginTop: 20,
    width: "85%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icons: {},
});

export default AppTextInputBox;
