import * as React from 'react'
import {Text, View, TextInput} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple';

// Styles

interface MaterialToolbarProps {
  color?: string,
  font?: string,
  text?: string,
  haveTypeMode?: boolean,
  typeModeIcon?:string,
  onChangeText?(text:string),
  onTypeModePress?(): void,
}

interface MaterialToolbarState {
  isTyping: boolean
}

export default class MaterialToolbar extends React.Component <MaterialToolbarProps, MaterialToolbarState> {
  constructor(props) {
    super(props);
    this.state = {isTyping: false}

  }

  static defaultProps = {
    color: '#212121',
    typeModeIcon:'magnify',
    onTypeModePress: () => {
    },
    onChangeText:()=>{}
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 56,
          flex: 1,
          flexDirection: 'row'
        }}>
        {this.state.isTyping ?
          <TextInput
            onChangeText={(text)=>this.props.onChangeText(text)}
            style={{marginBottom:4,paddingBottom:0,borderBottomWidth:1,borderBottomColor:this.props.color,flex: 1, alignSelf: 'center', fontSize: 16, color: this.props.color, fontFamily: this.props.font}}/>
            :
            <Text
              style={{
                flex: 1,
                alignSelf: 'center',
                fontSize: 16,
                color: this.props.color,
                fontFamily: this.props.font
              }}>
              {this.props.text}
            </Text>
            }
            {this.props.haveTypeMode &&
            <Ripple
              onPress={() => {
                this.setState({isTyping:!this.state.isTyping});
                this.props.onTypeModePress()
              }}
              style={{borderRadius:28,overflow:'hidden',width: 56, height: 56, alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons
                style={{margin: 8}} name={this.state.isTyping ? 'close' : this.props.typeModeIcon} size={24}
                color={this.props.color}
              />
            </Ripple>
            }
          </View>
          )
        }

        }
