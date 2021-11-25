import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  Image,
} from "react-native";

import colors from "../config/colors.js";

let width = Dimensions.get("window").width;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontSizem = 5;
let fontWelcomeSize = width / fontSizem;

let leftPosWelcomeText = (width - fontWelcomeSize) / 2;

function Welcome() {
  return (
    <View style={styles.container}>
      {/* Sets the status bar properties and styles for this Screen*/}
      <StatusBar
        barStyle={"default"}
        backgroundColor={colors.purple}
        translucent={false}
      />

      {/* This section are the circles of the Screen*/}
      <View style={styles.circle2}></View>
      <View style={styles.circle1}></View>
      <View style={styles.circle2b}></View>
      <View style={styles.circle1b}></View>

      {/*Tasko name*/}
      <Image
        source={require("../img/TaskoLogo.png")}
        style={styles.TaskoLogo}
      />
      <Text style={styles.ASKO}>ASKO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },

  circle1: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    top: -225,
    left: "-50%",
    elevation: 20,
  },

  circle2: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    left: "30%",
    top: -75,
  },

  circle1b: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    bottom: -225,
    right: "-50%",
    elevation: 21,
  },

  circle2b: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colors.purple,
    position: "absolute",
    right: "30%",
    bottom: -75,
  },

  ASKO: {
    position: "absolute",
    top: "30%",
    left: leftPosWelcomeText - 25,
    fontFamily: "GothamBold",
    fontSize: fontWelcomeSize,
    color: colors.gray,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  TaskoLogo: {
    width: 95,
    height: 95,
    position: "absolute",
    top: "28%",
    left: "12%",
  },
});

export default Welcome;
