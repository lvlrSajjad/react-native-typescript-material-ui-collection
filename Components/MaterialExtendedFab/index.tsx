import * as React from "react";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Text, View} from "react-native";
import {MaterialProgress} from "../..";

export interface MaterialExtendedFabProps {
  icon?: React.ReactNode,
  color?:string,
  iconColor?: string,
  onPress?():void,
  iconName:string,
  textFont?:string,
  text:string,
  position:string,//{'bottomLeft','topRight','topLeft','bottomRight'}
  progress?:boolean
}

export default (props: MaterialExtendedFabProps) =>
  <Ripple
    rippleColor={props.iconColor}
    onPress={()=>props.onPress()}
    style={{borderRadius: 28,
      height: 56,
      backgroundColor:props.color,
      overflow:'hidden',
      paddingLeft:16,
      paddingRight:16,
      flexDirection:'row',
      elevation:16,
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowRadius: 0.4,
      shadowOffset: {
            width: 0.4,
            height: 0.4
      },
      top:props.position === "top" ? 16:undefined,
      bottom:props.position === "bottom" ? 16:undefined,
      position:'absolute',
      alignItems: 'center',
      justifyContent: 'center'}}>
    {props.icon ? props.icon :
      (!props.progress && props.iconName) &&
      <MaterialCommunityIcons
        style={{marginRight:8}} name={props.iconName} size={24} color= {props.iconColor}
      />
    }
    {props.progress &&
    <View style={{marginRight:8}}>
    <MaterialProgress color={props.iconColor} small/>
    </View>
      }

    <Text style={{fontFamily:props.textFont,color:props.iconColor,fontSize:14}}>{props.text}</Text>

  </Ripple>;
