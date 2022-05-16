import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const style = StyleSheet.create({
    box:{
        borderWidth:2,
        height:hp('12%'),
        width:wp('25%'),
        alignItems:"center",
        justifyContent:"center"

    },
    image:{
        height:hp('8%'),
        width:wp('15%'),
    }

});
