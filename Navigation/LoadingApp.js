import React from "react";
import {ActivityIndicator, View, TouchableOpacity } from "react-native";

const LoadingApp = ({navigation}, props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
      <ActivityIndicator size="large" color="#FF336A" />
    </TouchableOpacity>
    </View>
  );
};

export default LoadingApp;