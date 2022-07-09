import React from "react";
import { Image, View, TouchableOpacity, Dimensions, Button} from "react-native";

const Travmeejoy = ({navigation}, props) => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log(windowHeight);
  console.log(windowWidth);
  console.log(Dimensions.get('window').scale);
  return (
      <View style={[{alignItems: "center", justifyContent: "center"},{height: windowHeight, width: windowWidth}]}>
      <TouchableOpacity style={{alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate("LoadingApp")}>
        <Image style={{resizeMode: "contain", width: windowWidth*0.8}}source={require('../images/Travmeejoy.png')}/>
      </TouchableOpacity>
      <Button title="Go to chat example" onPress={() => navigation.navigate("ChatExample")}/>
      </View>
  );
};

export default Travmeejoy;