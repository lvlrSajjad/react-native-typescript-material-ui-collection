import * as React from "react";
import {View} from 'react-native';

export default (props) => {
    return <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} {...props} />;
};
