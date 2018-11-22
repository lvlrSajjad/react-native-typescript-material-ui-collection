import * as React from "react";
import {Text} from "react-native";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {MaterialProgress} from "../..";

export interface MaterialContainedButtonProps {
  text: string,
  icon?: React.ReactNode,
  margin?: number,
  color?: string,
  textColor?: string,
  textFont?: string,

  onPress?(): void,

  iconName?: string,
  progress?: boolean,

  style?:object
}

export default (props: MaterialContainedButtonProps) =>
  <Ripple
    rippleColor={props.textColor}
    onPress={() => props.onPress()}
    style={{
      borderRadius: 4,
      margin: props.margin,
      height: 36,
      minWidth: 64,
      backgroundColor: props.color,
      overflow: 'hidden',
      paddingLeft: 16,
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowRadius: 0.1,
      shadowOffset: {
            width: 0.1,
            height: 0.1
      },
      flexDirection: 'row',
      paddingRight: 16,
      alignItems: 'center',
      justifyContent: 'center',
      ...props.style
    }}>
    {props.icon ? props.icon :
      (!props.progress && props.iconName) &&
      <MaterialCommunityIcons
        style={{margin: 8}} name={props.iconName} size={14} color={props.textColor}
      />
    }
    {!props.progress &&
    <Text style={{fontFamily: props.textFont, color: props.textColor, fontSize: 14}}>{props.text}</Text>
    }
    {props.progress &&
    <MaterialProgress color={props.textColor} small/>
    }
  </Ripple>;
