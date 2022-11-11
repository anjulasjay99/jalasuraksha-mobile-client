import React from 'react'
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
import { CardViewWithIcon,CardViewWithImage } from "react-native-simple-card-view";

const DonationHome = ({ navigation }) => {
    
        return (
          <View style={ styles.container }>
            <View style={ {alignItems   : "center",flexDirection: "column", flexWrap     : 'wrap',} }>
              <CardViewWithImage
                withBackground={ false }
                width={350}
                androidIcon={ 'logo-alipay' }
                iosIcon={ 'logo-alipay' }
                iconHeight={ 35 }
                source={require("../assets/paymentoption.png")}
                iconColor={ '#333' }
                title={ 'Payment Option' }
                contentFontSize={ 20 }
                titleFontSize={ 20}
                style={ miniCardStyle }   
                onPress={() => navigation.navigate("PaymentOption")}
              />
              <CardViewWithImage
                withBackground={ false }
                androidIcon={ 'logo-youtube' }
                width={350}
                iosIcon={ 'logo-youtube' }
                iconHeight={ 30 }
                iconColor={ '#ff0000' }
                source={require("../assets/donar.png")}
                title={ 'My Donars' }
                contentFontSize={ 10 }
                titleFontSize={ 20}
                style={ miniCardStyle }
                onPress={() => navigation.navigate("ViewDonars")}
              />
              <CardViewWithImage
                withBackground={ false }
                androidIcon={ 'logo-youtube' }
                iosIcon={ 'logo-youtube' }
                source={require("../assets/donationHome.png")}
                width={350}
                iconHeight={ 30 }
                iconColor={ '#ff0000' }
                title={ 'My Donates' }
                contentFontSize={ 12 }
                titleFontSize={ 20}
                style={ miniCardStyle }
                onPress={() => navigation.navigate("View Funds")}
        
              />
            </View>
          </View>
        );

        
}

const styles = StyleSheet.create({
    container: {
        flex: 2, 
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 25,},
    });

const miniCardStyle = 
{
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 2,
    hadowRadius      : 10,
    bgColor           : '#ffffff',
    padding           : 30,
    margin            : 5,
    borderRadius      : 4,
    elevation         : 3,
    width             : (Dimensions.get("window").width) - 60,
    
};    
export default DonationHome