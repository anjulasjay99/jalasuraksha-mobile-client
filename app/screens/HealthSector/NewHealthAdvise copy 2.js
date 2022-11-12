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
// SafeAreaView / Button / Alert /
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { LOCALHOST } from "@env";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

function NewHealthPost({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fnFocus, setfnFocus] = useState(false);
  const [descFocus, setdescFocus] = useState(false);
  const [image, setImage] = useState(null);
  const [Pic, SetPic] = React.useState("");
  const uploadImage = () => {
    let options = {
      mediaType: "photo",
      quality: 1,
      includeBase64: true,
    };

    ImagePicker.launchImageLibraryAsync(options, (response) => {
      console.log(response);
      console.log("testttttttt1");
      if (response.didCancel) {
        console.log("testtttttt2t");
        showToast("Cancelled image selections");
      } else if (response.errorCode == "permission") {
        showToast("Permission not satisfied");
        console.log("testtttttt3");
      } else if (response.errorCode == "others") {
        console.log("testtttttt4");
        showToast(response.errorMessage);
      } else if (response.assets[0].fileSize > 209719) {
        console.log("testtttttt5");
        Alert.alert(
          "Maximum image size exceeded",
          "Please choose image below 2MB",
          [{ text: "Ok" }]
        );
      } else {
        console.log("testttttttt6");

        SetPic(response.assets[0].base64);
      }
    });
  };

  const pickImage = () => {
    // No permissions request is necessary for launching the image library
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });
    console.log("hu1");
    console.log(result);
    console.log("hu2");

    if (!result.canceled) {
      console.log(result.uri);
      setImage(result.uri);
    }
  };

  const openGallery = async () => {
    const response = await launchImageLibrary(options);
    console.log(response);
  };

  const submitPost = () => {
    if (title !== "" && content !== "") {
      const data = {
        userEmail: "praveenpeiris@gmail.com",
        title,
        content,
        Pic,
      };
      console.log(data);
      axios

        .post(` https://jalasuraksha-backend.herokuapp.com/healthPosts`, data)
        .then((res) => {
          showToast("Success!");
          navigation.navigate("Post Acknowledgement", {
            id: res.data.data.postId,
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
      "New Health Post",
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
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.separator} />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>
        <View>
          <TouchableHighlight>
            {/* <Image
              size={250}
              source={{ uri: "data:image/jpg;base64," + Pic }}
              style={{ width: 200, height: 200 }}
              onPress={() => uploadImage()}
            /> */}

            <Image
              source={{ uri: "data:image/jpg;base64," + Pic }}
              style={{ width: 200, height: 200 }}
              onPress={() => uploadImage()}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Button
            title="Pick an image"
            mode="contained"
            onPress={() => uploadImage()}
          />

          <Button
            title="Remove image"
            mode="contained"
            onPress={() => removeImage()}
          />
        </View>

        <Text
          style={{
            color: "#4A4A4A",
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Post Content:
        </Text>
        <TextInput
          multiline={true}
          style={[
            styles.inputText,
            descFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
            styles.inputDesc,
          ]}
          placeholder="Type your post content here..."
          value={content}
          onChangeText={setContent}
          onBlur={() => setdescFocus(false)}
          onFocus={() => setdescFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
      </ScrollView>
      <View>
        <Button title="Cancel" style={{ height: 50 }} />
        <TouchableNativeFeedback onPress={submitPost}>
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
    width: "100%",
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
  },
  dropDownSelected: {
    color: "#2AB9FE",
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
  inputDesc: {
    height: 200,
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

export default NewHealthPost;
