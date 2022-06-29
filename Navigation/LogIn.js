import React, {useEffect, useState} from "react";
import { Image, View, Text, Pressable, Button, Dimensions} from "react-native";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";
import { firebase } from "../firebase";

const LogIn = ({navigation}, props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      
      console.log("Logged in with : ", user.email);
    })
    .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  return (
      <View style={{alignItems: "center", justifyContent: "center", width: windowWidth, height: windowHeight }}>

        <Image style={{resizeMode: "contain", width: windowWidth*0.8}} source={require('../images/Travmeejoy.png')} />

        <Text>Bienvenue</Text>

        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso
            placeholder="E-mail, pseudo ou téléphone"
            value={email}
            autoCapitalize = "none"
            onChangeText={text => setEmail(text)}
            icon="mail"/>
            <TextInputPerso
            placeholder="Mot de passe"
            value={password}
            autoCapitalize = "none"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            icon="lock"/> 
        </View>
        

        <View style={{alignItems: 'center', width:'100%'}}>
            <Pressable style={{margin: 15}} onPress={() => navigation.navigate("")}>
                <Text>Mot de passe oublié ?</Text>
            </Pressable>
        </View>
          

        <View style={{alignItems: 'center', width:'100%'}}>
            <Button
              onPress={handleLogIn}
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
            <Text style={{color: "purple"}}>Inscription</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default LogIn;