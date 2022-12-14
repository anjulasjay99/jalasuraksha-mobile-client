import React, { useState } from 'react';
import { StyleSheet, View,Text,ToastAndroid,Alert,ScrollView,TextInput,TouchableNativeFeedback,Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons'; 
import axios from "axios";
//import DatePicker from 'react-native-datepicker';
import DatePicker from "react-native-date-ranges";
export const PaymentOption = ({navigation}) => {

  
  const [fullName,setfullName] = useState("");
  const [cardNo,setcardNo] = useState("");
  const [exp,setexp] = useState("");
  const [cvv,setcvv] = useState("");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [birthday, setBirthday] = useState(new Date());
  

  const submitPayment = () => {
    console.log(fullName)
    console.log(exp)
    if (
  
      fullName !== "" &&
      cardNo !== "" &&
      exp !== "" &&
      cvv !== ""
    ) 
    {
      const data = {
        fullName,
        cardNo,
        exp,
        cvv,
       
      };
      console.log(data)
      axios
        .post(`https://jalasuraksha-backend.herokuapp.com/donations/payments/add`, data)
        .then((res) => {
          console.log(res)
          showToast("Payment Added Successfully!");
          navigation.navigate("Payment Success");
          setfullName("");
          setcardNo("");
          setexp("");
          setcvv("");
        })
        .catch((err) => {
          console.error(err);
          showAlert("An unexpected error occurred. Try again later.");
          setfullName("");
          setcardNo("");
          setexp("");
          setcvv("");
        });
    } else {
      showToast("Please provide all the details!");
    }
  };

  //show alert
  const showAlert = (msg) => {
    Alert.alert(
      "New Payment",
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

  const onConfirmDate = (date) => {
    console.log(date)
    console.log(date.currentDate)
     setexp(date.currentDate)
  };
  const dateConfirmBtn = (onSet) => {
    return <Button onPress={onSet} title={"Set Exp Date"} />;
  };


  return (
    <View style={styles.container}>
       <Text style= {styles.header} >Payment Info</Text>
       <View style={styles.form}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style= {styles.text} >Full Name</Text>
            <TextInput
              style={styles.input}    
              placeholder="Enter Full Name"
              value={fullName}
              onChangeText={setfullName}
            />  
            <Text style= {styles.text}>Credit Card Number</Text>
           
            <View style={styles.creditCardContainer}>
            <View style={styles.row}>
          <TextInput style={styles.creditCardIcon}
          placeholder="1234 1234 1234"
          value={cardNo}
          onChangeText={setcardNo}
          maxLength={16}    
          />
          
          <View style={{position:'absolute',right:10,top:2}}>
          <EvilIcons name="credit-card" size={24} color="black"  />
          </View> 
          </View> 
          </View>
          <View style={styles.row}>
          <Text style= {styles.text} >Exp Date</Text>  
          
          <Text style= {styles.textCvv} >CVV</Text>  
          </View>
          <View style={styles.row}>
          <DatePicker
              style={styles.expDate}
                
              customStyles={{
                placeholderText:{ fontSize:15,color: "#4A4A4A" }, // placeHolder style
                headerStyle : {},			// title container style
                headerMarkTitle : {}, // title mark style
                headerDateTitle: {}, // title Date style
                contentInput: {}, //content text container style
                contentText: {}, //after selected text Style
                
                
              }} // optional
              centerAlign={false} // optional text will align center or not
              allowFontScaling = {false} // optional
              placeholder={'Select Exp Date'}
              onConfirm={onConfirmDate}
              selectedTextColor="blue"
              outFormat="YYYY-MM-DD"
              customButton={dateConfirmBtn}
            />
             
             {/* <TextInput
              style={styles.expDate}    
              placeholder="Exp Date"
              showSoftInputOnFocus={false}
              value={exp}
              onChangeText={setexp}
            />  
             */}
              <TextInput
              style={styles.cvv}    
              placeholder="CVV"
             
              value={cvv}
              onChangeText={setcvv}
            /> 
            </View>
            <TouchableNativeFeedback onPress={submitPayment} >
            <View style={styles.btnSubmit}>
            <Text style={styles.btnText}>Confirm Payment</Text>
            </View>
           </TouchableNativeFeedback>
           <Text style= {styles.vefifytext} >You verify that this info is correct</Text>
           </ScrollView>
           <View style={{ 
    fontSize: 18 }}>
      
    </View>
           
           
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

  datePickerStyle: {
    width: 230,
  },
  container: {
    padding: 0,
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
  },
  scrollContainer: {
    padding: 10,
    alignContent: "center",
  },
  btnSubmit: {
    backgroundColor: "#2AB9FE",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    marginTop:40,
    paddingBottom: 5,
    alignItems: "center",
    borderRadius: 12,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    marginRight: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    
  },
  form:{
    flex: 1,
  
    flexDirection: "column",
    padding: 15,
    justifyContent: "center",
    marginTop:0,
  },
  input: {
    flex: 1,
    height: 50,
    marginTop:30,
    fontSize:20,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    borderColor: 'grey',
    flexDirection:'row'
  },
  expDate:{
  
    height: 50,
    width:'48%',
    marginTop:20,
   
    fontSize:20,
    borderWidth: 2,
    paddingTop:12,
    paddingRight:28,
    borderRadius: 12,
    borderColor: 'grey',
    flexDirection:'row'
  },
  cvv:{
  
    height: 50,
    width:'48%',
    marginTop:20,
    marginLeft:20,
    fontSize:20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 12,
    borderColor: 'grey',
    flexDirection:'row'
  },
text:{
  flex: 1,
  backgroundColor: 'white', 
  marginTop:20,
  fontSize: 18
},
textCvv:{
  flex: 1,
  backgroundColor: 'white', 
  marginTop:20,
  fontSize: 18,
  marginLeft:20
},
  header:{
    
    backgroundColor: 'white', 
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "700",
    marginTop:50,
    marginBottom:40
  },
  creditCardContainer: {
    marginTop:20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    borderColor: 'grey',
    borderWidth: 2,
  },
  creditCardIcon: {
    fontSize: 20,padding: 0,
  },
  icon:{
    alignSelf:'center'
  }
  ,
  vefifytext:{
      marginTop:10,
      marginLeft:80
  }
});
export default PaymentOption;