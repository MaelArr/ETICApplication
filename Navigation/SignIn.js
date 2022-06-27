import React from "react";
import { Image, View, Text, Pressable, Button, TextInput} from "react-native";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";
import { useState } from "react";
import { Icon } from "@rneui/themed";

const LogIn = ({navigation}, props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <Text>Inscription</Text>

        <View style={{flexDirection: "row", alignItems: 'center', width:'100%', margin: 15}}>
            <Icon style={{marginLeft: 10}} type="antdesign" name="leftsquare" onPress={() => navigation.navigate("LogIn")}/>
            <Text style={{marginLeft: 10}}>Retour</Text>
        </View>
        
        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso placeholder="Nom d'utilisateur"/>
            <TextInputPerso placeholder="Adresse e-mail" icon="mail" keyboardType="email-address"/>
            <TextInputPerso placeholder="Mot de passe" secureTextEntry={true} icon="lock"/> 
            <TextInputPerso placeholder="Téléphone" icon="phone" keyboardType="numeric"/>
        </View>    

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            <FlatButton
              onPress={() => navigation.navigate("")}
              text="Saisir un code de parrainage" 
              littleText = "Gagner 50 crédits"
              color="#FF1A6C"
              fontColor="white"
            />
            <FlatButton
              onPress={() => navigation.navigate("")}
              text="Vous êtes une entreprise" 
              color="#FFB455"
              fontColor="black"
            />
        </View>      

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            <Button
              onPress={() => navigation.navigate("CreationProfil1")}
              title="Continuer" 
              color="#595959"
            />
        </View>
      </View>
  );
};

export default LogIn;