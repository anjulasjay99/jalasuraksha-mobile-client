import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { LOCALHOST } from "@env";
import axios from "axios";

function Feedbacks({ route }) {
  const [reply, setreply] = useState("");
  const [feedbacks, setfeedbacks] = useState([]);
  const [status, setstatus] = useState("");

  const submitReply = () => {
    const complaintId = route.params.complaintId;
    if (reply !== "") {
      const data = {
        name: "Anjula",
        message: reply,
      };
      axios
        .post(
          `https://jalasuraksha-backend.herokuapp.com/complaints/reply/${complaintId}`,
          data
        )
        .then((res) => {
          console.log(res.data.data);
          if (!res.data.success) {
            showToast("An unexpected error occurred. Try again later.");
          } else {
            setreply("");
            getFeedbacks(complaintId);
          }
        })
        .catch((err) => {
          console.error(err);
          showToast("An unexpected error occurred. Try again later.");
        });
    }
  };

  const getFeedbacks = (id) => {
    axios
      .get(
        `https://jalasuraksha-backend.herokuapp.com/complaints/feedbacks/${id}`
      )
      .then((res) => {
        setfeedbacks(res.data.data);
      })
      .catch((error) => {
        console.error(error);
        showToast("Error fetching data");
      });
  };

  //show toast message
  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  useEffect(() => {
    getFeedbacks(route.params.complaintId);
    setstatus(route.params.status);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {feedbacks.map((feedback, index) => {
          return (
            <View style={styles.msgCont} key={index}>
              <Image
                style={styles.profilePhoto}
                source={require("../assets/user.png")}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: "#A4A4A4", fontSize: 14 }}
                  numberOfLines={1}
                >
                  {feedback.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#5A5A5A",
                      fontSize: 18,
                      flex: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    {feedback.message}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {route.params.status === "Pending" ? (
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={reply}
            onChangeText={setreply}
          />
          <TouchableNativeFeedback onPress={submitReply}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather
                name="send"
                size={24}
                color="#2AB9FE"
                style={styles.btnSend}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    alignContent: "center",
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F3F1F1",
    height: 50,
    padding: 5,
    flex: 1,
    borderRadius: 5,
  },
  btnSend: {
    marginLeft: 20,
    marginRight: 10,
  },
  profilePhoto: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  msgCont: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Feedbacks;
