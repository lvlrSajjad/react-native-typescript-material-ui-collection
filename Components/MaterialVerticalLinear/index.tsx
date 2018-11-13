import * as React from "react";
import {View, ViewProps} from 'react-native';

export default (props: ViewProps) => {
  return <View {...props} style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}/>;
};
