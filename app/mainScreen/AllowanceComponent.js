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

import ProgressBarAnimated from "react-native-progress-bar-animated";

function AllowanceComponent(props) {
  const window = Dimensions.get("window");
  var progress = 50;

  const progressCustomStyles = {
    borderRadius: 10,
    borderColor: "#98DFA7",
  };

  return (
    <View style={styles.mainContainer}>
      <ProgressBarAnimated
        {...progressCustomStyles}
        value={progress}
        backgroundColor="#98DFA7"
        width={window.width - 40}
      />

      <View style={styles.horizontalContainer}>
        <View style={styles.verticalcontainer}>
          <Text style={styles.allowanceText}>Allowance</Text>
          <Text style={styles.transferedText}>to be transfered in 1 day</Text>
        </View>
        <Text style={styles.priceText}>+50 K</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 50,
    backgroundColor: "#3E4257",
    height: 100,
    borderRadius: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    backgroundColor: "#3E4257",
    height: 100,
    borderRadius: 10,
  },
  verticalcontainer: {
    backgroundColor: "#3E4257",
    // height: 100,
    borderRadius: 10,
  },
  allowanceText: {
    paddingTop: 10,
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
  transferedText: {
    paddingTop: 5,
    paddingLeft: 10,
    color: "white",
    fontWeight: "normal",
    fontSize: 17,
    textAlign: "left",
  },
  priceText: {
    paddingTop: 25,
    paddingLeft: 50,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default AllowanceComponent;
