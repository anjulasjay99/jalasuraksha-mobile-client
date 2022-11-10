import React, { useState , useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Alert
} from "react-native";

function SubmitFeedback({route}){

    const [complaintId , setComplaintId ] = useState("");
    const [message , setFeedback ] = useState("");
    
    const feedback = {
        message
    }
    function leaveFeedback(){
        axios.post(`http://192.168.8.104:8070/complaints/feedbacks/${complaintId}` , feedback).then((res) =>{
            const result = res.data.success;
            if(result){
                Alert.alert("Success!");
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
        <View style={styles.container}>
            <View style={styles.complaintTitle}>
                <Text>{complaintId}</Text>
            </View>
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
                <View style={styles.submitBtn}>
                    <Text style={styles.btnText}>Submit</Text>
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
        alignContent: "center",
        flexDirection: "column",
      },
    complaintTitle:{
        alignItems:"center",
        marginBottom:20,
        marginTop:10
    },
    feedbackContainer:{
        height:"80%",
        alignItems:"center",
        justifyContent:"center"
    },
    feedbackDesc:{
        backgroundColor: "#F3F1F1",
        height: "60%",
        width: "100%",
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
        marginBottom: 10,
        color: "#4A4A4A",
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
    }
})
export default SubmitFeedback;