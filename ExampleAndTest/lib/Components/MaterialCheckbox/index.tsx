import * as React from "react";
import {Text, View} from "react-native";
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {MaterialProgress, MaterialHorizontalLinear} from "../..";
import {PureComponent} from "react";


export interface MaterialCheckboxProps {
    text?: string,
    isChecked?: boolean,
    textFont?: string,
    onCheckedChange?(isChecked: boolean): void,
    checkBoxColor?: string,
    textColor?: string,
    rtl?: boolean,
    progress?: boolean
}

export interface MaterialCheckboxState {
    isChecked?: boolean,
}

export default class MaterialCheckbox extends PureComponent<MaterialCheckboxProps, MaterialCheckboxState> {

    static defaultProps={
        onCheckedChange:()=>{},
        checkBoxColor:'purple'
    };

    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked
        }
    }

    render() {
        return (
            !this.props.rtl ?
                <MaterialHorizontalLinear>
                    {!this.props.progress ?

                        <Ripple
                            rippleColor={this.props.textColor}
                            onPress={() => {
                                this.setState({isChecked: !this.state.isChecked}, () => {
                                    this.props.onCheckedChange(this.state.isChecked);
                                })
                            }}
                            style={{
                                borderRadius: 4,
                                height: 36,
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <MaterialCommunityIcons
                                style={{margin: 8}} name={this.state.isChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24}
                                color={this.state.isChecked ? this.props.checkBoxColor : "grey"}
                            />
                        </Ripple>
                        :
                        <View style={{margin: 8}}>
                            <MaterialProgress  color={this.props.checkBoxColor} small/>
                        </View>
                    }
                    <Text style={{
                        fontFamily: this.props.textFont,
                        color: this.props.textColor,
                        fontSize: 14
                    }}>{this.props.text}</Text>
                </MaterialHorizontalLinear>
                :
                <MaterialHorizontalLinear>
                    <Text style={{
                        fontFamily: this.props.textFont,
                        color: this.props.textColor,
                        fontSize: 14
                    }}>{this.props.text}</Text>
                    {!this.props.progress ?

                        <Ripple
                            rippleColor={this.props.textColor}
                            onPress={() => {
                                this.setState({isChecked: !this.state.isChecked}, () => {
                                    this.props.onCheckedChange(this.state.isChecked);
                                })
                            }}
                            style={{
                                borderRadius: 4,
                                height: 36,
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <MaterialCommunityIcons
                                style={{margin: 8}} name={this.state.isChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24}
                                color={this.state.isChecked ? this.props.checkBoxColor : "grey"}
                            />
                        </Ripple>
                        :
                        <View style={{margin: 8}}>
                            <MaterialProgress  color={this.props.checkBoxColor} small/>
                        </View>
                    }
                </MaterialHorizontalLinear>
        )
    }
}
