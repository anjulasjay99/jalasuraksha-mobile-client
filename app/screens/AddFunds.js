import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Alert, ToastAndroid,Text, View ,ScrollView, Image,TextInput,Button, TouchableNativeFeedback} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
function AddFunds({ navigation }) {

  const [categoryOpen, setcategoryOpen] = useState(false);
  const [paymentOpen, setpaymentOpen] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectepaymenet, setselectepaymenet] = useState(null);
  const [categories, setcategories] = useState([
    { label: "AIESEC", value: "AIESEC" },
    { label: "LEO CLUB", value: "LEO CLUB" },
    { label: "NLWA WELFARE", value: "NLWA WELFARE" },
  ]);
  const [paymentoption, setpaymentoption] = useState([
    { label: "Option 1", value: "Option1" },
    { label: "Option 2", value: "Option2" },
    { label: "Option 3", value: "Option3" },
  ]);
  const [amount,setamount] = useState(0);

  const submitFunds = () => {
    if (
  
      amount !== 0 &&
      selectedCategory !== null &&
      selectepaymenet !== null 
    ) 
    {
      const data = {
        option: selectepaymenet,
        project: selectedCategory,
        amount,
       
      };
      console.log(data)
      axios
        .post(`https://jalasuraksha-backend.herokuapp.com/donations/funds/add`, data)
        .then((res) => {
          console.log(res)
          showToast("Success!");
          navigation.navigate("Donation Success");
          setamount(0);
        })
        .catch((err) => {
          console.error(err);
          showAlert("An unexpected error occurred. Try again later.");
          setamount(0);
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
      
   
          <Image style={styles.imagecontainer} source={require("../assets/Picture1.png")}/>  


      <View style={styles.form}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
            
            <Text style= {styles.text}>Organization</Text>
                  <DropDownPicker
                placeholder="Organization"
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

            <Text style= {styles.text} >Amount</Text>
            <TextInput
              style={styles.input}    
              placeholder="Enter Amount"
     
              value={amount}
              onChangeText={setamount}
              keyboardType="number-pad"
            />  
            <Text style= {styles.text}>Payment Option</Text>
            <DropDownPicker
                placeholder="Option"
                open={paymentOpen}
                value={selectepaymenet}
                items={paymentoption}
                setOpen={setpaymentOpen}
                setValue={setselectepaymenet}
                setItems={setpaymentoption}
                listMode="SCROLLVIEW"
                dropDownContainerStyle={styles.dropDownContainer}
                style={styles.dropDown}
                selectedItemLabelStyle={styles.dropDownSelected}
                arrowIconStyle={{ color: "#A4A4A4" }}
                labelStyle={styles.dropDownLabel}
                listItemLabelStyle={styles.dropDownLabel}
                placeholderStyle={styles.dropDownPlaceholder}
              />
            <TouchableNativeFeedback  onPress={submitFunds}>
            <View style={styles.btnSubmit}>
            <Text style={styles.btnText}>Add Donation</Text>
              
            </View>
           </TouchableNativeFeedback>

           </ScrollView>
           
           
    </View>
      </View>
      
    
 
  );
}

//styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
   
  },
  form:{
    flex: 2,
    backgroundColor: "Red",
    flexDirection: "column",
    padding: 15,
    justifyContent: "center",
   
    marginTop:0,
  },
  imagecontainer:{
   
    width: '100%'
  },
  scrollContainer:{
    padding: 10,
    alignContent: "center",
  },
  text:{
    flex: 1,
    backgroundColor: 'white', 
    marginTop:15,
    fontSize: 16
  },
  input: {
    height: 50,
    marginTop: 15,
    fontSize:15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12,
    borderColor: 'grey',
  },
  
  btnSubmit: {
    
    backgroundColor: "#2AB9FE",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    marginTop:60,
    paddingBottom: 5,
    alignItems: "center",
    borderRadius: 12,
  },
  btnText: {
    fontSize: 24,
    color: "#fff",
    marginRight: 10,
  },
  
  dropDown: {
    marginTop: 10,
    backgroundColor: "#F3F1F1",
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    color: "#4A4A4A",
  },
  dropDownContainer: {
    marginTop:10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
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

});

export default AddFunds;
