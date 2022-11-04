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
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { LOCALHOST } from "@env";

function NewComplaint({ navigation }) {
  const [fullName, setfullName] = useState("");
  const [telNo, settelNo] = useState(0);
  const [province, setprovince] = useState("");
  const [district, setdistrict] = useState("");
  const [division, setdivision] = useState("");
  const [gnd, setgnd] = useState("");
  const [description, setdescription] = useState("");
  const [categories, setcategories] = useState([
    { label: "Water Quality", value: "Water Quality" },
    { label: "Water Supply", value: "Water Supply" },
  ]);
  const [categoryOpen, setcategoryOpen] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [fnFocus, setfnFocus] = useState(false);
  const [telFocus, settelFocus] = useState(false);
  const [prvncFocus, setprvncFocus] = useState(false);
  const [districtFocus, setdistrictFocus] = useState(false);
  const [divisionFocus, setdivisionFocus] = useState(false);
  const [gndFocus, setgndFocus] = useState(false);
  const [descFocus, setdescFocus] = useState(false);

  const submitComplaint = () => {
    if (
      fullName !== "" &&
      telNo !== 0 &&
      selectedCategory !== null &&
      province !== "" &&
      district !== "" &&
      division !== "" &&
      gnd !== "" &&
      description !== ""
    ) {
      const data = {
        userEmail: "anjulasjay@gmail.com",
        category: selectedCategory,
        fullName,
        telNo,
        province,
        district,
        division,
        gnd,
        description,
      };
      axios
        .post(`http://${LOCALHOST}:8070/complaints`, data)
        .then((res) => {
          showToast("Success!");
          navigation.navigate("Success", { id: res.data.data.complaintId });
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
      "New Complaint",
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
        <DropDownPicker
          placeholder="Category"
          open={categoryOpen}
          value={selectedCategory}
          items={categories}
          setOpen={setcategoryOpen}
          setValue={setselectedCategory}
          setItems={setcategories}
          listMode="SCROLLVIEW"
          dropDownContainerStyle={styles.dropDownContainer}
          style={styles.dropDown}
          selectedItemLabelStyle={styles.dropDownSelected}
          arrowIconStyle={{ color: "#A4A4A4" }}
          labelStyle={styles.dropDownLabel}
          listItemLabelStyle={styles.dropDownLabel}
          placeholderStyle={styles.dropDownPlaceholder}
        />
        <TextInput
          style={[
            styles.inputText,
            fnFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setfullName}
          onBlur={() => setfnFocus(false)}
          onFocus={() => setfnFocus(true)}
          placeholderTextColor="#b5b5ba"
          on
        />
        <TextInput
          style={[
            styles.inputText,
            telFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Telephone No."
          value={telNo}
          keyboardType="number-pad"
          onChangeText={settelNo}
          onBlur={() => settelFocus(false)}
          onFocus={() => settelFocus(true)}
          placeholderTextColor="#b5b5ba"
          on
        />
        <TextInput
          style={[
            styles.inputText,
            prvncFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Province"
          value={province}
          onChangeText={setprovince}
          onBlur={() => setprvncFocus(false)}
          onFocus={() => setprvncFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
        <TextInput
          style={[
            styles.inputText,
            districtFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="District"
          value={district}
          onChangeText={setdistrict}
          onBlur={() => setdistrictFocus(false)}
          onFocus={() => setdistrictFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
        <TextInput
          style={[
            styles.inputText,
            divisionFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="Division"
          value={division}
          onChangeText={setdivision}
          onBlur={() => setdivisionFocus(false)}
          onFocus={() => setdivisionFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
        <TextInput
          style={[
            styles.inputText,
            gndFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
          ]}
          placeholder="GND"
          value={gnd}
          onChangeText={setgnd}
          onBlur={() => setgndFocus(false)}
          onFocus={() => setgndFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
        <View style={styles.separator} />
        <Text
          style={{
            color: "#4A4A4A",
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Describe
        </Text>
        <TextInput
          multiline={true}
          style={[
            styles.inputText,
            descFocus ? styles.inputFocusBorder : styles.inputBlurBorder,
            styles.inputDesc,
          ]}
          placeholder="Type here..."
          value={description}
          onChangeText={setdescription}
          onBlur={() => setdescFocus(false)}
          onFocus={() => setdescFocus(true)}
          placeholderTextColor="#b5b5ba"
        />
      </ScrollView>
      <TouchableNativeFeedback onPress={submitComplaint}>
        <View style={styles.btnSubmit}>
          <Text style={styles.btnText}>Submit</Text>
          <FontAwesome name="long-arrow-right" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
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

export default NewComplaint;
