import * as React from "react";
import {View} from 'react-native';

export default (props) => {
    return <View {...props} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}/>;
};
