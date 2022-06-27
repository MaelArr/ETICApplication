import React from "react";
import { Image, View, TouchableOpacity} from "react-native";
import styles from "../StyleSheets/StylesLogInScreen";

const Travmeejoy = ({navigation}, props) => {
  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("LoadingApp")}>
        <Image source={require('../images/Travmeejoy.png')} />
      </TouchableOpacity>
      </View>
  );
};

export default Travmeejoy;