import React from "react";
import { Image, View, Text, Pressable, Button} from "react-native";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";

const LogIn = ({navigation}, props) => {
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <Text>BienvenueLogIn</Text>

        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso placeholder="E-mail, pseudo ou téléphone" icon="mail"/>
            <TextInputPerso placeholder="Mot de passe" secureTextEntry={true} icon="lock"/> 
        </View>
        

        <View style={{alignItems: 'center', width:'100%'}}>
            <Pressable style={{margin: 15}} onPress={() => navigation.navigate("")}>
                <Text>Mot de passe oublié ?</Text>
            </Pressable>
        </View>
          

        <View style={{alignItems: 'center', width:'100%'}}>
            <Button
              onPress={() => navigation.navigate("")}
              title="Connexion"
              color="#595959"
            />
            <Text>ou</Text>
            <FlatButton text="Continuer avec Google" onPress={() => navigation.navigate("")} source={require("../images/google.png")} color="#FFFFFF"
            fontColor="black"/>
            <FlatButton text="Continuer avec Apple"  onPress={() => navigation.navigate("")} source={require("../images/apple.png")} color="#FFFFFF"
            fontColor="black"/>
        </View>
        
        <View  style={{alignItems: 'center', width:'100%'}}>
          <Text>Pas encore de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text>Inscription</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default LogIn;