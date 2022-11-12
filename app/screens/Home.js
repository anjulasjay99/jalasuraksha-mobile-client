import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/home.jpg")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.heading}>Jala Suraksha</Text>

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
      <View style={styles.cardContainer}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Complaints")}
        >
          <View style={[styles.card, styles.firstCard]}>
            <MaterialIcons
              name="feedback"
              size={28}
              color="black"
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Complaints</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Donations")}
        >
          <View style={styles.card}>
            <FontAwesome5
              name="donate"
              size={28}
              color="black"
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Donation</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Admin View Complaints")}
        >
          <View style={[styles.card, styles.lastCard]}>
            <MaterialCommunityIcons
              name="format-list-text"
              size={28}
              color="black"
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Admin Complaints</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

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
    fontSize: 48,
    fontWeight: "700",
    marginBottom: 20,
    color: "#2d2d2d",
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
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 20,
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#29b6f6",
  },
  cardIcon: {
    marginBottom: 10,
    color: "#29b6f6",
  },
  firstCard: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lastCard: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Home;
