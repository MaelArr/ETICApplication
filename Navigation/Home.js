import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import BottomBar from '../components/BottomBar';

const Home = ({navigation}, props) => {
    return(
        <View style={{justifyContent: "flex-end", flex: 1}}>
            <BottomBar />
        </View>
        
    );
}

export default Home;