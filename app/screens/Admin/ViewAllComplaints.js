import React , { useState , useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    ScrollView,
    RefreshControl,
    TextInput,
    TouchableNativeFeedback,
  } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AdminCompCard from '../../components/AdminCompCard';
import { LOCALHOST } from "@env";
import axios from "axios";

function ViewAllComplaints({navigation}){

    const [refreshing, setrefreshing] = useState(false);
    const [ complaints , setComplaints ] = useState([]);
    const [searchText, setsearchText] = useState("");
    //show toast message
    const showToast = (msg) => {a
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };

    const getComplaints = () => {
        setrefreshing(true)
        axios.get(`http://192.168.8.104:8070/complaints/`).then((res) =>{
            setComplaints(res.data.data);
            setrefreshing(false);

        }).catch((err) =>{
            showToast("Error Fetching Data");
            setrefreshing(false);
        });
    }

    useEffect(()=>{
        getComplaints();
    },[]);


    return(
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <Ionicons name="search" size={18} color="#A4A4A4" />
                <TextInput
                style={styles.searchInput}
                placeholder="Search complaint #"
                value={searchText}
                onChangeText={setsearchText}
                />  
            </View>
            <View style={styles.unreadChip}>
                <Text style={styles.unreadText}> 2 Unread</Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollViewStyle}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={getComplaints}/>
                }
            >    
                {complaints.filter((cmp) =>{
                    if(searchText !== ""){
                        if(
                            cmp.complaintId.trim().toLowerCase().includes(searchText)
                        ){
                            return cmp;
                        }
                    }else{
                        return cmp;
                    }
                }).map((cmp,index) =>{
                    return(
                        <AdminCompCard
                            key={index}
                            complaint={cmp}
                            navigation={navigation}
                        />
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
    },
    searchInput: {
        height: 30,
        flex: 1,
        color: "black",
        marginLeft: 10,
    },
    unreadChip:{
        marginBottom:20,
        marginTop:8,
        alignSelf:"flex-end",
        marginRight:10,
        backgroundColor:"#FF7D05",
        padding:10,
        borderRadius:5
    },
    scrollViewStyle: {
        alignContent: "center",
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        marginBottom: 12,
        borderRadius: 5,
        backgroundColor: "#F3F1F1",
        padding: 10,
      },
      searchInput: {
        height: 30,
        flex: 1,
        color: "black",
        marginLeft: 10,
      },
      unreadText: {
        color: "white",
      }
})

export default ViewAllComplaints;
