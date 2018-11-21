import * as React from 'react'
import {View, TouchableWithoutFeedback, Animated} from 'react-native'

interface SwitchProps {
  color: string,
  onValueChanged?(value:boolean):void
}

interface SwitchState {
  isActive: boolean
}

export default class Switch extends React.Component <SwitchProps, SwitchState> {
  constructor(props) {
    super(props);
    this.state = {isActive: false}
  }
  ButtonTransform = new Animated.Value(0);
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{this.state.isActive?this.disable():this.enable()}}>
        <Animated.View style={{width: 36, height: 20, justifyContent: 'center'}}>
          <View style={{
            position: 'absolute',
            width: '100%',
            height: 16,
            opacity: 0.5,
            backgroundColor: this.state.isActive ? this.props.color : '#212121',
            borderRadius: 10
          }}/>
          <Animated.View style={{
            transform: [
              {translateX: this.ButtonTransform},
            ],
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: this.state.isActive ? this.props.color : 'white',
            elevation: 2
          }}/>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  disable = () => {
    this.setState({isActive: false}, () => {
      if (this.props.onValueChanged) {
        this.props.onValueChanged(false);
      }
    });
    Animated.timing(
      this.ButtonTransform,
      {
        useNativeDriver: true,
        toValue: 0,
        duration: 100,
      }
    ).start();
  };
  enable = () => {
    this.setState({isActive: true}, () => {
      if (this.props.onValueChanged) {
        this.props.onValueChanged(true);
      }
    });
    Animated.timing(
      this.ButtonTransform,
      {
        useNativeDriver: true,
        toValue: 16,
        duration: 100,
      }
    ).start();
  }

}
