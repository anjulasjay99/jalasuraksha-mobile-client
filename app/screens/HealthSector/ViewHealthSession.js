import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import PostFeedbackCard from "../../components/HealthSector/PostFeedbackCard";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import assets from "../../HealthConstants/assets";

function ViewHealthSession({ navigation, route }) {
  const [sessionId, setSessionId] = useState("");
  const [title, setPostTitle] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [sessionDate, setDate] = useState("");
  const [sessionTime, setTime] = useState("");
  const [conductors, setConductors] = useState("");
  const [userEmail, setUserEmail] = useState("");

  var randomImages = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img5,
    assets.img6,
    assets.img7,
    assets.img8,
  ];

  const editPost = () => {
    axios
      .post(
        `https://jalasuraksha-backend.herokuapp.com/healthSessions/update/${sessionId}`
      )
      .then((res) => {
        if (res.data.success) {
          showToast("Post Updated!");
          navigation.navigate("Health Sector");
        } else {
          showToast("Error!");
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("Error!");
      });
  };

  const deletePost = () => {
    axios
      .post(
        `https://jalasuraksha-backend.herokuapp.com/healthSessions/delete/${sessionId}`
      )
      .then((res) => {
        if (res.data.success) {
          showToast("Post Deleted!");
          navigation.navigate("Health Sector");
        } else {
          showToast("Error!");
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("Error!");
      });
  };

  //show alert
  const showAlert = () => {
    Alert.alert(
      "Update/Delete Session",
      "Are you sure you want to Modify this session?",
      [
        {
          text: "Edit",
          onPress: editPost,
        },
        {
          text: "Delete",
          onPress: deletePost,
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

  useEffect(() => {
    setSessionId(route.params.session.sessionId);
    setPostTitle(route.params.session.title);
    setDescription(route.params.session.description);
    setUserEmail(route.params.session.userEmail);
    setPlatform(route.params.session.platform);
    setMeetingLink(route.params.session.meetingLink);
    setDate(route.params.session.sessionDate);
    setTime(route.params.session.time);
    setConductors(route.params.session.conductors);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Awareness Session</Text>

        <View style={styles.row}>
          {/* <Text style={styles.label}>Title</Text> */}
          <Text style={styles.value}>{title}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <FontAwesome name="video-camera" size={24} color="black" />
            <Text style={styles.label}>Conducting Platform:</Text>
          </View>
          <Text style={styles.value}>{platform}</Text>
          <Text style={styles.value}>{meetingLink}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <FontAwesome name="calendar" size={24} color="black" />
            <Text style={styles.label}>Date:</Text>
          </View>
          <Text style={styles.value}>{sessionDate}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <FontAwesome name="clock-o" size={24} color="black" />
            <Text style={styles.label}>Time:</Text>
          </View>
          <Text style={styles.value}>{sessionTime}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <FontAwesome name="users" size={24} color="black" />
            <Text style={styles.label}>Conductors:</Text>
            <Text style={styles.value}>{conductors}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}></View>
      </ScrollView>
      {userEmail === "praveenpeiris@gmail.com" ? (
        <TouchableNativeFeedback onPress={showAlert}>
          <View style={styles.btnResolve}>
            <FontAwesome5 name="check" size={24} color="white" />
            <Text style={styles.btnText}>Modify</Text>
          </View>
        </TouchableNativeFeedback>
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 16,
    color: "#A4A4A4",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
  },
  label: {
    fontSize: 20,
    color: "#3E3E3E",
  },
  value: {
    fontSize: 20,
    color: "#8F8E8E",
  },
  separator: {
    height: 1,
    backgroundColor: "#A4A4A4",
    marginTop: 20,
    marginBottom: 10,
  },
  fdCount: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 15,
  },
  fdCountZero: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 15,
  },
  fdCountTxt: {
    color: "#fff",
  },
  btnResolve: {
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  btnText: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 10,
  },
});

export default ViewHealthSession;
