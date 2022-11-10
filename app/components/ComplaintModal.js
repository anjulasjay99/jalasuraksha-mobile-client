import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

function ComplaintModal(){

    const [modalVisible, setModalVisible] = useState(true);
    const [complaintId, setcomplaintId] = useState("");
    const [fullName, setfullName] = useState("");
    const [province, setprovince] = useState("");
    const [district, setdistrict] = useState("");
    const [division, setdivision] = useState("");
    const [gnd, setgnd] = useState("");
    const [description, setdescription] = useState("");
    const [feedbacks, setfeedbacks] = useState([]);

    useEffect(() => {
        setcomplaintId(route.params.complaint.complaintId);
        setfullName(route.params.complaint.fullName);
        setprovince(route.params.complaint.province);
        setdistrict(route.params.complaint.district);
        setdivision(route.params.complaint.division);
        setgnd(route.params.complaint.gnd);
        setdescription(route.params.complaint.description);
        setfeedbacks(route.params.complaint.feedbacks);
      }, []);
      
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =>{
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.complaintTitle}>
                    <Text>Complaint Number</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name</Text>
                    <Text style={styles.value}>Shehan Silva</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Province</Text>
                    <Text style={styles.value}>Western</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>District</Text>
                    <Text style={styles.value}>Colombo</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Division</Text>
                    <Text style={styles.value}>Maharagama</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>GND</Text>
                    <Text style={styles.value}>Wijerama</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Telephone number</Text>
                    <Text style={styles.value}>0762535382</Text>
                </View>    
                <View>
                    <Text style={styles.label}>Description</Text>
                    <Text style={styles.value}>Lorem ipsum ....</Text>
                </View>   
                <View style={styles.separator} />      
                    <View style={styles.row}>
                        <Text style={[styles.label, { color: "#A4A4A4" }]}>Feedbacks</Text>
                        <View>
                            <Text>Icon</Text>
                        </View>

                    </View>   
                    <View>Feedback Here</View>
            </View>

        </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        width : "100%",
        height: "100%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      complaintTitle:{
        alignItems:"center",
        fontWeight:700,
        color: "black"
      },
      row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      },  
      label: {
        fontSize: 20,
        color: "black",
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
})
export default ComplaintModal;