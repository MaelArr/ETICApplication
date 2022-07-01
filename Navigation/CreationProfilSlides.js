import React, {useRef} from "react";
import {View, FlatList, Animated, Image} from "react-native";
import dataCreationProfil from "./../components/dataCreationProfil";
import CreationProfilItem from "./../components/CreationProfilItem";
import Paginator from "./../components/Paginator";

const CreationProfilSlides = ({navigation}, props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <FlatList
        data={dataCreationProfil}
        renderItem={({item}) => <CreationProfilItem item={item} navigation={navigation} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{nativeEvent: { contentOffset : {x: scrollX}}}], {useNativeDriver: false})}
      />
      <Paginator data={dataCreationProfil} scrollX={scrollX}/>
    </View>
  );
};

export default CreationProfilSlides;