import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from "@rneui/themed";

export default function BottomBar(props) {
      return (
        <View style={{alignItems: "flex-end", justifyContent: "center", flexDirection: "row", height: "15%"}}>
            <View  style={{ flex : 1, alignItems: "center", justifyContent: "center", flexDirection: "row", height: "60%", backgroundColor: "white"}}>
                <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                    <Icon type="antdesign" name="home" onPress={() => navigation.navigate("LogIn")}/>
                    <Text>Home</Text>
                </View>
                <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                    <Icon type="foundation" name="compass" onPress={() => navigation.navigate("LogIn")}/>
                    <Text>Explorer</Text>
                </View>
                <View style={{flex: 0.20, bottom: 35}}>
                    <Icon size={50} type="antdesign" name="pluscircle" color={"#DE1960"} onPress={() => navigation.navigate("LogIn")}/>
                </View>
                <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                    <Icon type="material-community" name="google-maps" onPress={() => navigation.navigate("LogIn")}/>
                    <Text>Maps</Text>
                </View>
                <View style={{flex: 0.20, alignItems: "center", justifyContent: "center"}}>
                    <Image source={require("../images/apple.png")} />
                    <Text>Profil</Text>
                </View>
            </View>
        </View>
      );
  }