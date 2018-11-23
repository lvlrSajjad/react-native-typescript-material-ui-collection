import * as React from 'react'
import {View, ViewStyle} from 'react-native'

interface MaterialCardProps {
  style?:ViewStyle
}

export default class MaterialCardContent extends React.Component <MaterialCardProps> {


  render() {
    return (
        <View style={{width: '100%', padding: 16}}>
          {this.props.children}
        </View>
    )
  }
}
