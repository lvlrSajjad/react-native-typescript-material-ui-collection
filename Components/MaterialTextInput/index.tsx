import { TextField } from 'react-native-material-textfield';
import * as React from "react";
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface TextFieldProps extends TextInputProps{
  animationDuration?: number,

  fontSize?:number,
  titleFontSize?:number,
  labelFontSize?:number,
  labelHeight?:number,
  labelPadding?:number,
  inputContainerPadding?:number,

  labelTextStyle?: StyleProp<TextStyle>,
  titleTextStyle?: StyleProp<TextStyle>,
  affixTextStyle?: StyleProp<TextStyle>,

  tintColor?:string,
  textColor?:string,
  baseColor?:string,

  label:string,
  title?:string,

  characterRestriction?:number,

  error?:string,
  errorColor?:string,

  lineWidth?:number,
  activeLineWidth?:number,

  disabled?:boolean,
  disabledLineType?: {
    'solid', 'dotted', 'dashed', 'none'
  },
  disabledLineWidth?:number,

  renderAccessory?(type:any):void,

  prefix?: string,
  suffix?:string,

  containerStyle: StyleProp<ViewStyle>,
  inputContainerStyle: StyleProp<ViewStyle>,

  isRtl?:boolean
}

export default (props:TextFieldProps) => props.isRtl ?
  <TextField
    inputContainerStyle={{alignItems:'flex-end',justifyContent:'flex-end'}}
    {...props}
  />
  :
  <TextField
  {...props}
/>;
