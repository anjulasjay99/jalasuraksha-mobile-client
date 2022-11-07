import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";

function FeedbackCard({ navigation, feedback, feedbacks, complaintId }) {
  const [daysCount, setdaysCount] = useState(0);

  const getDaysInBetween = (date) => {
    const today = new Date().toISOString();
    const diffInMs = new Date(today) - new Date(date);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    setdaysCount(diffInDays);
  };

  useEffect(() => {
    getDaysInBetween(feedback.dateOfFeedback);
  }, []);
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("Feedbacks", { feedbacks, complaintId })
      }
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            source={require("../assets/user.png")}
            style={styles.profilePhoto}
          />
          <View>
            <Text style={styles.msg} numberOfLines={1}>
              {feedback.message}
            </Text>
            <Text style={{ color: "#A4A4A4", fontSize: 12 }} numberOfLines={1}>
              {feedback.name}
            </Text>
          </View>
        </View>
        <Text style={{ color: "#A4A4A4" }}>{daysCount} days ago</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  msg: { color: "#5A5A5A", fontSize: 16, fontWeight: "500" },
});

export default FeedbackCard;
