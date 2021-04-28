import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";

import { AnimatedCircularProgress } from "react-native-circular-progress";

function ChoresComponent(props) {
  const window = Dimensions.get("window");
  var progress = 50;

  const progressCustomStyles = {
    // backgroundColor: "#98DFA7",
    borderRadius: 10,
    borderColor: "#98DFA7",
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.choreText}>Chores</Text>

      <AnimatedCircularProgress
        style={styles.circular}
        size={60}
        width={5}
        fill={50}
        tintColor="#98DFA7"
        backgroundColor="#3d5875"
      >
        {(fill) => (
          <View style={styles.circularText}>
            <Text style={styles.circularText}>3/6</Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <Text style={styles.balanceText}>This week</Text>

      <TouchableHighlight onPress={() => console.log("test")}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Add chore</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#3E4257",
    width: 180,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  choreText: {
    paddingTop: 25,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    width: 160,
  },
  balanceText: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 5,
    color: "white",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "center",
  },
  buttonView: {
    backgroundColor: "#060B33",
    height: 40,
    width: 130,
    borderRadius: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  circular: {
    justifyContent: "center",
    alignItems: "center",
  },
  circularText: {
    color: "white",
    textAlign: "center",
  },
});

export default ChoresComponent;
