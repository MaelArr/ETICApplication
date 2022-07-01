import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View, Pressable } from 'react-native';
import BottomBar from '../components/BottomBar';
import { firebase } from '../firebase';

const Home = ({navigation}, props) => {
    const [users, setUsers] = useState([]);
    const dataBase = firebase.firestore().collection("informationsUser");

    console.log("home"); 

    useEffect(() => {
        dataBase.
        onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc) => {
                    const {country, genre, language, phone, profileImage, userName} = doc.data()
                    users.push({
                        country,
                        genre,
                        language,
                        phone,
                        profileImage,
                        userName,
                    })
                })
                setUsers(users) 

            }
        )
    }, [])

    const handleSignOut = () => {
        firebase.auth()
        .signOut()
        .then(() => {
            navigation.replace("LogIn")
        })
        .catch(error => alert(error.message))
    }


    return(
        <View style={{justifyContent: "flex-end", flex: 1}}>
            <Text>Email : {firebase.auth().currentUser?.email} {"\n"}</Text>
            <FlatList 
                data={users}
                numColumns = {1}
                renderItem = {({item}) => (
                    <Pressable>
                        <View>
                            <Text>{item.country}</Text>
                        </View>
                    </Pressable>

                )}

            />
            <TouchableOpacity style={{alignItems: "center", backgroundColor: "red"}} onPress={handleSignOut}>
                <Text>Sign out</Text>
            </TouchableOpacity>
            <BottomBar navigation={navigation}/>
        </View>
        
    );
}

export default Home;