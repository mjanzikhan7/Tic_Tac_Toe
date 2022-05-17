import React, { Children } from 'react';
import {
  Text , TouchableOpacity,Image
} from 'react-native';
import {style} from './style'

const Button : React.FC<{
    customStyle:any,
    title:string,
    onPress:any
}> = (prop) => {
 
  return (
      <TouchableOpacity style={[style.box, prop.customStyle]} onPress={prop.onPress}>
          <Text style={style.text}>{prop.title}</Text>
          </TouchableOpacity>
  );
};


export default Button;

