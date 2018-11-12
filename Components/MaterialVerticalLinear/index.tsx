import * as React from "react";
import {View, ViewProps} from 'react-native';

export interface MaterialColumnProps extends ViewProps {
}

export default (props: MaterialColumnProps) => {
  return <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}/>;
};
