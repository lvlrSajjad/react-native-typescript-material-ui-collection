import * as React from "react";
import {View, ViewProps} from 'react-native';

export interface MaterialContainerProps extends ViewProps {
  toolbar?():React.ReactNode,
  isRoot?: boolean,
  children?:React.ReactNode
}

export default function MaterialContainer ({isRoot = false, children = null , toolbar= null }: MaterialContainerProps) {
  return <View style={{width: '100%', height: '100%', flex: 1, padding: isRoot ? 0 : 16}}>
    { isRoot &&
      <View style={{width: '100%'}}>
        {toolbar()}
      </View>
    }
    {children}
  </View>;
};
