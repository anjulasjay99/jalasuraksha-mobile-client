import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Pressable onPress={() => navigation.navigate("Complaints")}>
        <Text style={{ color: "blue" }}>Complaints</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("AddFunds")}>
        <Text style={{ color: "blue" }}>AddFunds</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("DonateSuccess")}>
        <Text style={{ color: "blue" }}>DonateSuccess</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("DonateSuccess")}>
        <Text style={{ color: "blue" }}>DonateSuccess</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("AddDonar")}>
        <Text style={{ color: "blue" }}>AddDonar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

//styles for the component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export default Home;
