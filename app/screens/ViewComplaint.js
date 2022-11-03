import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FeedbackCard from "../components/FeedbackCard";

function ViewComplaint({ navigation, route }) {
  const [complaintId, setcomplaintId] = useState("");
  const [fullName, setfullName] = useState("");
  const [province, setprovince] = useState("");
  const [district, setdistrict] = useState("");
  const [division, setdivision] = useState("");
  const [gnd, setgnd] = useState("");
  const [description, setdescription] = useState("");
  const [feedbacks, setfeedbacks] = useState([]);

  useEffect(() => {
    setcomplaintId(route.params.complaint.complaintId);
    setfullName(route.params.complaint.fullName);
    setprovince(route.params.complaint.province);
    setdistrict(route.params.complaint.district);
    setdivision(route.params.complaint.division);
    setgnd(route.params.complaint.gnd);
    setdescription(route.params.complaint.description);
    setfeedbacks(route.params.complaint.feedbacks);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Complaint Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.value}>{fullName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Province</Text>
          <Text style={styles.value}>{province}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>District</Text>
          <Text style={styles.value}>{district}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Division</Text>
          <Text style={styles.value}>{division}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>GND</Text>
          <Text style={styles.value}>{gnd}</Text>
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={[styles.label, { color: "#A4A4A4" }]}>Feedbacks</Text>
          <View style={styles.fdCount}>
            <Text style={styles.fdCountTxt}>{feedbacks.length}</Text>
          </View>
        </View>
        {feedbacks.reverse().map((fdbk, index) => {
          if (index === 0) {
            return (
              <FeedbackCard
                feedback={fdbk}
                feedbacks={feedbacks}
                navigation={navigation}
                key={index}
              />
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    alignContent: "center",
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
    marginBottom: 20,
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
  fdCountTxt: {
    color: "#fff",
  },
});

export default ViewComplaint;
