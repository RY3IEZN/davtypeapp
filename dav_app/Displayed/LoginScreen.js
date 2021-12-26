/** @format */

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

function LoginScreen(props) {
  return (
    <LinearGradient
      colors={["white", "#80ffff"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 5.5 }}
    >
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.container}>
          <Text styles={styles.text}>Welcome Back!</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeareaview: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LoginScreen;
