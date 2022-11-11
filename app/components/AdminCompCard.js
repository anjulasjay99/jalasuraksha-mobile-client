import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal, 
  Alert,
  TouchableNativeFeedback
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
// import { Chip } from "@react-native-material/core";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function AdminCompCard({ navigation , complaint }){

    const [modalVisible, setModalVisible] = useState(false);
    let fdbk

    function leaveFeedback(){
        navigation.navigate("Leave Feedback" , { complaint });
    }

    try{
      console.log(typeof(complaint.feedbacks[0].message))
      fdbk = complaint.feedbacks[0].message
    }
    catch{
      console.log("err");
    }
    

    return(
        
          
            <View style={styles.container}>

                <View style={styles.cardDetail}>
                    {
                    complaint.feedbacks[0] === undefined || complaint.feedbacks.lenght == 0 ? 
                    (
                    <View style={{marginLeft:10 , marginTop:-25}}>
                        <FontAwesome5 name="exclamation" size={24} color="#996619" />
                    </View>
                    ) : (
                    <View style={{marginTop:-25}}>
                        <AntDesign name="checkcircleo" size={24} color="#176D09" />
                    </View>
                    )
                    }

                    <View style={styles.compDets}>
                        <Text style={styles.headerText}>{complaint.complaintId}</Text>
                        <Text style={styles.dateText}>{complaint.dateOfComplaint.slice(0,10)}</Text>
                        <Text style={styles.bodyText}>{complaint.description}</Text>
                    </View>    
                    <View style={styles.compChip}>
 
                        <View style={styles.chip}>
                            <Text style={styles.chipText}>{complaint.category}</Text>
                        </View>
                        <TouchableNativeFeedback onPress={()=>{setModalVisible(!modalVisible)}} >
                        <View style={styles.arrowIcon}>
                            <AntDesign name="rightcircle" size={30} color="#092D7A" />
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                     
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =>{
                setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.complaintTitle}>
                    <Text style={styles.complaintNumber}>{complaint.complaintId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name</Text>
                    <Text style={styles.value}>{complaint.fullName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Province</Text>
                    <Text style={styles.value}>{complaint.province}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>District</Text>
                    <Text style={styles.value}>{complaint.district}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Division</Text>
                    <Text style={styles.value}>{complaint.division}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>GND</Text>
                    <Text style={styles.value}>{complaint.gnd}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Telephone number</Text>
                    <Text style={styles.value}>{complaint.telNo}</Text>
                </View>    
                <View>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.value}>{complaint.description}</Text>
                </View>   
                <View style={styles.separator} />      
                <View style={styles.row}>
                        <Text style={[styles.label, { color: "#676262" }]}>Feedbacks</Text>
                        <View>
                          <AntDesign name="infocirlceo" size={26} color="black" />
                        </View>

                </View>   
                <View style ={styles.feedback}>
                    <Text>{fdbk}</Text>
                  <TouchableNativeFeedback onPress={leaveFeedback}>               
                    <AntDesign name="rightcircle" size={24} color="#222222"  />
                  </TouchableNativeFeedback>
                </View>
  
            </View>

        </View>
        
        </Modal>
     </View>

      
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#7FC9DA",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        marginBottom:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    cardDetail:{
        flex:1,
        paddingBottom: 30,
        paddingLeft: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height:120,
    },
    headerText:{
        fontWeight: "700",
        fontSize: 20,
        marginRight: 20,
    },
    dateText:{
        fontWeight:"300",
        fontSize:16,
        marginRight: 20,
    },
    bodyText:{
        fontWeight: "200",
        fontSize: 14,
        marginRight: 20,
        color: "#2d2d2d",
        marginTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
        marginTop: 40,
        
      },
      modalView: {
        width : "100%",
        height: "82%",
        
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopLeftRadius:20,
        padding: 18,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "#9FC8DF"
      },
      complaintTitle:{
        alignItems:"center",
        marginBottom:20
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      },  
      label: {
        fontSize: 20,
        color: "#3E3E3E",
        fontWeight:"700"
      },
      value: {
        fontSize: 20,
        color: "#3A3838",
        fontWeight:"500"
        
      },  
      separator: {
        height: 4,
        backgroundColor: "#A4A4A4",
        marginTop: 20,
        marginBottom: 10,
      },
      complaintNumber:{
        fontSize: 20,
        color: "black",
        fontWeight: "700"
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
      compDets: {
        marginLeft:15,
        marginTop:15
      },
      compChip:{
        marginLeft:10,
        marginTop:15
      },
      chip:{
        backgroundColor:"#D5F4FF",
        padding: 8,
        borderRadius:5,
      },
      chipText:{
        color:"#092D7A",
        fontSize:15,
      },
      arrowIcon:{
        marginTop:20,
        marginLeft:70,
      },
      feedback:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width : "100%",
        backgroundColor:"#DCD6D6",
        borderRadius:5,
        paddingTop:15,
        paddingBottom:15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
      }
})

export default AdminCompCard;