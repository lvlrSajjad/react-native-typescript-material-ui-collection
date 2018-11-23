import * as React from "react";
import {View, ViewProps} from 'react-native';

export interface MaterialContainer extends ViewProps {
  toolbar?():React.ReactNode,
  isRoot?: boolean
}

export default (props: MaterialContainer) => {
  return <View style={{width: '100%', height: '100%', flex: 1, padding: props.isRoot ? 0 : 16}}>
    { props.isRoot &&
      <View style={{width: '100%'}}>
        {props.toolbar()}
      </View>
    }
    {props.children}
  </View>;
};
