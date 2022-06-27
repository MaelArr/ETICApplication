import React from "react";
import { Image, View, Button} from "react-native";
import { useState } from "react";
import { Icon } from "@rneui/themed";
import * as ImagePicker from 'expo-image-picker';
import PickerSelect from 'react-native-picker-select';

const LogIn = ({navigation}, props) => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Image source={require('../images/Travmeejoy.png')} />

        <View style={{alignItems: 'center', width:'100%', margin: 15}}>
              {photoProfil(image)}
              <View style={{zIndex: 1, position: "relative", top: -40, left: 60, backgroundColor: "#FFFFFF", width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                <Icon style={{position: "relative"}} type="material" name="photo-camera" color="#FF1A6C" onPress={pickImage}/>
              </View>
            
        </View>
        
        <View style={{alignItems: 'center', width:'100%'}}>

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
              onPress={() => navigation.navigate("")}
              title="Continuer" 
              color="#595959"
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

export default LogIn;