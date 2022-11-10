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
      <Pressable onPress={() => navigation.navigate("Admin View Complaints")}>
        <Text style={{ color: "blue" }}>Admin Complaints</Text>
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
