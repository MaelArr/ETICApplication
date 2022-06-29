import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Dimensions} from 'react-native';
import {Icon} from '@rneui/themed';
 
export default function TextInputPerso(props) {
  if(props.secureTextEntry){
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
      <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name={props.icon} size={20} color="#000"/>
          <TextInput
          placeholder={props.placeholder} 
          value={props.value}
          onChangeText={props.onChangeText} 
          style={styles.input} 
          autoCapitalize={props.autoCapitalize}
          secureTextEntry={passwordVisible} 
          keyboardType={props.keyboardType}/>
          <Icon style={styles.searchIcon} name={passwordVisible ? "visibility-off" : "visibility"} onPress={() => setPasswordVisible(!passwordVisible)} />
      </View>
        ); 
    
  }else{
      return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name={props.icon} size={20} color="#000"/>
            <TextInput 
            placeholder={props.placeholder} 
            value={props.value} 
            onChangeText={props.onChangeText}
            autoCapitalize={props.autoCapitalize} 
            style={styles.input}  
            keyboardType={props.keyboardType}/>
        </View>
          ); 
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const styles = StyleSheet.create({
  searchSection: {
    width: '80%',
    marginTop: windowHeight/50,
    marginBottom: windowHeight/50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
  },
});