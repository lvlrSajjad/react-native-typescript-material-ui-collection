import * as React from "react";
import {Text} from "react-native";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export interface MaterialOutlinedButtonProps {
  text: string,
  icon?: React.ReactNode,
  margin?:number,
  textColor?: string,
  textFont?: string,
  onPress?():void,
  iconName?:string
}

export default (props: MaterialOutlinedButtonProps) =>
  <Ripple
    rippleColor={props.textColor}
    onPress={()=>props.onPress()}
    style={{borderRadius: 4,
      margin:props.margin,
      height: 36,
      minWidth: 64,
      borderWidth:2,
      borderColor:props.textColor,
      overflow:'hidden',
      flexDirection:'row',
      paddingLeft:16,
      paddingRight:16,
      alignItems: 'center',
      justifyContent: 'center'}}>
    {props.icon ? props.icon :
      props.iconName &&
      <MaterialCommunityIcons
        style={{margin:8}} name={props.iconName} size={14} color= {props.textColor}
      />
    }
    <Text style={{fontFamily:props.textFont,color:props.textColor,fontSize:14}}>{props.text}</Text>
  </Ripple>;
