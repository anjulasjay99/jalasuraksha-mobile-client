import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

function Feedbacks({ route }) {
  const [reply, setreply] = useState("");
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    setfeedbacks(route.params.feedbacks);
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
      <View style={styles.bottomContainer}>
        <TextInput style={styles.input} placeholder="Type here..." />
        <TouchableNativeFeedback>
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
