import React, { Children } from 'react';
import {
  Text , TouchableOpacity,Image
} from 'react-native';
import {style} from './style'

const Box : React.FC<{
    customStyle:any,
    icon:any,
    onPress:any
}> = (prop) => {
 
  return (
      <TouchableOpacity style={[style.box, prop.customStyle]} onPress={prop.onPress}>
          {prop?.icon && <Image source={prop.icon} style={style.image}/>}
          </TouchableOpacity>
  );
};


export default Box;

