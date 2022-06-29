import React from "react";
import { Image, View, Text, useWindowDimensions, Dimensions} from "react-native";
import FlatButton from "./FlatButton";

const CreationProfilItem = ({navigation, item}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    console.log("item");
    
    const buttons  = (item) => {
        if(item.id == "2"){
            return (
                <View>
                    <FlatButton text={item.buttonMain} onPress={() => alert("Not implemented")} color="#FF1A6C" fontColor="white"/>
                </View>
            );
        }else if(item.id == "3"){
            return (
                <View style={{alignItems: "center", height: windowHeight/3, top: -windowHeight/20}}>
                    <FlatButton text={item.buttonMain} onPress={() => alert("Not implemented")} color="#FF1A6C" fontColor="white"/>
                    <Text>ou</Text>
                    <FlatButton text="Saisir une ville" onPress={() => alert("Not implemented")} color="white" fontColor="black"/>
                </View>
            );
        }else if(item.id == "4"){
            return(
            <View>
                <FlatButton text={item.buttonMain} onPress={() => navigation.replace("Home")} color="#FF1A6C" fontColor="white"/>
            </View>
            );
        }
    };
  return (
    <View style={{alignItems: "center", justifyContent: "center", flexDirection: "column", width: windowWidth, height: windowHeight}}>
        <Image style={{height: windowHeight/3, resizeMode: "contain", width: windowWidth*0.8}} source={item.image} />
        <View style={{height: windowHeight/3}}>
            <Text style={{fontWeight: "800", fontSize: 28, textAlign: "center"}}>{item.title}</Text>
            <Text style={{fontWeight: "300", textAlign: "center", width: windowWidth}}>{item.description}</Text>
        </View>
        {buttons(item)}
    </View>
  );
};

export default CreationProfilItem;