import * as React from 'react'
import {Image, ImageSourcePropType, View, ViewStyle} from 'react-native'

interface MaterialCardProps {
  elevation?: number,
  margin?:number,
  header?(): React.ReactNode,
  style?:ViewStyle,
  backgroundImageSource?: ImageSourcePropType,
  backgroundColor?:string
}

export default class MaterialCard extends React.Component <MaterialCardProps> {

  static defaultProps={
    header:()=>{},
    elevation:2,
    margin:8,
    backgroundColor:'#eeeeee'
  };

  render() {
    return (
      <View
          style={{...this.props.style,
          backgroundColor:this.props.backgroundColor,
          overflow:'hidden',
          borderRadius: 4,
          elevation: this.props.elevation,
          margin:this.props.margin,
          shadowColor:'black',
          shadowOffset: {
          width: 0,
          height: this.props.elevation
        },
        shadowRadius: this.props.elevation,
        shadowOpacity: 0.24}}>
        {this.props.backgroundImageSource &&
        <Image style={{position: 'absolute', width: '100%', height: '100%'}} source={this.props.backgroundImageSource}/>
        }
        {this.props.header()}

        {this.props.children}
      </View>
    )
  }
}
