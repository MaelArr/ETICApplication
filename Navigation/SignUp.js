import React, {useEffect, useState} from "react";
import { Image, View, Text, Pressable, Button, Dimensions} from "react-native";
import FlatButton from "../components/FlatButton";
import TextInputPerso from "../components/TextInputPerso";
import { Icon } from "@rneui/themed";
import { firebase } from "../firebase";

const SignUp = ({navigation}, props) => {
  const dataBase = firebase.firestore().collection("informationsUser");

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        navigation.replace("CreationProfil")
      }
    })

    return unsubscribe
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [userName, setUserName] = useState('');

  const handleSignUp = () => {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Registered with : ", user.email);
    })
    .catch(error => alert(error.message));

    dataBase.doc(email)
    .set({
        telephone: telephone,
        userName: userName
    });
  }
  return (
    <View style={{alignItems: "center", justifyContent: "center", width: windowWidth, height: windowHeight}}>

        <Image style={{resizeMode: "contain", width: windowWidth*0.8}} source={require('../images/Travmeejoy.png')} />

        <Text>Inscription</Text>

        <View style={{flexDirection: "row", alignItems: 'center', width:'100%', margin: 15}}>
            <Icon style={{marginLeft: 10}} type="antdesign" name="leftsquare" onPress={() => navigation.navigate("LogIn")}/>
            <Text style={{marginLeft: 10}}>Retour</Text>
        </View>
        
        <View style={{alignItems: 'center', width:'100%'}}>
            <TextInputPerso 
            placeholder="Nom d'utilisateur"
            value={userName}
            onChangeText={text => setUserName(text)}
            />
            <TextInputPerso 
            placeholder="Adresse e-mail" 
            icon="mail" 
            autoCapitalize = "none"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"/>
            <TextInputPerso 
            placeholder="Mot de passe" 
            secureTextEntry={true}
            autoCapitalize = "none" 
            value={password}
            onChangeText={text => setPassword(text)}
            icon="lock"/> 
            <TextInputPerso 
            placeholder="Téléphone" 
            icon="phone" 
            value={telephone}
            onChangeText={text => setTelephone(text)}
            keyboardType="numeric"/>
        </View>    

        <View style={{alignItems: 'center'}}>
            <FlatButton
              onPress={() => navigation.navigate("")}
              text="Saisir un code de parrainage" 
              littleText = "Gagner 50 crédits"
              color="#FF1A6C"
              fontColor="white"
            />
        </View>      

        <View style={{alignItems: 'center', width:'100%'}}>
            <Button
              onPress={handleSignUp}
              title="Continuer" 
              color="#595959"
            />
        </View>
      </View>
  );
};

export default SignUp;