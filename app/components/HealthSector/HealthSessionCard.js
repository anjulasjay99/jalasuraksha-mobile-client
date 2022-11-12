import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import assets from "../../HealthConstants/assets";

function HealthPostCard({ navigation, session }) {
  const [daysCount, setdaysCount] = useState(3);

  var randomImages = [
    assets.doc01,
    assets.doc02,
    assets.doc03,
    assets.doc04,
    assets.doc05,
  ];

  const getDaysInBetween = (date) => {
    const today = new Date().toISOString();
    const diffInMs = new Date(today) - new Date(date);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    setdaysCount(diffInDays);
  };

  useEffect(() => {
    getDaysInBetween(session.sessionCreatedAt);
  }, []);

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate("View Health Session", { session })}
    >
      <View style={styles.container}>
        <View style={styles.detailsCont}>
          <View>
            <Text style={styles.headerText}>{session.title}</Text>
            <Text> {session.description}</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>{daysCount} days ago</Text>
          </View>
        </View>

        <Image
          source={randomImages[Math.floor(Math.random() * randomImages.length)]}
          style={{
            width: "30%",
            height: "60%",
            borderRadius: 50,
            marginTop: 50,
            marginRight: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={[
            styles.ownershipIndicator,
            session.userEmail === "praveenpeiris@gmail.com"
              ? styles.ownerColor
              : styles.OtherColor,
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "deepskyblue",
    width: "100%",
    height: "45%",
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
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  ownershipIndicator: {
    width: 10,
    height: 150,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  ownerColor: {
    backgroundColor: "#F2EC4D",
  },
  OtherColor: {
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

export default HealthPostCard;
