import * as React from 'react'
import {Component} from 'react';
import {View, Animated, ScrollView, Text, TouchableWithoutFeedback, Platform, Dimensions} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple';

const navBarHeight = (Platform.OS === "ios") ? 64 : 54;
const {width, height} = Dimensions.get("window");
const screenHeight = width < height ? height : width;

export interface MaterialBackdropProps {
    revealComponent?(): React.ReactNode,

    backdropBackgroundColor?: string,
    leftButtonIcon?: string,
    expandedTitle?: string,
    collapsedTitle?: string,

    content?(): React.ReactNode,

    textColor?: string,
    subHeaderText?: string,
    horizontalContent?: boolean,

    onSubheaderClick?(): void,

    onLeftButtonClick?(): void,

    onRightButtonClick?(): void,

    contentBackgroundColor?: string,
    subheaderTextColor?: string,

    onExpand?(): void,

    onCollapse?(): void,

    rightButtonIcon?: string
}


export interface MaterialBackdropState {
    isExpanded: boolean,
    height: number
}


export default class MaterialBackdrop extends Component<MaterialBackdropProps, MaterialBackdropState> {
    ViewScale = new Animated.Value(0);

    static defaultProps = {
        revealComponent:() => null,
        content: () => null,
        onSubheaderClick: () => {},
        onLeftButtonClick: () => {},
        onRightButtonClick: () => {},
        onExpand: () => {},
        onCollapse: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {isExpanded: false, height: 0}
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View style={{
                    backgroundColor: this.props.backdropBackgroundColor,
                    paddingTop: navBarHeight,
                    height: screenHeight,
                    paddingBottom: 16,
                }}>
                    {this.props.leftButtonIcon &&
                    <Ripple style={{
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => {
                        if (this.props.onLeftButtonClick) {
                            this.props.onLeftButtonClick();
                        }
                        this.state.isExpanded ? this.collapse() : this.expand()
                    }}>
                        <MaterialCommunityIcons
                            name={this.props.leftButtonIcon} size={24} color={this.props.textColor}
                        />
                    </Ripple>
                    }
                    {this.props.rightButtonIcon &&
                    <Ripple style={{
                        width: 56,
                        height: 56,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => {
                        if (this.props.onRightButtonClick) {
                            this.props.onRightButtonClick();
                        }
                        this.state.isExpanded ? this.collapse() : this.expand()
                    }}>
                        <MaterialCommunityIcons
                            name={this.props.rightButtonIcon} size={24} color={this.props.textColor}
                        />
                    </Ripple>
                    }
                    <Text style={{
                        alignSelf: 'center',
                        position: 'absolute',
                        color: this.props.textColor,
                        top: 18
                    }}>{this.state.isExpanded ? this.props.expandedTitle : this.props.collapsedTitle}</Text>
                    <Animated.View>
                        <ScrollView
                            style={{position: 'absolute', width: '100%', maxHeight: screenHeight - navBarHeight}}
                            onLayout={(event) => {
                                const {height} = event.nativeEvent.layout;

                                this.setState({height: height > screenHeight - navBarHeight - 1 ? screenHeight - 2 * navBarHeight - 16 : height})
                            }}>
                            {this.props.revealComponent()}
                        </ScrollView>
                    </Animated.View>
                </View>
                <Animated.View style={{
                    transform: [
                        {translateY: this.ViewScale},
                    ],
                    position: 'absolute',
                    top: navBarHeight,
                    backgroundColor: this.props.contentBackgroundColor,
                    flex: 1,
                    right: 0,
                    left: 0,
                    maxHeight: screenHeight - navBarHeight,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    minHeight: navBarHeight,
                    elevation: 4,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowRadius: 4,
                    shadowOpacity: 0.24
                }}>
                    {this.props.subHeaderText &&
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.collapse();
                            if (this.props.onSubheaderClick) {
                                this.props.onSubheaderClick();
                            }
                        }}
                        style={{height: 40, paddingBottom: 8, width: '100%'}}>
                        <Text
                            style={{
                                margin: 16,
                                fontSize: 16,
                                color: this.props.subheaderTextColor
                            }}>{this.props.subHeaderText}</Text>
                    </TouchableWithoutFeedback>
                    }
                    <ScrollView horizontal={this.props.horizontalContent}
                                style={{width: '100%', padding: 16, marginTop: 16}}>
                        {this.props.content()}
                    </ScrollView>
                </Animated.View>
            </View>
        )
    }

    collapse = () => {
        this.setState({isExpanded: false}, () => {
            if (this.props.onCollapse) {
                this.props.onCollapse();
            }
        });
        Animated.timing(
            this.ViewScale,
            {
                useNativeDriver: true,
                toValue: 0,
                duration: 200,
            }
        ).start();
    };
    expand = () => {
        this.setState({isExpanded: true}, () => {
            if (this.props.onExpand) {
                this.props.onExpand();
            }
        });
        Animated.timing(
            this.ViewScale,
            {
                useNativeDriver: true,
                toValue: this.state.height,
                duration: 200,
            }
        ).start();
    }
}
