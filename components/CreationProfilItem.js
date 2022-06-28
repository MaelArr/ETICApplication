import React from "react";
import { Image, View, Text, useWindowDimensions} from "react-native";
import FlatButton from "./FlatButton";

const CreationProfilItem = ({navigation, item}) => {
    console.log("navigation : ");
    console.log(navigation);
    const {width} = useWindowDimensions();
    
    const image = (item) => {
        if(item.id != "3"){
            return <Image style={{flex: 0.3, width: "80%", borderRadius: 100, marginTop: 50}} source={item.image} />
        }else{
            return <Image style={{height: "40%", width: "61%"}} source={item.image} />
        }
    };
    const buttons  = (item) => {
        if(item.id == "2"){
            return (
                <View style={[{flex: 0.3},{width, marginTop: 100}]}>
                    <FlatButton text={item.buttonMain} onPress={() => alert("Not implemented")} color="#FF1A6C" fontColor="white"/>
                </View>
            );
        }else if(item.id == "3"){
            return (
                <View style={[{flex: 0.3, alignItems: "center", justifyContent: "center"},{width, marginTop: 100}]}>
                    <FlatButton text={item.buttonMain} onPress={() => alert("Not implemented")} color="#FF1A6C" fontColor="white"/>
                    <Text>ou</Text>
                    <FlatButton text="Saisir une ville" onPress={() => alert("Not implemented")} color="white" fontColor="black"/>
                </View>
            );
        }else if(item.id == "4"){
            return(
            <View style={[{flex: 0.3},{width, marginTop: 100}]}>
                <FlatButton text={item.buttonMain} onPress={() => navigation.navigate("Home")} color="#FF1A6C" fontColor="white"/>
            </View>
            );
        }
    };
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        {image(item)}
        <View style={[{flex: 0.3},{width}]}>
            <Text style={{fontWeight: "800", fontSize: 28, marginTop: 10, textAlign: "center"}}>{item.title}</Text>
            <Text style={{fontWeight: "300", textAlign: "center", paddingHorizontal: 64}}>{item.description}</Text>
        </View>
        {buttons(item)}
    </View>
  );
};

export default CreationProfilItem;