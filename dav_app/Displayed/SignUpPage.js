/** @format */

import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import Constants from "expo-constants";
import Appbutton from "../component/AppButton";
import AppTextInputBox from "../component/AppTextInputBox";
import InputFormField from "../component/InputFormField";
import { LinearGradient } from "expo-linear-gradient";

function SignUpPage(props) {
  return (
    <LinearGradient
      colors={["white", "#80ffff"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 5.5 }}
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome Onboard!</Text>
          <Text style={styles.text2}>We are always here to help.</Text>
        </View>
        <View style={styles.container3}>
          <AppTextInputBox placeholder="Enter your Full Name" />
          <Text style={styles.text2}> Full name</Text>
          <AppTextInputBox placeholder="Enter you Email" />
          <Text style={styles.text2}>Email</Text>
          <AppTextInputBox placeholder="Create Password" />
          <Text style={styles.text2}>Password</Text>
          <AppTextInputBox placeholder="Confirm Password" />
          <Text style={styles.text2}>Confirm Password</Text>
        </View>
        <View style={styles.container2}>
          <Appbutton title="Register" />
          <Text style={styles.text3}>
            Already have an Account?
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              {" "}
              Sign In
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 60,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  text2: {
    fontWeight: "bold",
    fontSize: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  text3: {
    fontWeight: "100",
    fontSize: 15,
    alignContent: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
    marginTop: 5,
  },
  gradient: {
    flex: 1,
  },
});

export default SignUpPage;
