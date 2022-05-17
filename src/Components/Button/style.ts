import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const style = StyleSheet.create({
    box:{
        borderRadius:hp('2%'),
        height:hp('6%'),
        width:wp('25%'),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'red'

    },
    text:{
        fontSize:hp('2%'),
        fontWeight:"bold",
        color:"white"
    }

});
