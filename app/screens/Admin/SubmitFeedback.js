import React, { useState , useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";


function SubmitFeedback({navigation , route}){

    const [complaintId , setComplaintId ] = useState("");
    const [message , setFeedback ] = useState("");
    
    const feedback = {
        message
    }
    function leaveFeedback(){
        axios.post(`https://jalasuraksha-backend.herokuapp.com/complaints/feedbacks/${complaintId}` , feedback).then((res) =>{
            const result = res.data.success;
            if(result){
                navigation.navigate('Success Feedback');
            }
            else{
                Alert.alert("Error in leaving feedback!");
            }
        })
    }
    useEffect(()=>{
        setComplaintId(route.params.complaint.complaintId);
    },[])
    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.complaintTitle}>
                <Text style={styles.complaintText}>{complaintId}</Text>
            </View>
        </TouchableWithoutFeedback>
            <View style={styles.feedbackContainer}>
                <TextInput
                    multiline={true}
                    style={styles.feedbackDesc}
                    placeholder="Type Feedback..."
                    value={message}
                    onChangeText={setFeedback}
                />
            </View>
            <TouchableNativeFeedback onPress={leaveFeedback}>
                <View style={styles.submitBtn} >
                    <Text style={styles.btnText}>Submit</Text>
                </View>    
            </TouchableNativeFeedback>    
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: "#fff",
        flex: 1,
        alignContent: "center",
        flexDirection: "column",
      },
    complaintTitle:{
        alignItems:"center",
        marginBottom:20,
        marginTop:30
    },
    feedbackContainer:{
        height:"80%",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
    },
    feedbackDesc:{
        backgroundColor: "#F3F1F1",
        height: "40%",
        width: "100%",
        padding: 10,
        borderRadius: 15,
        fontSize: 18,
        marginBottom: 10,
        color: "#4A4A4A",
        textAlignVertical : 'top',
    },
    submitBtn:{
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
    complaintText: {
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    }
})
export default SubmitFeedback;