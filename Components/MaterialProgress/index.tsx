import * as React from "react";
import {
  MaterialIndicator,
} from './MaterialIndicator';

export interface MaterialProgressProps {
  color:string,
  small?:boolean
}

export default (props: MaterialProgressProps) =><MaterialIndicator size={props.small?24:48} color={props.color} />;
