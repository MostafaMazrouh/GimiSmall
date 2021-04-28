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

function AccountComponent(props) {
  const window = Dimensions.get("window");
  var progress = 50;

  const progressCustomStyles = {
    // backgroundColor: "#98DFA7",
    borderRadius: 10,
    borderColor: "#98DFA7",
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.accountText}>Account</Text>
        <Text style={styles.cardText}>Gimi card</Text>
        <Image
          source={require("../assets/GimiCard.png")}
          style={styles.cardImage}
        />
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.priceText}>1900.54 KR</Text>
        <Text style={styles.balanceText}>Card balance</Text>

        <TouchableHighlight onPress={() => console.log("test")}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Top up</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#3E4257",
    height: 180,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftContainer: {
    flexDirection: "column",
  },
  rightContainer: {
    backgroundColor: "#3E4257",
    // height: 100,
    borderRadius: 10,
  },
  accountText: {
    paddingTop: 10,
    paddingLeft: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
  cardText: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 20,
    color: "white",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "left",
  },
  cardImage: {
    width: 263 / 2,
    height: 166 / 2,
    borderColor: "white",
    borderRadius: 8,
  },
  priceText: {
    paddingTop: 50,
    paddingLeft: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  balanceText: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 20,
    color: "white",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "center",
  },
  buttonView: {
    backgroundColor: "#060B33",
    height: 40,
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
});

export default AccountComponent;
