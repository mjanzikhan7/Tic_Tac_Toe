import React,{useState,useEffect} from 'react';
import {
    Alert,
    Image,
  SafeAreaView, Text, TouchableOpacity,View
} from 'react-native';
import {style} from './style'
import Box from '../../Components/Box'
import Button from '../../Components/Button'
import {TITLE,TURN_P1,TURN_P2,RESET} from '../../Utils/Constants'
import { Images } from '../../Assets/Images';
import {checkWinner,renderIcon} from '../../Utils/functions'
const GameScreen : React.FC<{}> = () => {
    // 0 means tile is empty
    // -1 means tile is X
    // 1 means tile is O 
    const initialState = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]
  const [gameState,setGameState] = useState(initialState)
  const [currentPlayer,setCurrentPlayer] = useState(1) // 1 means P1 and -1 means P2

    const initializeGame=()=>{
        setGameState(initialState)
        setCurrentPlayer(1)
    }

 

   const onBoxPress = (row:number,col:number)=>{
    let updatedGame = gameState.slice();
        if(updatedGame[row][col] == 0){
            updatedGame[row][col] = currentPlayer;
            setGameState(updatedGame)
            setCurrentPlayer(currentPlayer == 1?-1:1)
        }
        let winner = checkWinner(gameState)
        if(winner == 1){
            Alert.alert("P1 Won")
            initializeGame()
        }else if(winner == -1){
            Alert.alert("P2 Won")
            initializeGame()
        }
  }

  
  return (
    <SafeAreaView style={style.mainContainer}>
        <Text style={style.titleStyle}>{TITLE}</Text>
        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder,style.topBorder]} icon={renderIcon(0,0,gameState)} onPress={()=>onBoxPress(0,0)}/>
          <Box customStyle={[style.topBorder]} icon={renderIcon(0,1,gameState)} onPress={()=>onBoxPress(0,1)}/>
          <Box customStyle={[style.topBorder,style.rightBorder, ]} icon={renderIcon(0,2,gameState)} onPress={()=>onBoxPress(0,2)}/>
        </View>

        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder]} icon={renderIcon(1,0,gameState)} onPress={()=>onBoxPress(1,0)}/>
          <Box icon={renderIcon(1,1,gameState)} onPress={()=>onBoxPress(1,1)}/>
          <Box customStyle={[style.rightBorder]} icon={renderIcon(1,2,gameState)} onPress={()=>onBoxPress(1,2)}/>
        </View>

        <View style={style.rowStyle}>
          <Box customStyle={[style.leftBorder,style.bottomBorder]} icon={renderIcon(2,0,gameState)} onPress={()=>onBoxPress(2,0)}/>
          <Box customStyle={[style.bottomBorder]} icon={renderIcon(2,1,gameState)} onPress={()=>onBoxPress(2,1)}/>
          <Box customStyle={[style.bottomBorder,style.rightBorder, ]} icon={renderIcon(2,2,gameState)} onPress={()=>onBoxPress(2,2)}/>
        </View>
        <Text style={style.titleStyle}>{(currentPlayer == 1?TURN_P1:TURN_P2)}</Text>
        <Button
        title={RESET}
        onPress={()=>initializeGame()}/>
    </SafeAreaView>
  );
};


export default GameScreen;

