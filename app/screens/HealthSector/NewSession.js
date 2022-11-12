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
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { LOCALHOST } from "@env";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import assets from "../../HealthConstants/assets";
import { set } from "react-native-reanimated";

function NewSession({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fnFocus, setfnFocus] = useState(false);
  const [descFocus, setdescFocus] = useState(false);
  const [platforms, setPlatforms] = useState([
    { label: "Zoom", value: "Zoom" },
    { label: "Teams", value: "Teams" },
    { label: "Google Meet", value: "Google Meet" },
  ]);
  const [platformOpen, setplatformOpen] = useState(false);
  const [selectedPlatform, setselectedPlatform] = useState(null);
  const [meetingLink, setMeetingLink] = useState("");
  const [sessionDate, setSessionDate] = useState("23/11/2022");
  const [time, setTime] = useState("12:10 PM");
  const [conductors, setConductors] = useState("");

  var randomImages = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img5,
    assets.img6,
    assets.img7,
    assets.img8,
  ];

  const submitSession = () => {
    if (
      title !== "" &&
      description !== "" &&
      selectedPlatform !== "" &&
      meetingLink !== "" &&
      sessionDate !== "" &&
      time !== "" &&
      conductors !== ""
    ) {
      const data = {
        userEmail: "praveenpeiris@gmail.com",
        title,
        description,
        platform: selectedPlatform,
        meetingLink,
        sessionDate,
        time,
        conductors,
      };
      console.log(data);
      axios

        .post(
          ` https://jalasuraksha-backend.herokuapp.com/healthSessions`,
          data
        )
        .then((res) => {
          showToast("Success!");
          navigation.navigate("Post Acknowledgement", {
            id: res.data.data.sessionId,
          });
        })
        .catch((err) => {
          console.error(err);
          showAlert("An unexpected error occurred. Try again later.");
        });
    } else {
      showToast("Please provide all the details!");
    }
  };

  //show alert
  const showAlert = (msg) => {
    Alert.alert(
      "New Session",
      msg,
      [
        {
          text: "Cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  //show toast message
  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={[
            styles.inputText,
            fnFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Type your title here..."
          value={title}
          onChangeText={setTitle}
          onBlur={() => setfnFocus(false)}
          onFocus={() => setfnFocus(true)}
          placeholderTextColor="#b5b5ba"
          on
        />
        <View style={styles.separator} />

        <Text
          style={{
            color: "#4A4A4A",
            fontSize: 18,
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          Description:
        </Text>
        <TextInput
          multiline={true}
          style={[
            styles.inputText,
            descFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
            styles.inputDesc,
          ]}
          placeholder="Type your post content here..."
          value={description}
          onChangeText={setDescription}
          onBlur={() => setdescFocus(false)}
          onFocus={() => setdescFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <FontAwesome name="video-camera" size={24} color="black" />
          <Text
            style={{
              color: "#4A4A4A",
              fontSize: 18,
              marginTop: 0,
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Conducting Platform:
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <DropDownPicker
            placeholder="Category"
            open={platformOpen}
            value={selectedPlatform}
            items={platforms}
            setOpen={setplatformOpen}
            setValue={setselectedPlatform}
            setItems={setPlatforms}
            arrowIconStyle={{ color: "#A4A4A4" }}
            listMode="SCROLLVIEW"
            dropDownContainerStyle={styles.dropDownContainer}
            style={styles.dropDown}
            selectedItemLabelStyle={styles.dropDownSelected}
            labelStyle={styles.dropDownLabel}
            listItemLabelStyle={styles.dropDownLabel}
            placeholderStyle={styles.dropDownPlaceholder}
          />
        </View>
        <TextInput
          style={[
            styles.inputText,
            fnFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Meeting Link"
          value={meetingLink}
          onChangeText={setMeetingLink}
          onBlur={() => setfnFocus(false)}
          onFocus={() => setfnFocus(true)}
          placeholderTextColor="#b5b5ba"
          on
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <FontAwesome name="calendar" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Date</Text>
          <FontAwesome
            name="clock-o"
            size={24}
            color="black"
            style={{ marginLeft: 55 }}
          />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Time</Text>
        </View>
        <View style={styles.separator2} />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <FontAwesome name="users" size={24} color="black" />
          <Text
            style={{
              color: "#4A4A4A",
              fontSize: 18,
              marginTop: 0,
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Conductors:
          </Text>
        </View>
        <TextInput
          multiline={true}
          style={[
            styles.inputText,
            descFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
            styles.inputDesc,
          ]}
          placeholder="Event conductors details.."
          value={conductors}
          onChangeText={setConductors}
          onBlur={() => setdescFocus(false)}
          onFocus={() => setdescFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
      </ScrollView>
      <View>
        <Button title="Cancel" style={{ height: 50 }} />
        <TouchableNativeFeedback onPress={submitSession}>
          <View style={styles.btnSubmit}>
            <Text style={styles.btnText}>Submit</Text>
            <FontAwesome name="long-arrow-right" size={24} color="white" />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
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
    width: "30%",
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
    height: 60,
  },
  dropDownSelected: {
    color: "#2AB9FE",
    height: 60,
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
  separator2: {
    height: 1,
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#A4A4A4",
  },
  inputDesc: {
    height: 100,
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

export default NewSession;
