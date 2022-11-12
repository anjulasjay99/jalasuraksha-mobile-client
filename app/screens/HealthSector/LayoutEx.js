import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid,
  SafeAreaView,
  Button,
} from "react-native";
// SafeAreaView / Button / Alert /
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

function NewComplaint({ navigation }) {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "30%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        />
        <View
          style={{
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  scrollContainer: {
    padding: 10,

    alignContent: "center",
  },
  inputText: {
    backgroundColor: "#F3F1F1",
    height: 60,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    color: "#4A4A4A",
  },
  btnSubmit: {
    backgroundColor: "#2AB9FE",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  btnText: {
    fontSize: 24,
    color: "#fff",
    marginRight: 10,
  },
  dropDown: {
    backgroundColor: "#F3F1F1",
    height: 60,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 0,
    color: "#4A4A4A",
  },
  dropDownContainer: {
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropDownSelected: {
    color: "#2AB9FE",
  },
  dropDownLabel: {
    color: "#4A4A4A",
    fontSize: 18,
  },
  dropDownPlaceholder: {
    color: "#b5b5ba",
    fontSize: 18,
  },
  separator: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#A4A4A4",
  },
  inputDesc: {
    height: 200,
    textAlignVertical: "top",
    color: "#4A4A4A",
  },
  inputFocusBorder: {
    borderWidth: 2,
    borderColor: "#2AB9FE",
  },
  inputBlurBorder: {
    borderWidth: 0,
  },
  floatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2AB9FE",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 70,
    right: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default NewComplaint;
