import React from "react";
import { View, Text } from "react-native";
import Estilos from "../../styles/styles"


export default function Game(props){
    const random = (max) => Math.floor(Math.random() * max);
    return(
        <View>
            <Text>Page Game {random(101)}</Text>
        </View>
    );
};