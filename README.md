<h1 align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/ignite-typescript-logo.png" alt="IgniTypescript" width="400">
<br>
 Typescript material ui collection
 </br>
</h1>

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Here you can see a Created by me and some hand picked collection of material components from various ui libraries. The goal is making ui development easy and seamless (Ui/ux itself with material design rules and Coding Experience) For now, components are in a limited number but i'm working on increasing their number to fulfill all ui/ux needed components

## Installation

The library is installed and linked by default inside my boilerplate <a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript">ignite-boilerplate-andross-typescript</a>

You can also install it standalone by below commands :

```
npm install react-native-material-textfield react-native-vector-icons react-native-typescript-material-ui-collection react-native-material-ripple --save
react-native link
```
## Components and Utils

### Material Colors 
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/colors.png" width="50%">
 </p>

  I just converted <a href="https://www.materialui.co/colors"> www.materialui.co/colors </a> colors to an object for easier use of these colors
   
#### Usage :
   ```typescript jsx
       import {MaterialColors} from 'react-native-typescript-material-ui-collection';
        MaterialColors.colorName.CcolorTone
        eg:
        MaterialColors.deepPurple.C400 //returns: #7E57C2 as string
   ```
### Material Vertical Linear 

 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-vertical.png" width="50%">
 </p>
 
this component is a view with default column direction it can be used for better readability of jsx ui code 

#### Usage :

  ```typescript jsx
     import {MaterialHorizontalLinear} from 'react-native-typescript-material-ui-collection';
      <MaterialHorizontalLinear>
      </MaterialHorizontalLinear>
   ```
 ### Material Horizontal Linear 
 
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-horizontal.png" width="50%">
 </p>
  
  this component is a view with default row direction it can be used for better readability of jsx ui code 
  
 #### Usage :
 
   ```typescript jsx
      import {MaterialVerticalLinear} from 'react-native-typescript-material-ui-collection';
       <MaterialVerticalLinear>
       </MaterialVerticalLinear>
   ```    
   
  ### Material Container 
   
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/container.png" width="30%">
 </p>
 
  This component is a full width/height view for container view you can use it for more ui/ux code readability
  
 #### Usage :
  
   ```typescript jsx
       import {MaterialContainer} from 'react-native-typescript-material-ui-collection';
        <MaterialContainer
          isRoot: boolean // if you set this prop true , your component will have no padding and you can render a toolbar view at top of it the default padding is 16
          toolbar:React.ReactNode // this view will render at top of the view if you set isRoot true
        >
            <MaterialContainer
             // if you want to use this inside a root it is still a full width/height view with 16 dp padding
            >
            </MaterialContainer>
        </MaterialContainer>
   ```        
### Material Text Input 
 
 <p align="center">
<img src="https://cloud.githubusercontent.com/assets/2055622/24325711/eaa4ff08-11af-11e7-8550-2504c1580979.gif" alt="example" style="max-width:100%;">
 </p>
this component is basically
<a href="https://github.com/n4kz/react-native-material-textfield" >react-native-material-textfield</a>
i just added it's types to typescript and rtl support (for it's label)

#### Usage :
  ```typescript jsx
     import {MaterialTextInput} from 'react-native-typescript-material-ui-collection';
      <MaterialTextInput
      isRtl={true} //just added this prop you can see other props from above link
      />
   ```    
### Material Progress
<p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialprogress.gif" width="30%">
 </p>
 
 I used <a href="https://github.com/n4kz/react-native-indicators">react-native-indicators</a> code to do this with a few changes and turning the used code to typescript
 I have also used this component for progress inside below button components
 
 #### Usage:
 
 this is exactly the code of above gif
 
 ```typescript jsx
import * as React from 'react'
import {Component} from 'react';
import { View} from 'react-native'
import styles from './Styles/LaunchScreenStyles'
import {MaterialProgress} from 'react-native-typescript-material-ui-collection';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialProgress
          color="purple"
        />
        <MaterialProgress
          color="purple"
          small
        />
      </View>
    )
  }
}

```
#### Props:
 
 ```typescript jsx
  color:string,//just the color
  small?:boolean// using this will render small progress i'ts good for using inside buttons or etc.
```

### Material Buttons       
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialbuttons.gif" width="30%">
  <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/progressbuttons.gif" width="30%">
 </p>
  
  I Made these three buttons exactly based on material.io design guidelines
  
#### Usage:

this is exactly the code of above gif

   ```typescript jsx
   import * as React from 'react'
   import {Component} from 'react';
   import { View} from 'react-native'
   import styles from './Styles/LaunchScreenStyles'
   import {MaterialTextButton,
   MaterialOutlinedButton,
   MaterialContainedButton} from 'react-native-typescript-material-ui-collection';
   
   export default class LaunchScreen extends Component {
     render() {
       return (
         <View style={styles.container}>
           <MaterialTextButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Text Button"
             textColor="purple"
             margin={8}
           />
           <MaterialOutlinedButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Outlined Button"
             textColor="purple"
             margin={8}
           />
           <MaterialContainedButton
             onPress={() => {
               console.log("pressed")
             }}
             color='purple'
             text="Material Contained Button"
             textColor="white"
             margin={8}
           />
           <MaterialTextButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Text Button"
             textColor="purple"
             margin={8}
             iconName="check-circle"
           />
           <MaterialOutlinedButton
             onPress={() => {
               console.log("pressed")
             }}
             text="Material Outlined Button"
             textColor="purple"
             margin={8}
             iconName="check-circle"
           />
           <MaterialContainedButton
             onPress={() => {
               console.log("pressed")
             }}
             color='purple'
             text="Material Contained Button"
             textColor="white"
             margin={8}
             iconName="check-circle"
           />
         </View>
       )
     }
   }

   ```
#### Props:

##### MaterialTextButton:
```typescript jsx
    text: string,
    icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
    margin?:number,
    textColor?: string,
    textFont?: string,
    iconName?:string, // if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
    onPress?():void,
    progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs
```
##### MaterialOutlinedButton:
```typescript jsx
  text: string,
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  margin?:number,
  textColor?: string,
  textFont?: string,
  onPress?():void,
  iconName?:string, // if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
##### MaterialContainedButton:
```typescript jsx
  text: string,
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  margin?:number,
  color?:string,
  textColor?: string,
  textFont?: string,
  onPress?():void,
  iconName?:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
   
### Material FAB 

 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialfab.gif" width="30%">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/progressfab.gif" width="30%">
 </p>
   I Made these two FABs exactly based on material.io design guidelines

#### Usage :
this is exactly the code of above gif

  ```typescript jsx
     import * as React from 'react'
     import {Component} from 'react';
     import { View} from 'react-native'
     import styles from './Styles/LaunchScreenStyles'
     import {MaterialFab, MaterialExtendedFab} from 'react-native-typescript-material-ui-collection';
     
     export default class LaunchScreen extends Component {
       render() {
         return (
           <View style={styles.container}>
             <MaterialFab 
             mini 
             onPress={()=>{console.log('onpress')}} 
             position="bottomLeft" 
             iconColor="white" 
             iconName='check-circle' color="purple"
             />
             <MaterialFab 
             onPress={()=>{console.log('onpress')}} 
             position="bottomRight" 
             iconColor="white" 
             iconName='check-circle' 
             color="purple"
             />
             <MaterialExtendedFab 
             onPress={()=>{console.log('onpress')}} 
             text="Extended" 
             position="bottom" 
             iconColor="white" 
             iconName='check-circle' 
             color="purple"
             />
           </View>
         )
       }
     }

   ```
#### Props:

##### MaterialFab:
```typescript jsx
      icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
      color?:string,
      iconColor?: string, 
      onPress?():void,
      iconName:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
      mini?:boolean,
      position:string,// one of {'bottomLeft','topRight','topLeft','bottomRight'}
      progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```
##### MaterialExtendedFab:
```typescript jsx
  icon?: React.ReactNode, // you can use your custom icon component , whatever, the button have react-native-vector-icons inside
  color?:string,
  iconColor?: string,
  onPress?():void,
  iconName:string,// if you set the material icon name from https://materialdesignicons.com/ the icon will displayed
  textFont?:string,
  text:string,
  position:string,// one of {'top','bottom'}
  progress:boolean // if you set this true the button will render a circular progressbar inside like above gifs

```


### Material Checkbox

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/materialcheckbox.gif" width="30%">
</p>

I Made this checkbox component exactly based on material.io design guidelines

#### Usage :
this is exactly the code of above gif

```typescript jsx
import * as React from 'react'
import {Component} from 'react';
import {View} from 'react-native'
import styles from './Styles/LaunchScreenStyles'
import {MaterialCheckbox} from "react-native-typescript-material-ui-collection";

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialCheckbox
          checkBoxColor="purple"
          text="Material Checkbox"
          onCheckedChange={(isChecked) => {
            console.log(isChecked)
          }}
        />
        <MaterialCheckbox
          rtl
          checkBoxColor="purple"
          text="Material Checkbox"
          onCheckedChange={(isChecked) => {
            console.log(isChecked)
          }}
        />
        <MaterialCheckbox
          checkBoxColor="purple"
          onCheckedChange={(isChecked) => {
            console.log(isChecked)
          }}
        />
        <MaterialCheckbox
          checkBoxColor="purple"
          text="Material Checkbox"
          onCheckedChange={(isChecked) => {
            console.log(isChecked)
          }}
          progress
        />
      </View>
    )
  }
}
```

#### Props:
```typescript jsx
  text?: string,
  isChecked?: boolean,
  textFont?: string,

  onCheckedChange?(isChecked: boolean): void,

  checkBoxColor?: string,
  textColor?: string,
  rtl?: boolean,
  progress?: boolean

```

### Material Collapsible Toolbar Container
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/collapsibletoolbarcontainer.gif" width="30%">
 </p>
 
This is a pure js material collapsible toolbar container
#### Usage :

The exact code of above gif

```typescript jsx
import * as React from 'react'
import {Component} from 'react';
import {Image, Text, View} from 'react-native'
import CollapsibleToolbarContainer from 'react-native-typescript-material-ui-collection'

export default class LaunchScreen extends Component {
  componentWillMount() {
  }

  renderContent = () => (
    <View>
      {new Array(40).fill().map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: '#F5F5F5',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5E5'
          }}
        >
          <Text>{`Item ${i + 1}`}</Text>
        </View>
      ))}
    </View>
  );

  renderCollapsedToolbarContent = () => <Image
    source={{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}

    style={{
      width: 50,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden'
    }}/>;

  render() {
    return (
      <CollapsibleToolbarContainer
        renderContent={this.renderContent}
        imageSource='https://lorempixel.com/400/300/'
        collapsedNavBarBackgroundColor='#009688'
        translucentStatusBar
        showsVerticalScrollIndicator={false}
        textColor='white'
        renderCollapsedToolbarContent={this.renderCollapsedToolbarContent}
        leftButtonIcon='menu'
        onLeftIconPress={() => console.log('onlefticonpress')}
        // toolBarHeight={300}
      />
    );
  }
}
``` 

#### Props :

```typescript jsx
  collapsedNavBarBackgroundColor?: string,
  imageSource?: string,
  onContentScroll?(): void,
  renderContent?(): React.ReactNode,
  renderCollapsedToolbarContent?():React.ReactNode, // this component will be rendered on the toolbar 
  toolBarHeight?: number,
  translucentStatusBar?: boolean,
  textColor?: string,
  leftButtonIcon?: string,
  onLeftIconPress?(): void,
  rightButtonIcon?: string,
  onRightIconPress?(): void

```
