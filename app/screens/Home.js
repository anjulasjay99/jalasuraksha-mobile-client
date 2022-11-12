import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/home.jpg")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.heading}>JalaSuraksha</Text>
      <Pressable onPress={() => navigation.navigate("Complaints")}>
        <Text style={{ color: "blue" }}>Complaints</Text>
      </Pressable>
      {/* <Pressable onPress={() => navigation.navigate("AddFunds")}>
        <Text style={{ color: "blue" }}>AddFunds</Text>
      </Pressable>
     
      <Pressable onPress={() => navigation.navigate("AddDonar")}>
        <Text style={{ color: "blue" }}>AddDonar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("PaymentOption")}>
        <Text style={{ color: "blue" }}>PaymentOption</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ViewFunds")}>
        <Text style={{ color: "blue" }}>ViewFunds</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ViewDonars")}>
        <Text style={{ color: "blue" }}>ViewDonars</Text>
      </Pressable> */}
      <Pressable onPress={() => navigation.navigate("Donations")}>
        <Text style={{ color: "blue" }}>Donation</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Admin View Complaints")}>
        <Text style={{ color: "blue" }}>Admin Complaints</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Health Sector")}>
        <Text style={{ color: "blue" }}>Health Care</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Health Session")}>
        <Text style={{ color: "blue" }}>Health Sessions</Text>
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
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  image: {
    height: 800,
    width: "100%",
    borderBottomRightRadius: -10,
  },
});

export default Home;
