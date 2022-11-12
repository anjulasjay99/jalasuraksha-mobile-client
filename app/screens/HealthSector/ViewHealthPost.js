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
import FeedbackCard from "../../components/FeedbackCard";
import PostFeedbackCard from "../../components/HealthSector/PostFeedbackCard";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import assets from "../../HealthConstants/assets";

function ViewHealthPost({ navigation, route }) {
  const [postId, setPostId] = useState("");
  const [title, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [feedbacks, setfeedbacks] = useState([]);
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

  const sortFeedbacks = (feedbacksArray) => {
    feedbacksArray.sort(function (a, b) {
      return new Date(b.dateOfFeedback) - new Date(a.dateOfFeedback);
    });

    setfeedbacks(feedbacksArray);
  };

  const editPost = () => {
    axios
      .post(
        `https://jalasuraksha-backend.herokuapp.com/healthPosts/update/${postId}`
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
        `https://jalasuraksha-backend.herokuapp.com/healthPosts/delete/${postId}`
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
      "Update/Delete Post",
      "Are you sure you want to Modify this post?",
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
    setPostId(route.params.post.postId);
    setPostTitle(route.params.post.title);
    setContent(route.params.post.content);
    sortFeedbacks(route.params.post.feedbacks);
    setUserEmail(route.params.post.userEmail);
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Health Post</Text>
        <View style={styles.row}>
          {/* <Text style={styles.label}>Title</Text> */}
          <Text style={styles.value}>{title}</Text>
        </View>
        <Image
          source={randomImages[Math.floor(Math.random() * randomImages.length)]}
          style={{
            width: "100%",
            height: "30%",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginTop: 5,
          }}
        />
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Content:</Text>
          <Text style={styles.value}>{content}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={[styles.label, { color: "#A4A4A4" }]}>Feedbacks</Text>
          <View
            style={feedbacks.length > 0 ? styles.fdCount : styles.fdCountZero}
          >
            <Text style={styles.fdCountTxt}>{feedbacks.length}</Text>
          </View>
        </View>
        <View styles={{ height: "50%" }}>
          {feedbacks.map((fdbk, index) => {
            if (index === 0) {
              return (
                <PostFeedbackCard
                  feedback={fdbk}
                  feedbacks={feedbacks}
                  postId={postId}
                  navigation={navigation}
                  key={index}
                  style={{
                    width: "100%",
                    height: "50%",
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    marginTop: 5,
                  }}
                />
              );
            }
          })}
        </View>
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
    flex: 1,
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

export default ViewHealthPost;
