import * as React from 'react';
import {View} from "react-native";
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

export default (props) => {
  const nav = props.navigation;
  const routes = props.isRtl ? nav.state.routes.slice(0).reverse() : nav.state.routes;

  return (
    <View style={{...props.style, height: 56, width: '100%', flexDirection: 'row'}}>
      {routes.map((route, i) => (
        <Ripple
          key={i}
          onPress={() => {
            props.jumpTo(route.key);
          }}
          style={{flex: 1, height: 56, alignItems: 'center', justifyContent: 'center'}}
        >
          <Animatable.View useNativeDriver transition={"translateY"}
                           style={{transform: [{translateY: props.noLabel? 0 :props.animated ? nav.isFocused(route.key) ? 0 : 16 : 0}]}}>
            <MaterialIcons
              name={props.iconName(route.key)}
              size={24}
              style={{marginBottom: 0}}
              color={nav.isFocused(route.key) ?
                props.selectedColor :
                props.defaultColor
              }
            />
          </Animatable.View>
          {!props.noLabel &&
          <Animatable.Text useNativeDriver transition={"opacity"} style={{
            opacity: props.animated ? nav.isFocused(route.key) ? 1 : 0 : 1,
            color: nav.isFocused(route.key) ? props.selectedColor : props.defaultColor,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize
          }}
          >
            {route.key}
          </Animatable.Text>
          }
        </Ripple>
      ))}
    </View>
  )
}
