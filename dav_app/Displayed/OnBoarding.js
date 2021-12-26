/** @format */

import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Appbutton from "../component/AppButton";

function OnBoarding(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.texts}>Feeling blue?</Text>
        <View style={styles.logoPosition}>
          <Image
            style={styles.logo}
            source={require("../assets/davlogo.png")}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <Appbutton title="lonely" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logoPosition: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: -200,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 200,
    height: 150,
  },
  container2: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
    width: 120,
  },
});
export default OnBoarding;
