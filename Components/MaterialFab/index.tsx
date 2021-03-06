import * as React from "react";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {MaterialProgress} from "../..";

export interface MaterialFabProps {
  icon?: React.ReactNode,
  color?:string,
  iconColor?: string,
  onPress?():void,
  iconName:string,
  mini?:boolean,
  position:string,//{'bottomLeft','topRight','topLeft','bottomRight'}
  progress?:boolean
}

export default (props: MaterialFabProps) =>
  <Ripple
    rippleColor={props.iconColor}
    onPress={()=>props.onPress()}
    style={{borderRadius: props.mini?20:28,
      height:props.mini? 40 : 56,
      width: props.mini? 40 : 56,
      backgroundColor:props.color,
      overflow:'hidden',
      zIndex:900,
      elevation:16,
      shadowColor:'black',
      shadowOffset: {
         width: 0,
         height: 16
      },
      shadowRadius: 16,
      shadowOpacity: 0.24,
      left:props.position === "bottomLeft"|| props.position === "topLeft" ? 16:undefined,
      right:props.position === "bottomRight"|| props.position === "topRight" ? 16:undefined,
      top:props.position === "topRight"|| props.position === "topLeft" ? 16:undefined,
      bottom:props.position === "bottomRight"|| props.position === "bottomLeft" ? 16:undefined,
      position:'absolute',
      alignItems: 'center',
      justifyContent: 'center'}}>
    {props.icon ? props.icon :
      (!props.progress && props.iconName) &&
      <MaterialCommunityIcons
        style={{margin:8}} name={props.iconName} size={24} color= {props.iconColor}
      />
    }
    {props.progress &&
    <MaterialProgress color={props.iconColor} small/>
    }
  </Ripple>;
