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
  ScrollView,
} from "react-native";

import AllowanceComponent from "./AllowanceComponent";
import AccountComponent from "./AccountComponent";
import GoalsComponent from "./GoalsComponent";
import ChoresComponent from "./ChoresComponent";

function MainScreen(props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/mainBackground.png")}
          style={styles.image}
        >
          <View style={styles.content}>
            <Text style={styles.greetingText}>Good morning, Gunner!</Text>

            <View style={styles.setContainer}>
              <Image source={require("../assets/allSet.png")} />
              <Text style={styles.userStatusText}>You are all set</Text>
            </View>

            <View style={styles.userContainer}>
              <View style={styles.content}>
                <Text style={styles.userNameText}>Lucy</Text>
                <Text style={styles.userStatusText}>
                  Master . Active 4 hours ago
                </Text>
              </View>
              <View>
                <Image
                  source={require("../assets/user.png")}
                  style={styles.userImage}
                  resizeMode={"cover"}
                />
              </View>
            </View>

            <AllowanceComponent />
            <View style={{ height: 30 }}></View>
            <AccountComponent />

            <View style={{ height: 30 }}></View>
            <View style={styles.bottomContainer}>
              <GoalsComponent />
              <ChoresComponent />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "dodgerblue",
  },
  setContainer: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  greetingText: {
    paddingTop: 40,
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    // backgroundColor: "#000000a0"
  },
  userContainer: {
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    width: 60,
    height: 60,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "white",
  },
  userNameText: {
    paddingTop: 0,
    paddingLeft: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  userStatusText: {
    paddingTop: 0,
    paddingLeft: 5,
    paddingBottom: 30,
    color: "white",
    fontWeight: "normal",
    fontSize: 21,
  },
  bottomContainer: {
    height: 230,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  scrollView: {
    backgroundColor: "pink",
  },
});

export default MainScreen;
