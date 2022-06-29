import React from "react";
import { Image, View, Button, Text, TouchableOpacity, Dimensions} from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import PickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { firebase } from "../firebase";

const CreationProfil = ({navigation}, props) => {
  const dataBase = firebase.firestore().collection("informationsUser");
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date("01/01/2001"));
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState("");
  const [pays, setPays] = useState("");
  const [langue, setLangue] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleAddData = () => {
    dataBase.doc(firebase.auth().currentUser?.email)
    .update({
        image: image,
        date: date,
        genre: genre,
        pays: pays,
        langue: langue,
    }) 
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });

    navigation.replace("CreationProfilSlides");
}

  const showDatePicker = () => {
    setShow(true);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{alignItems: "center", justifyContent: "center", width: windowWidth, height: windowHeight }}>

        <Image style={{resizeMode: "contain", width: windowWidth*0.8}} source={require('../images/Travmeejoy.png')} />

        <View style={{alignItems: 'center', justifyContent: "center"}}>
              {photoProfil(image, windowWidth, windowHeight)}
              <View style={{zIndex: 1, position: "relative", top: -windowHeight/15, left: windowWidth/6, backgroundColor: "#FFFFFF", width: windowWidth/8, height: windowWidth/8, borderRadius: windowWidth/16, alignItems: "center", justifyContent: "center"}}>
                <Icon style={{position: "relative"}} type="material" name="photo-camera" color="#FF1A6C" onPress={pickImage}/>
              </View>
            
        </View>

        <View style={{alignItems: 'center', marginBottom: windowHeight/30, marginTop:-windowHeight/30}}><Text>Création de votre profil</Text></View>

        <View>
            <TouchableOpacity onPress={showDatePicker} title="Clique pour choisir ta date de naissance !" >
              <Text>Date de naissance : {date.toLocaleDateString()} (Cliquez pour modifier)</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </ TouchableOpacity>
        </View>
        
        <View style={{alignItems: 'center', width:'100%'}}>
            <PickerSelect
                 placeholder={{ label: "Genre", value: null }}
                 onValueChange={(value) => setGenre(value)}
                 items={[
                     { label: "Homme", value: "Homme" },
                     { label: "Femme", value: "Femme" },
                     { label: "Autre", value: "Autre" }
                 ]}
             />
             <PickerSelect
                 placeholder={{ label: "Pays", value: null }}
                 onValueChange={(value) => setPays(value)}
                 items={[
                     { label: "France", value: "France" },
                     { label: "Espagne", value: "Espagne" },
                     { label: "Italie", value: "Italie" }
                 ]}
             /> 
            <PickerSelect
                 placeholder={{ label: "Langue d'origine", value: null }}
                 onValueChange={(value) => setLangue(value)}
                 items={[
                     { label: "Français", value: "Français" },
                     { label: "Espagnol", value: "Espagnol" },
                     { label: "Italien", value: "Italien" }
                 ]}
             /> 
        </View>    

        <View style={{alignItems: 'center', width:'100%'}}>
            <Button
              onPress={() => handleAddData()}
              title="Continuer" 
              color="#FF1A6C"
            />
        </View>
      </View>
  );
};

function photoProfil(image, windowWidth){
  if(image){
    return <Image source={{ uri: image }} style={{backgroundColor: "#595959", width: windowWidth/2, height: windowWidth/2, borderRadius: windowWidth/4}} />
  }else{
    return <View style={{backgroundColor: "#595959",width: windowWidth/2, height: windowWidth/2, borderRadius: windowWidth/4}}></View>
  }
}

export default CreationProfil;