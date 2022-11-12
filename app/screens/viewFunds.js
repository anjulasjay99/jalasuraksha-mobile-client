import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ScrollView,
  RefreshControl,
  TextInput,
  TouchableNativeFeedback,
  Pressable,
  toggleFilter,
  Image,
  FlatList
} from "react-native";
import { LOCALHOST } from "@env";
import axios from "axios";
import ComplaintCard from "../components/ComplaintCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import ComplaintsFilter from "../components/ComplaintsFilter";

const ViewFunds = ({navigation}) => {

    const [data,setdata] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [refreshing, setrefreshing] = useState(false);
    

    const getFunds = ()=>{
        setrefreshing(true);
        axios.get(`https://jalasuraksha-backend.herokuapp.com/donations/get/funds`).then((response)=>{     
            //console.log(response.data)
            setdata(response.data.data)
            setrefreshing(false);
        })
    }

    useEffect(()=>{
        getFunds()
    },[])


  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={18} color="#A4A4A4" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchText}
          onChangeText={(text)=>setsearchText(text) }
        />
      </View>
   
    </View>
   
    {
         <ScrollView
         
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={getFunds} />
         }
       >
        {
        
        data.map((data)=>{
          if(searchText===""){
            return(
              <View  key={data._id}>
                   <View style={styles.items}>
                  <Text style={styles.item1}>{data.project}</Text>
                  <Text style={styles.item2}>{data.amount}</Text>
                  <Text style={styles.item3}>{data.option}</Text>
                  </View>
              </View>
          )

          }
          if(data.project.toLowerCase().includes(searchText.toLowerCase())||data.option.toLowerCase().includes(searchText.toLowerCase())){
            return(
              <View  key={data._id}>
              <View style={styles.items}>
             <Text style={styles.item1}>{data.project}</Text>
             <Text style={styles.item2}>{data.amount}</Text>
             <Text style={styles.item3}>{data.option}</Text>
             </View>
         </View>
          )
          }
        })}
        </ScrollView>
    
    }
    <TouchableNativeFeedback
        onPress={() => navigation.navigate("Add Funds")}
      >
        <View style={styles.floatingBtn}>
          <FontAwesome5 name="plus" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
    </View>

  )
}
const styles = StyleSheet.create({
    item1:{
        flexDirection: "row",  
        paddingTop: 1,
        alignItems: "center",
        marginLeft:10,
    }
    ,
    item2:{
        position:"absolute",
        right:20,
        top:20,
   
        flexDirection: "row",  
        paddingTop: 10,
        paddingBottom: 10,

        marginLeft:100,
        alignSelf:'flex-end'
    }
    ,
    item3:{
       
        flexDirection: "row",  
        paddingTop: 10,
        paddingBottom: 10,
        position:"absolute",
        right:20,
        top:50,
        marginLeft:10,
        
    }
    ,
    items:{
        flex:1,
        marginTop:35,
        marginBottom:20,
        marginLeft:2,
        marginRight:2,
        padding:30,
        backgroundColor: "#fff",
        paddingBottom:40,
        fontsize:24,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        flexDirection:"row"
    },
    floatingBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#2AB9FE",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 20,
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
    flatlist: {
        paddingVertical: 30,
        paddingHorizontal: 10,
      },
      heading2: {
        fontSize: 18,
      },
      subheading: {
        color: 'grey',
      },
      list:{
        flex:1,
        marginTop:20
      },

    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
        padding: 10,
      },
      heading: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 20,
      },
      scrollViewStyle: {
        alignContent: "center",
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
      },
      searchWrapper: {
        flex: 1,
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
        width:"80%",
        flex: 1,
        color: "black",
        marginLeft: 10,
      },
      dividerWrapper: {
        marginBottom: 10,
        flexDirection: "row",
      },
      divider: {
        height: 1,
        backgroundColor: "#A4A4A4",
        alignSelf: "center",
        flex: 1,
      },
      dividerStart: {
        width: 10,
        height: 1,
        backgroundColor: "#A4A4A4",
        alignSelf: "center",
      },
      dividerText: {
        color: "#A4A4A4",
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5,
      },
      floatingBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#2AB9FE",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 20,
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
      btnFilter: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
      },
})
export default ViewFunds