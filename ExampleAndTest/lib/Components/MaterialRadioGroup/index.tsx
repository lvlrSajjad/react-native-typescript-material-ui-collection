import * as React from 'react'
import {FlatList, Text, TouchableWithoutFeedback, View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Styles

interface MaterialRadioGroupProps {
  data: any,
  color: string,
  textFont?: string,
  textColor?: string,
  isRtl?:boolean,
  onItemPress?(item, index): void
}

interface MaterialRadioGroupState {
  selected: number
}

export default class MaterialRadioGroup extends React.Component <MaterialRadioGroupProps, MaterialRadioGroupState> {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1
    }
  }

  static defaultProps = {
    onItemPress: () => {},
    textColor:'black'
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={([], index) => index.toString()}
        renderItem={({item, index}) => this.renderListItems(item, index)}
      />
    )
  }

  renderListItems = (item, index) => {
    return (
      !this.props.isRtl?
      <TouchableWithoutFeedback onPress={() => this.onItemPress(item, index)}>
        <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'flex-start'}}>
          <MaterialCommunityIcons
            style={{margin: 8}} name={index === this.state.selected ? "radiobox-marked" : "radiobox-blank"} size={24}
            color={index === this.state.selected ? this.props.color : "grey"}
          />
          <Text style={{
            fontFamily: this.props.textFont,
            color: this.props.textColor,
            fontSize: 14
          }}>{item.text}</Text>
        </View>
      </TouchableWithoutFeedback>
        :
        <TouchableWithoutFeedback onPress={() => this.onItemPress(item, index)}>
          <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{
              fontFamily: this.props.textFont,
              color: this.props.textColor,
              fontSize: 14
            }}>{item.text}</Text>
            <MaterialCommunityIcons
              style={{margin: 8}} name={index === this.state.selected ? "radiobox-marked" : "radiobox-blank"} size={24}
              color={index === this.state.selected ? this.props.color : "grey"}
            />

          </View>
        </TouchableWithoutFeedback>
    )
  };

  onItemPress = (item, index) => {
    this.setState({selected: index});
    this.props.onItemPress(item, index);
  }
}
