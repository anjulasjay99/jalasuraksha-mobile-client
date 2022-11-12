import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ScrollView,
  RefreshControl,
  TextInput,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import { LOCALHOST } from "@env";
import axios from "axios";
import HealthSessionCard from "../../components/HealthSector/HealthSessionCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import ComplaintsFilter from "../../components/ComplaintsFilter";
import assets from "../../HealthConstants/assets";

function HealthSessions({ navigation }) {
  const [refreshing, setrefreshing] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [ownSessions, setOwnSessions] = useState([]);
  const [othersSessions, setOthersSessions] = useState([]);
  const [filterVisible, setfilterVisible] = useState(false);
  const [data, setdata] = useState([]);

  //show/ hide filter bottom sheet
  const toggleFilter = () => {
    setfilterVisible(!filterVisible);
  };

  //filter posts
  const filterData = (filter) => {
    let filteredArray = [];
    //filter by date
    if (filter.startDate !== "" && filter.endDate !== "") {
      data.map((d) => {
        const date = new Date(d.postCreatedAt);
        const startDate = new Date(filter.startDate);
        const endDate = new Date(filter.endDate);

        if (date > startDate && date < endDate) {
          filteredArray.push(d);
        }
      });
    } else {
      filteredArray = data;
    }

    //filter by ownership
    if (filter.userEmail === "praveenpeiris@gmail.com") {
      let arr = [];
      filteredArray.map((d) => {
        if (d.userEmail === "praveenpeiris@gmail.com") {
          arr.push(d);
        }
      });
      filteredArray = arr;
    } else {
      let arr = [];
      filteredArray.map((d) => {
        arr.push(d);
      });
      filteredArray = arr;
    }

    checkPostOwnership(filteredArray);
  };

  //fetch all health sessions
  const getSessions = () => {
    setrefreshing(true);
    axios
      .get(
        `https://jalasuraksha-backend.herokuapp.com/healthSessions/praveenpeiris@gmail.com`
      )
      .then((res) => {
        setdata(res.data.data);
        checkPostOwnership(res.data.data);
        setrefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        showToast("Error fetching data");
        setrefreshing(false);
      });
  };

  //check the ownership of posts and put them in different arrays
  const checkPostOwnership = (data) => {
    let ownSessions = [];
    let othersSessions = [];
    data.map((d) => {
      if (d.userEmail === "praveenpeiris@gmail.com") {
        ownSessions.push(d);
      } else {
        othersSessions.push(d);
      }
    });

    setOwnSessions(ownSessions.reverse());
    setOthersSessions(othersSessions.reverse());
  };

  //show toast message
  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  useEffect(() => {
    getSessions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={18} color="#A4A4A4" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            value={searchText}
            onChangeText={setsearchText}
          />
        </View>
        <Pressable style={styles.btnFilter} onPress={toggleFilter}>
          <Ionicons
            name="ios-filter"
            size={24}
            color="black"
            style={{ marginTop: -15 }}
          />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getSessions} />
        }
      >
        {ownSessions.length > 0 ? (
          <View style={styles.dividerWrapper}>
            <View style={styles.dividerStart} />
            <Text style={styles.dividerText}>My Sessions</Text>
            <View style={styles.divider} />
          </View>
        ) : (
          <View />
        )}
        {ownSessions
          .filter((session) => {
            if (searchText !== "") {
              if (
                session.sessionId.trim().toLowerCase().includes(searchText) ||
                session.title.trim().toLowerCase().includes(searchText) ||
                session.description.trim().toLowerCase().includes(searchText)
              ) {
                return session;
              }
            } else {
              return session;
            }
          })
          .map((session, index) => {
            return (
              <HealthSessionCard
                key={index}
                session={session}
                navigation={navigation}
              />
            );
          })}

        {othersSessions.length > 0 ? (
          <View style={styles.dividerWrapper}>
            <View style={styles.dividerStart} />
            <Text style={styles.dividerText}>Others Posts</Text>
            <View style={styles.divider} />
          </View>
        ) : (
          <View />
        )}
        {othersSessions
          .filter((session) => {
            if (searchText !== "") {
              if (
                session.sessionId.trim().toLowerCase().includes(searchText) ||
                session.title.trim().toLowerCase().includes(searchText) ||
                session.description.trim().toLowerCase().includes(searchText)
              ) {
                return session;
              }
            } else {
              return session;
            }
          })
          .map((session, index) => {
            return (
              <HealthSessionCard
                key={index}
                session={session}
                navigation={navigation}
              />
            );
          })}
      </ScrollView>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("New Session")}
      >
        <View style={styles.floatingBtn}>
          <FontAwesome5 name="plus" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
      {filterVisible ? (
        <ComplaintsFilter
          onBackdropClick={toggleFilter}
          onChangeFilter={filterData}
        />
      ) : (
        ""
      )}

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
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  scrollViewStyle: {
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: "#F3F1F1",
    padding: 10,
  },
  searchInput: {
    height: 30,
    flex: 1,
    color: "black",
    marginLeft: 10,
  },
  dividerWrapper: {
    marginBottom: 10,
    flexDirection: "row",
  },
  divider: {
    height: 1,
    backgroundColor: "#A4A4A4",
    alignSelf: "center",
    flex: 1,
  },
  dividerStart: {
    width: 10,
    height: 1,
    backgroundColor: "#A4A4A4",
    alignSelf: "center",
  },
  dividerText: {
    color: "#A4A4A4",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
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
  btnFilter: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default HealthSessions;
