import * as React from 'react'
import {Component} from 'react'
import {Animated , Platform, StatusBar, StyleSheet, View, ScrollViewProps} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple';

import {ifIphoneX} from './helper'

const DEFAULT_TOOLBAR_HEIGHT = 300;

export interface MaterialCollapsibleToolbarContainerProps extends ScrollViewProps {
    collapsedNavBarBackgroundColor?: string,
    imageSource?: string,
    title?:string,
    onContentScroll?(): void,
    renderContent?(): React.ReactNode,
    renderCollapsedToolbarContent?():React.ReactNode,
    toolBarHeight?: number,
    translucentStatusBar?: boolean,
    textColor?: string,
    leftButtonIcon?: string,
    onLeftIconPress?(): void,
    rightButtonIcon?: string,
    onRightIconPress?(): void
}

export default class MaterialCollapsibleToolbarContainer extends Component<MaterialCollapsibleToolbarContainerProps> {

    static defaultProps = {
        collapsedNavBarBackgroundColor: '#FFF',
        imageSource: '',
        onContentScroll: undefined,
        toolBarHeight: DEFAULT_TOOLBAR_HEIGHT,
        translucentStatusBar: false
    };
    titleFontSize: any;
    statusBarHeight: number;
    navBarHeight: number;
    maxScrollableHeight: number;
    scrollOffsetY: any;
    toolBarOpacity: any;
    toolBarOverlayOpacity: any;
    navBarOpacity: any;
    navBarOverlayOpacity: any;
    blurRadius:any;

    constructor(props) {
        super(props);

        const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
        const ANDROID_STATUS_BAR_HEIGHT = props.translucentStatusBar ? StatusBar.currentHeight : 0;

        this.statusBarHeight = Platform.OS === 'ios' ? ifIphoneX(44, 20) : ANDROID_STATUS_BAR_HEIGHT;
        this.navBarHeight = Platform.OS === 'ios' ? APPBAR_HEIGHT + this.statusBarHeight : APPBAR_HEIGHT;
        this.maxScrollableHeight = props.toolBarHeight - this.navBarHeight;
        const inputRange1 = [this.maxScrollableHeight / 2, this.maxScrollableHeight];
        const inputRange2 = [this.maxScrollableHeight - 0.1, this.maxScrollableHeight];
        this.blurRadius=new Animated.Value(0);
        this.scrollOffsetY = new Animated.Value(0);

        this.toolBarOpacity = this.scrollOffsetY.interpolate({
            inputRange: inputRange1,
            outputRange: [1, 0]
        });

        this.toolBarOverlayOpacity = this.scrollOffsetY.interpolate({
            inputRange: inputRange1,
            outputRange: [0, 1]
        });

        this.navBarOpacity = this.scrollOffsetY.interpolate({
            inputRange: inputRange2,
            outputRange: [0, 1]
        });

        this.navBarOverlayOpacity = this.scrollOffsetY.interpolate({
            inputRange: inputRange2,
            outputRange: [1, 0]
        });
        this.titleFontSize = this.scrollOffsetY.interpolate({
            inputRange: inputRange1,
            outputRange: [2, 1]
        });
        this.blurRadius = this.scrollOffsetY.interpolate({
            inputRange: inputRange1,
            outputRange: [1, 2]
        })
    }

    render() {
        const {
            collapsedNavBarBackgroundColor,
            imageSource,
            onContentScroll,
            renderContent,
            toolBarHeight,
            ...props
        } = this.props;

        if (!imageSource) {
            console.error('Either an image source or a custom toolbar component must be provided')
        }

        return (
            <View style={styles.container}>
                <Animated.ScrollView
                    {...props}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.scrollOffsetY}}}],
                        {
                            useNativeDriver: true,
                            listener: onContentScroll
                        }
                    )}
                >


                    <Animated.View
                        style={[
                            styles.toolBarOverlay,
                            {
                                backgroundColor: collapsedNavBarBackgroundColor,
                                height: toolBarHeight,
                                opacity: this.toolBarOverlayOpacity
                            }
                        ]}
                    >
                        <MaterialCommunityIcons
                            style={{position: 'absolute', left: 16, top: 16}} name={'menu'} size={24} color={'white'}
                        />

                        <Animated.Text style={{
                            transform: [
                                {scale: this.titleFontSize}],
                            position: 'absolute',
                            marginLeft: 56,
                            bottom: 16,
                            textAlign: 'center',
                            color: '#FFF'
                        }}>{this.props.title}</Animated.Text>

                    </Animated.View>

                    <Animated.View style={{opacity: this.toolBarOpacity}}>

                        <View style={{height: toolBarHeight}}>
                            <Animated.Image
                                source={{uri: imageSource || ''}}
                                style={{height: toolBarHeight}}
                                blurRadius={this.blurRadius}
                            />

                            <Animated.View style={{position:'absolute', top:50,bottom:50,left:0,right:0,alignItems:'center',justifyContent:'center'}}>
                                {this.props.renderCollapsedToolbarContent()}
                            </Animated.View>

                            <Animated.Text style={{
                                transform: [
                                    {scale: this.titleFontSize}],
                                position: 'absolute',
                                marginLeft: 56,
                                bottom: 16,
                                textAlign: 'center',
                                color: '#FFF'
                            }}>{this.props.title}</Animated.Text>

                        </View>


                    </Animated.View>

                    {renderContent()}

                </Animated.ScrollView>

                <Animated.View
                    style={[
                        styles.navBarContainer,
                        {
                            backgroundColor: collapsedNavBarBackgroundColor,
                            height: this.navBarHeight,
                            opacity: this.navBarOpacity,
                            paddingTop: this.statusBarHeight
                        }
                    ]}
                >
                    <Ripple
                        rippleColor={this.props.textColor}
                        onPress={() => this.props.onLeftIconPress()}
                        style={{
                            position: 'absolute', left: 0, top: 0,
                            height: 56,
                            width: 56,
                            zIndex: 100,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <MaterialCommunityIcons
                            name={this.props.leftButtonIcon} size={24} color={this.props.textColor}
                        />
                    </Ripple>
                    {this.props.rightButtonIcon &&
                    <Ripple
                        rippleColor={this.props.textColor}
                        onPress={() => this.props.onRightIconPress()}
                        style={{
                            position: 'absolute', right: 0, top: 0,
                            height: 56,
                            width: 56,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <MaterialCommunityIcons
                            name={this.props.rightButtonIcon} size={24} color={this.props.textColor}
                        />
                    </Ripple>
                    }
                    <Animated.Text style={{
                        transform: [
                            {scale: 1}],
                        position: 'absolute',
                        marginLeft: 56,
                        bottom: 16,
                        textAlign: 'center',
                        color: '#FFF'
                    }}>{this.props.title}</Animated.Text>
                </Animated.View>
                <Ripple
                    rippleColor={this.props.textColor}
                    onPress={() => this.props.onLeftIconPress()}
                    style={{
                        position: 'absolute', left: 0, top: 0,
                        height: 56,
                        width: 56,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <MaterialCommunityIcons
                        name={this.props.leftButtonIcon} size={24} color={this.props.textColor}
                    />
                </Ripple>
                {this.props.rightButtonIcon &&
                <Ripple
                    rippleColor={this.props.textColor}
                    onPress={() => this.props.onRightIconPress()}
                    style={{
                        position: 'absolute', right: 0, top: 0,
                        height: 56,
                        width: 56,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <MaterialCommunityIcons
                        name={this.props.rightButtonIcon} size={24} color={this.props.textColor}
                    />
                </Ripple>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolBarOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    navBarContainer: {
        position: 'absolute' as 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row' as 'row',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: StyleSheet.hairlineWidth,
                shadowOffset: {
                    width: StyleSheet.hairlineWidth,
                    height: StyleSheet.hairlineWidth
                },
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'rgba(0, 0, 0, .3)'
            },
            android: {
                elevation: 4
            }
        })
    },
    navBarOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        left: 0,
        right: 0
    }
});
