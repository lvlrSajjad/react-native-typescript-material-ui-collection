import * as React from "react";
import {View, ViewProps} from 'react-native';

export interface MaterialRowProps extends ViewProps {
}

export default (props: MaterialRowProps) => {
    return <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}/>;
};
