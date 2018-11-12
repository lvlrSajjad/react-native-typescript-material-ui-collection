import * as React from "react";
import {Text} from "react-native";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export interface MaterialTextButtonProps {
  text: string,
  icon?: React.ReactNode,
  margin?:number,
  textColor?: string,
  textFont?: string,
  iconName?:string,
  onPress?():void
}

export default (props: MaterialTextButtonProps) =>
  <Ripple
    rippleColor={props.textColor}
    onPress={()=>props.onPress()}
    style={{borderRadius: 4,
      margin:props.margin,
      height: 36,
      minWidth: 64,
      overflow:'hidden',
      paddingLeft:16,
      paddingRight:16,
      flexDirection:'row',
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
