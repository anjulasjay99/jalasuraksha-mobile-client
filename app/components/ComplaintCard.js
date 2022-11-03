import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";

function ComplaintCard({ navigation, complaint }) {
  const [daysCount, setdaysCount] = useState(0);

  const getDaysInBetween = (date) => {
    const today = new Date().toISOString();
    const diffInMs = new Date(today) - new Date(date);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    setdaysCount(diffInDays);
  };

  useEffect(() => {
    getDaysInBetween(complaint.dateOfComplaint);
  }, []);

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate("View Complaint", { complaint })}
    >
      <View style={styles.container}>
        <View style={styles.detailsCont}>
          <View>
            <Text style={styles.headerText}>{complaint.category}</Text>
            <Text style={styles.bodyText}>ID : {complaint.complaintId}</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>{daysCount} days ago</Text>
          </View>
        </View>
        <View
          style={[
            styles.statusIndicator,
            complaint.status === "Pending"
              ? styles.pendingColor
              : styles.resolvedColor,
          ]}
        >
          <Text></Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  detailsCont: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusIndicator: {
    width: 10,
    height: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  pendingColor: {
    backgroundColor: "#F2EC4D",
  },
  resolvedColor: {
    backgroundColor: "#5AF24D",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    marginRight: 20,
  },
  bodyText: {
    fontWeight: "400",
    fontSize: 14,
    marginRight: 20,
    color: "#2d2d2d",
  },
});

export default ComplaintCard;
