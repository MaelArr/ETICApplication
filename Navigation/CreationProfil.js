import React from "react";
import { Image, View, Button, Text, TouchableOpacity} from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import PickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreationProfil = ({navigation}, props) => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date("01/01/2001"));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <View style={{alignItems: 'center', width:'100%', marginTop: 15}}>
              {photoProfil(image)}
              <View style={{zIndex: 1, position: "relative", top: -40, left: 60, backgroundColor: "#FFFFFF", width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                <Icon style={{position: "relative"}} type="material" name="photo-camera" color="#FF1A6C" onPress={pickImage}/>
              </View>
            
        </View>

        <View style={{alignItems: 'center', width:'100%', marginBottom: 30}}><Text>Création de votre profil</Text></View>

        <View>
            <TouchableOpacity onPress={showDatePicker} title="Clique pour choisir ta date de naissance !" >
              <Text>Date de naissance : {date.toLocaleDateString()} (Cliquez pour modifier)</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  customStyles={{
                    dateIcon: {
                      //display: 'none',
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </ TouchableOpacity>
        </View>
        
        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            <PickerSelect
                 placeholder={{ label: "Genre", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Homme", value: "H" },
                     { label: "Femme", value: "F" },
                     { label: "Autre", value: "A" }
                 ]}
             />
             <PickerSelect
                 placeholder={{ label: "Pays", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "France", value: "Fr" },
                     { label: "Espagne", value: "Esp" },
                     { label: "Italie", value: "It" }
                 ]}
             /> 
            <PickerSelect
                 placeholder={{ label: "Langue d'origine", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Français", value: "Fr" },
                     { label: "Espagnol", value: "Esp" },
                     { label: "Italien", value: "It" }
                 ]}
             /> 
        </View>    

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
            <Button
              onPress={() => navigation.navigate("CreationProfilSlides")}
              title="Continuer" 
              color="#FF1A6C"
            />
        </View>
      </View>
  );
};

function photoProfil(image){
  if(image){
    return <Image source={{ uri: image }} style={{backgroundColor: "#595959", width: 200, height: 200, borderRadius: 100}} />
  }else{
    return <View style={{backgroundColor: "#595959", width: 200, height: 200, borderRadius: 100}}></View>
  }
}

export default CreationProfil;