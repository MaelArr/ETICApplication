import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native';
 
export default function FlatButton(props) {
  
  if(props.text != null){
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
  }else{
    return null;
  }
}

function littleText(props) {
  if(props.littleText == null){
    return null;
  }else{
    return(
    <Text style={[styles.buttonLittleText, {color: props.fontColor}]}>{props.littleText}</Text>
    ); 
  }
}

function image(props) { 
  if(props.source == null){
    return null;
  }else{
    return(
    <Image style={styles.image} source={props.source} />    ); 
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    marginRight:  windowWidth/10
  },
    element:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: windowHeight/50,
      marginBottom: windowHeight/50
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight/15,
        width: windowWidth/1.3,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: windowHeight/60,
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonLittleText: {
      fontSize: windowHeight/80,
      textAlign: 'center',
    }
});