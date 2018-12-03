import * as React from 'react'
import { Text, View } from 'react-native'
import Switch from "./Switch";

interface MaterialSwitchProps {
  textFont?:string,
  textColor?:string,
  text?:string,
  color?:string
  onValueChanged?(value:boolean):void
}

export default class MaterialSwitch extends React.Component <MaterialSwitchProps> {

  static defaultProps = {
    onValueChanged : () => {}
  };

  render () {
    return (
      <View style={{padding:16,width:this.props.text?'100%':undefined,flexDirection:'row'}}>
        {this.props.text&&
        <Text style={{
          flex:1,
          fontFamily: this.props.textFont,
          color: this.props.textColor,
          fontSize: 14}}>{this.props.text}</Text>
        }
        <Switch onValueChanged={(value)=>this.props.onValueChanged(value)} color={this.props.color}/>
      </View>
    )
  }
}
