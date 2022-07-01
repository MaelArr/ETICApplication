import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from "@rneui/themed";
import { firebase } from '../firebase';

const BottomBar = ({navigation}, props) => {
    const document = firebase.firestore().collection("informationsUser").doc(firebase.auth().currentUser?.email);
    var [data, setData] = useState("a");

    console.log("bottom");

    var getOptions = {
        source: 'server'
    }; 
    
    useEffect(() => {
        document.get(getOptions).then((doc) => {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below. 
            setData(doc.data())
        }).catch((error) => {
            console.log("Error getting cached document:", error);
        });
      }, [])

    return (
    <View style={{alignItems: "flex-end", justifyContent: "center", flexDirection: "row", height: "15%"}}> 
        <View  style={{ flex : 1, alignItems: "center", justifyContent: "center", flexDirection: "row", height: "60%", backgroundColor: "white"}}>
            <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                <Icon type="antdesign" name="home" onPress={() => alert("home")}/>
                <Text>Home</Text>
            </View>
            <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                <Icon type="foundation" name="compass" onPress={() => alert("explorer")}/>
                <Text>Explorer</Text>
            </View> 
            <View style={{flex: 0.20, bottom: 35}}>
                <Icon size={50} type="antdesign" name="pluscircle" color={"#DE1960"} onPress={() => alert("plus")}/>
            </View>
            <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                <Icon type="material-community" name="google-maps" onPress={() => alert("maps")}/>
                <Text>Maps</Text>
            </View>
            <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={() => navigation.replace("Profil")}>
                    <Image
                    source={{ uri: data.image}}
                    style={{backgroundColor: "black", width: 40, height: 40, borderRadius: 20}}/>
                </TouchableOpacity> 
                <Text>Profil</Text>
            </View>
        </View>
    </View>
    );
  }

  export default BottomBar;