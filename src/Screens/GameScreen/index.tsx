import React,{useState} from 'react';
import {
    Image,
  SafeAreaView, Text, TouchableOpacity,View
} from 'react-native';
import {style} from './style'
import Box from '../../Components/Box'
import {TITLE,TURN} from '../../Utils/Constants'
import { Images } from '../../Assets/Images';

const GameScreen : React.FC<{}> = () => {

   const initialState = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
  ]
 

  return (
    <SafeAreaView style={style.mainContainer}>
        <Text style={style.titleStyle}>{TITLE}</Text>
        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder,style.topBorder]} icon={Images.Circle}/>
          <Box customStyle={[style.topBorder]} icon={Images.Cross}/>
          <Box customStyle={[style.topBorder,style.rightBorder, ]} icon={Images.Circle}/>
        </View>

        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder]} icon={Images.Circle}/>
          <Box icon={Images.Circle}/>
          <Box customStyle={[style.rightBorder]} icon={Images.Circle}/>
        </View>

        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder,style.bottomBorder]} icon={Images.Circle}/>
          <Box customStyle={[style.bottomBorder]} icon={Images.Circle}/>
          <Box customStyle={[style.bottomBorder,style.rightBorder, ]} icon={Images.Circle}/>
        </View>
        <Text style={style.titleStyle}>{TURN}</Text>
    </SafeAreaView>
  );
};


export default GameScreen;

