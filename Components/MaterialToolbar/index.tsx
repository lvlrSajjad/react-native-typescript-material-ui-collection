import * as React from 'react'
import {View} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple';
import {ReactNode} from "react";

// Styles

interface MaterialToolbarProps {
  color?: string,
  onLeftIconPress?():void,
  onRightIconPress?():void,
  content?():ReactNode
  iconsColor?:string,
  leftIcon?:string,
  rightIcon?:string
}

interface MaterialToolbarState {
}

export default class MaterialToolbar extends React.Component <MaterialToolbarProps, MaterialToolbarState> {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    color: '#eeeeee',
    onLeftIconPress:()=>{},
    onRightIconPress:()=>{},
    iconsColor:'#212121'
  };

  render() {
    return (
      <View style={{
        alignSelf: 'flex-start',
        height: 56,
        width:'100%',
        backgroundColor: this.props.color,
        flexDirection: 'row',
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 4,
        shadowOpacity: 0.24
      }}>
        {this.props.leftIcon &&
        <Ripple onPress={()=>this.props.onLeftIconPress()} style={{borderRadius:28,overflow:'hidden',width:56,height:56,alignItems:'center',justifyContent:'center'}}>
          <MaterialCommunityIcons
            style={{margin: 8}} name={this.props.leftIcon} size={24}
            color={this.props.iconsColor}
          />
        </Ripple>
        }
        {this.props.content &&
          this.props.content()
        }
        {this.props.rightIcon &&
        <Ripple onPress={()=>this.props.onRightIconPress()} style={{borderRadius:28,overflow:'hidden',width:56,height:56,alignItems:'center',justifyContent:'center'}}>
          <MaterialCommunityIcons
            style={{margin: 8}} name={this.props.rightIcon} size={24}
            color={this.props.iconsColor}
          />
        </Ripple>
        }
      </View>
    )
  }

}
