import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
 
export default function FlatButton(props) {
  return (
    <TouchableOpacity style={styles.element} onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor:props.color}]}>
          {image(props)}
          <View style={{flexDirection: "column"}}>
            <Text style={[styles.buttonText, {color: props.fontColor}]}>{props.text}</Text>
            {littleText(props)}
          </View>
        </View>
    </TouchableOpacity>
  );
}

function littleText(props) {
  console.log(props);
  if(props.littleText == null){
    return null;
  }else{
    return(
    <Text style={[styles.buttonLittleText, {color: props.fontColor}]}>{props.littleText}</Text>
    ); 
  }
}

function image(props) {
  console.log(props);
  if(props.source == null){
    return null;
  }else{
    return(
    <Image style={styles.image} source={props.source} />    ); 
  }
}
 
const styles = StyleSheet.create({
  image: {
    marginRight: 40
  },
    element:{
      margin: 15,
      width: '90%'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonLittleText: {
      fontSize: 12,
      textAlign: 'center',
    }
});