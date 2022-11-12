import React , { useState , useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    ScrollView,
    RefreshControl,
    TextInput,
    Pressable,
    TouchableNativeFeedback,
  } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AdminCompCard from '../../components/AdminCompCard';
import AdminComplaintsFilter from '../../components/AdminComplaintsFilter'
import axios from "axios";

function ViewAllComplaints({navigation}){

    const [refreshing, setrefreshing] = useState(false);
    const [ complaints , setComplaints ] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [count , setCount] = useState(0);
    const [filterVisible, setfilterVisible] = useState(false);
    //show toast message
    const showToast = (msg) => {a
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };
    const getComplaints = () => {
        setrefreshing(true)
        axios.get(`https://jalasuraksha-backend.herokuapp.com/complaints/`).then((res) =>{
            setComplaints(res.data.data.reverse());
            checkComplaintStatus();
            setrefreshing(false);

        }).catch((err) =>{
            showToast("Error Fetching Data");
            setrefreshing(false);
        });
    }

    const toggleFilter = () => {
        setfilterVisible(!filterVisible);
      };

    const checkComplaintStatus = () =>{
        let c = 0;
        complaints.map((comp) =>{
            if(comp.feedbacks === undefined || comp.feedbacks.length == 0){
                c++;
            }
        })
        setCount(c);
    }  

    const filterData = (filter) =>{
        let filteredArray = [];

        // Filter By Date
            if( filter.startDate !== "" && filter.endDate !== "" ) {
                complaints.map((c) =>{
                    const date = new Date(c.dateOfComplaint);
                    const startDate = new Date(filter.startDate);
                    const endDate = new Date(filter.endDate);
                    console.log(date , startDate , endDate);
                    if(date > startDate && date < endDate) {
                        filteredArray.push(c);
                    }
                })
            }
            else {
                filteredArray = complaints;
            }

        // Filter by Province
            filteredArray.filter((val) =>{
                console.log(filter.province);
                console.log(val.province);
                if(filter.province === ""){
                    return val;
                }
                else if (val.province.toLowerCase().includes(filter.province.toLowerCase())){
                    return val
                }
            })
            console.log(filteredArray);
        // Filter By Category

            setComplaints(filteredArray);
    }

    useEffect(()=>{
        getComplaints();
    },[]);


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" size={18} color="#A4A4A4" />
                    <TextInput
                    style={styles.searchInput}
                    placeholder="Search complaint #"
                    value={searchText}
                    onChangeText={setsearchText}
                    />  
                </View>
                <Pressable style={styles.btnFilter} onPress={toggleFilter}>
                        <Ionicons
                        name="ios-filter"
                        size={24}
                        color="black"
                        style={{ marginTop: -15 }}
                        />
                </Pressable>
            </View>    
            <View style={styles.unreadChip}>
                <Text style={styles.unreadText}> {count} Pending</Text>
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
            {filterVisible ? (
                <AdminComplaintsFilter
                    onChangeFilter={filterData}
                    onBackdropClick={toggleFilter}
                />
                )
                : (
                    ""
                )
                
            }
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
        width:"88%",
        marginRight : 7
      },
      searchInput: {
        height: 30,
        flex: 1,
        color: "black",
        marginLeft: 10,
      },
      unreadText: {
        color: "white",
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
      }
})

export default ViewAllComplaints;
