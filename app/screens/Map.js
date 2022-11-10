import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MapView, { Marker, Callout } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Map({ navigation }) {
  const [pin, setPin] = useState({
    latitude: 6.927079,
    longitude: 79.861244,
  });
  const [searchText, setsearchText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={18} color="#A4A4A4" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search location..."
          value={searchText}
          onChangeText={setsearchText}
        />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.927079,
          longitude: 79.861244,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <View style={styles.confFloatingBtn}>
          <AntDesign name="check" size={24} color="#5AF24D" />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.floatingBtn}>
          <MaterialIcons name="gps-fixed" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchWrapper: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  searchInput: {
    height: 30,
    flex: 1,
    color: "black",
    marginLeft: 10,
  },
  floatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2AB9FE",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
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
  confFloatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 90,
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

export default Map;
