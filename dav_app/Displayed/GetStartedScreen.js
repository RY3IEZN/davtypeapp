/** @format */

import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Appbutton from "../component/AppButton";
import { LinearGradient } from "expo-linear-gradient";

function GetStartedScreen(props) {
  return (
    <LinearGradient
      colors={["white", "#80ffff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 5.5 }}
    >
      <ImageBackground style={styles.background}>
        <View style={styles.background3}>
          <Text style={styles.text}>Find someone to listen you</Text>
        </View>
        <Image style={styles.logo} source={require("../assets/davlogo.png")} />
        <Appbutton title="Get Started" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    width: "90%",
    height: 70,
    backgroundColor: "lightblue",
    borderRadius: 100,
    marginBottom: 40,
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 100,
    bottom: 350,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
});

export default GetStartedScreen;
