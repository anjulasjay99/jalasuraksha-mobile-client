import React, { useState } from 'react'
import { View,StyleSheet,Image,Alert,ToastAndroid,ScrollView, Text,TextInput,TouchableNativeFeedback,Button } from 'react-native'
import axios from "axios";
const AddDonar = ({ navigation }) => {


  const [firstName,setfirstName] = useState("");
  const [lastName,setlastName] = useState("");
  const [telNo,settelNo] = useState("");
  const [amount,setamount] = useState("");
 
  const submitDonar = () => {
    if (
  
      firstName !== "" &&
      lastName !== "" &&
      telNo !== "" &&
      amount !== 0 
    ) 
    {
      const data = {
        firstName,
        lastName,
        telNo,
        amount,
       
      };
      console.log(data)
      axios
        .post(`https://jalasuraksha-backend.herokuapp.com/donations/donar/add`, data)
        .then((res) => {
          console.log(res)
          showToast("Donar Added Successfully!");
          navigation.navigate("Donar Success");
          setfirstName("");
          setlastName("");
          setamount(0);
          settelNo("");
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
      "New Donar",
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
        <Image style={styles.imagecontainer} source={require("../assets/donar.png")}/>  
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Donar Info</Text>
        <View style={styles.form}>
        <View style={styles.row}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
              style={styles.input}    
              placeholder="Enter First Name"
              value={firstName}
              onChangeText={setfirstName}
            />  
            
        </View>  
        <View style={styles.row}>
        <Text style={styles.text}>Last Name</Text>
        <TextInput
              style={styles.input}    
              placeholder="Enter Last Name"
              value={lastName}
              onChangeText={setlastName}
             
            />  
            
        </View>  
        <View style={styles.row}>
        <Text style={styles.text}>Contact No</Text>
        <TextInput
              style={styles.input}    
              placeholder="Enter Contact No"
              value={telNo}
              onChangeText={settelNo}
              keyboardType="number-pad"
              maxLength={10}
          
            />  
            
        </View>  
        <View style={styles.row}>
        <Text style={styles.text}>Amount</Text>
        <TextInput
              style={styles.input}    
              placeholder="Enter Amount"
              keyboardType="number-pad"
              value={amount}
              onChangeText={setamount}

            />  
            
        </View>  
        </View>   
        </ScrollView>
        <TouchableNativeFeedback  onPress={submitDonar}>
            <View style={styles.btnSubmit}>
            <Text style={styles.btnText}>Add Donar</Text>
              
            </View>
           </TouchableNativeFeedback>
          
    </View>   
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 0,
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "column",
    },
    btnSubmit: {
    
     backgroundColor: "#2AB9FE",
    flexDirection: "row",
    justifyContent: "center",
    width:'90%',
    marginBottom:40,
    marginLeft:20,
    padding: 15,
    alignItems: "center",
    borderRadius: 12,
   },
    text:{
      flex: 1,
      backgroundColor: 'white', 
      marginTop:40,
      marginLeft:10,
      fontSize: 18
    },
    row: {

      flexDirection: 'row',
      marginTop:0
    },
    form:{
      flex: 1,
    
      flexDirection: "column",
      padding: 15,
   
      marginTop:0,
    },
    input: {
      flex: 1,
      height: 50,
      marginTop:30,
      fontSize:15,
      borderWidth: 2,
      padding: 10,
      borderRadius: 12,
      borderColor: 'grey',
      flexDirection:'row',
      fontSize: 17
    },
    imagecontainer:{
        marginTop:40,
        width:100,
        height:100,
        alignSelf: 'center',
      
    },
    header:{
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "700",
    }
}
)  
export default AddDonar