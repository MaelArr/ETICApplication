import React from "react";
import {View, Text, Animated, useWindowDimensions} from "react-native";
import dataCreationProfil from "./dataCreationProfil";

const Paginator = ({date, scrollX}) => {
    const {width} = useWindowDimensions();

  return (
    <View style={{flexDirection: "row", height: 64}}>
        {dataCreationProfil.map((_, i) => {
            const inputRange = [(i-1)*width, i*width, (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10,20,10],
                extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3,1,0.3],
                extrapolate: 'clamp',
            });
            return <Animated.View style={{height: 10, borderRadius: 5, backgroundColor: "black", marginHorizontal: 8, width: dotWidth, opacity}} key={i.toString()} />;
        })}
    </View>
  );
};

export default Paginator;