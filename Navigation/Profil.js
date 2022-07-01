import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';
import BottomBar from '../components/BottomBar';
import { firebase } from '../firebase';

const Profil = ({navigation}, props) => {
    const document = firebase.firestore().collection("informationsUser").doc(firebase.auth().currentUser?.email);
    var [data, setData] = useState("a");
    var [date, setDate] = useState(new Date());

    console.log("bottom");

    var getOptions = {
        source: 'server'
    }; 
    
    useEffect(() => {
        document.get(getOptions).then((doc) => {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below. 
            setData(doc.data())
            setDate(doc.data().date.toDate())
        }).catch((error) => {
            console.log("Error getting cached document:", error);
        });
      }, [])

      console.log(data);


    return(
        <View style={{justifyContent: "flex-end", flex: 1}}>
          <View style={{justifyContent:"center", alignItems: "center", bottom: 100}}>
            <Text>
              Informations personnelles : {"\n"}
            </Text>
            <Text>Email : {firebase.auth().currentUser?.email} {"\n"}</Text>
            <Text>Nom d'utilisateur : {data.userName} {"\n"}</Text>
            <Text>Date de naissance : {date.toLocaleDateString()} {"\n"}</Text>
            <Text>Genre : {data.genre} {"\n"}</Text>
            <Text>Langue : {data.langue} {"\n"}</Text>
            <Text>Pays d'origine : {data.pays} {"\n"}</Text>
            <Text>Telephone : {data.telephone} {"\n"}</Text>
          </View>
          
            
            <BottomBar  navigation={navigation}/>
        </View>
        
    );
}

export default Profil;