
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center"
    },
    titleStyle:{
        fontWeight:'bold',
        marginVertical:hp('10%'),
        fontSize:hp('2%')
    },
    rowStyle:{
        flexDirection:'row'
    },
    leftBorder:{
        borderLeftWidth:0
    },
    rightBorder:{
        borderRightWidth:0
    },
    topBorder:{
        borderTopWidth:0
    },
    bottomBorder:{
        borderBottomWidth:0
    },
    circleStyle:{
        color:"red",
        fontSize:60
    }

});
