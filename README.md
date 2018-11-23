<h1 align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/ignite-typescript-logo.png" alt="IgniTypescript" width="400">
<br>
 Typescript material ui collection
 </br>
</h1>

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Here you can see a Created by me and some hand picked collection of material components from various ui libraries. The goal is making ui development easy and seamless (Ui/ux itself with material design rules and Coding Experience) For now, components are in a limited number but i'm working on increasing their number to fulfill all ui/ux needed components

<h2 align="center">Table of contents</h2>

<!--ts-->
   * [Installation](#installation)
   * [Components and Utils](#components-and-utils)
      * [Material Colors](#material-colors)    
      * [Material Vertical Linear](#material-vertical-linear)
      * [Material Horizontal Linear](#material-horizontal-linear)
      * [Material Card](#material-card)
      * [Material Toolbar](#material-toolbar)
      * [Material Container](#material-container)
      * [Material Collapsible Toolbar Container](#material-collapsible-toolbar-container)
      * [Material Backdrop](#material-backdrop)  
      * [Material Text Input](#material-text-input)   
      * [Material Progress](#material-progress) 
      * [Material Buttons](#material-buttons) 
      * [Material FAB](#material-fab)
      * [Material Checkbox](#material-checkbox)   
      * [Material Switch](#material-switch)
      * [Material Radio Group](#material-radio-group)
<!--te-->

<h2 align="center">Installation</h2>

The library is installed and linked by default inside my boilerplate <a href="https://github.com/lvlrSajjad/ignite-boilerplate-andross-typescript">ignite-boilerplate-andross-typescript</a>

If you have an ignite project you can add it by this command :

```
ignite add material-ui
```

You can also install it standalone by below commands :

```
npm install react-native-material-textfield react-native-vector-icons react-native-typescript-material-ui-collection react-native-material-ripple --save
react-native link
```

<h2 align="center">Components and Utils</h2>

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
   
 ### Material Card 
 
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/card.gif" width="30%">
 </p>
  
  A card component created using material.io guidelines , Also CardContent Component is inside this is actually a view with 16dp padding
  
 #### Usage :
 
 Above gif's code (just important things)
 
 ```typescript jsx
    //import
    import {MaterialCard, MaterialCardContent} from 'react-native-typescript-material-ui-collection';
 ```    
 
```typescript jsx
   //with image header
   <MaterialCard style={{flex:1}}  header={()=><Image style={{height:150}} source={{uri:'https://lorempixel.com/200/300/fashion'}}/>}>
     <MaterialCardContent >
     <Text> material card</Text>
     <Text> material card</Text>
     </MaterialCardContent>
   </MaterialCard>
```    
```typescript jsx
   //setting elevation
   <MaterialCard  style={{flex:1}} elevation={3}>
      <MaterialCardContent >
        <Text> material card</Text>
        <Text> Elevation 3</Text>
      </MaterialCardContent>
   </MaterialCard>
```    
   
```typescript jsx
    //minimal usage
    <MaterialCardContent>
       <Text>this is a material card</Text>
       <Text>this is a material card</Text>
       <Text>this is a material card</Text>
    </MaterialCardContent>
```    
    
```typescript jsx
     //with background image
     <MaterialCard  style={{flex:1,height:200}} backgroundImageSource={{uri:'https://lorempixel.com/300/200/sports'}}>
         <MaterialCardContent >
             <Text style={{textShadowColor:'black',textShadowRadius:2,color:'white'}}> material card</Text>
             <Text style={{textShadowColor:'black',textShadowRadius:2,color:'white'}}> Elevation 7</Text>
         </MaterialCardContent>
     </MaterialCard>
```    
#### Props
```typescript jsx
  elevation?: number,
  margin?:number,
  header?(): React.ReactNode,
  style?:ViewStyle,
  backgroundImageSource?: ImageSourcePropType,
  backgroundColor?:string

```  
#### Default Props
```typescript jsx
    elevation:2,
    margin:8,
    backgroundColor:'#eeeeee'
```          
### Material Toolbar

 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-toolbar.png" width="30%">
 </p>
 
 A toolbar designed based on material.io guidelines
 And
 MaterialToolbarContent you can use it for some content on your toolbar , you can also use your custom component
 #### Usage
 
 Import :
 
 ```typescript jsx
import {MaterialToolbar, MaterialToolbarContent} from 'react-native-typescript-material-ui-collection';
```

Use:

```typescript jsx
 <MaterialToolbar
    leftIcon='menu'
    content={()=><MaterialToolbarContent haveTypeMode={true} text='title'/>}
 />
```

```typescript jsx
<MaterialToolbar
  leftIcon='menu'
  iconsColor='white'
  color='purple'
  content={()=><MaterialToolbarContent color='white' haveTypeMode={true} text='title'/>}
/>
```
 
```typescript jsx
 // Minimal
<MaterialToolbar
   leftIcon='menu'
/>
```

```typescript jsx
<MaterialToolbar
  leftIcon='menu'
  content={()=><MaterialToolbarContent haveTypeMode={false} text='title'/>}
/>
``` 
#### Props

```typescript jsx
MaterialToolbarProps {
  color?: string,
  onLeftIconPress?():void,
  onRightIconPress?():void,
  content?():ReactNode
  iconsColor?:string,
  leftIcon?:string, // one of https://materialdesignicons.com/ icons
  rightIcon?:string // one of https://materialdesignicons.com/ icons
}
MaterialToolbarContentProps {
  color?: string,
  font?: string,
  text?: string,
  haveTypeMode?: boolean,
  typeModeIcon?:string, // one of https://materialdesignicons.com/ icons
  onChangeText?(text:string),
  onTypeModePress?(): void,
}
```

#### Default Props

```typescript jsx
//Material Toolbar Content

    color: '#212121',
    typeModeIcon:'magnify', 
    onTypeModePress: () => {
    },
    onChangeText:()=>{}
  

//Material Toolbar

    color: '#eeeeee',
    onLeftIconPress:()=>{},
    onRightIconPress:()=>{},
    iconsColor:'#212121'
  
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
import {MaterialCollapsibleToolbarContainer} from 'react-native-typescript-material-ui-collection'

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
      <MaterialCollapsibleToolbarContainer
        renderContent={this.renderContent}
        imageSource='https://lorempixel.com/400/300/'
        collapsedNavBarBackgroundColor='#009688'
        translucentStatusBar
        showsVerticalScrollIndicator={false}
        textColor='white'
        renderCollapsedToolbarContent={this.renderCollapsedToolbarContent}
        leftButtonIcon='menu'
        onLeftIconPress={() => console.log('onlefticonpress')}
        title="Title"
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
### Material Backdrop
 <p align="center">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/backdropimage.gif" width="30%">
 <img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/backdroplist.gif" width="30%">
 </p>

I tried to create this component using material.io guidelines in this <a href="https://material.io/design/components/backdrop.html">link</a>

#### Usage :
  ```typescript jsx
    import * as React from 'react'
    import {Component} from 'react';
    import {connect} from 'react-redux'
    import {MaterialBackdrop} from "react-native-typescript-material-ui-collection";
    import {Image, Text, View} from "react-native";
    
    class ScreenName extends Component {
      constructor(props) {
        super(props);
        this.state = {isExpanded: false}
      }
    
      render() {
        return (
          <MaterialBackdrop
            revealComponent={()=>this.renderRevealComponent()}
            leftButtonIcon='menu'
            expandedTitle='Expanded'
            collapsedTitle='Collapsed'
            content={()=>this.renderContent('black')}
            textColor='white'
            subHeaderText='subheader'
            backdropBackgroundColor='purple'
            contentBackgroundColor='white'
            subheaderTextColor='#212121'
          />
        )
      }
      renderRevealComponent=()=><View>
          <Image
            style={{margin: 34, alignSelf: 'center', width: 84, height: 84, borderRadius: 42}}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwu7s_Ic3YioDVl9AmoJGsKbBuCKFVp2cD3KCPzdYlBLOcGmeV'}}
          />
        </View>
      renderContent=(color)=><View>
        {new Array(40).fill().map((_, i) => (
          <View
            key={i}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#00000011'
            }}
          >
            <Text style={{color:color}}>{`Item ${i + 1}`}</Text>
          </View>
        ))}
      </View>
    
    }
   ``` 
      
#### Props :

```typescript jsx
  revealComponent?(): React.ReactNode,
  backdropBackgroundColor?: string,
  leftButtonIcon?: string, // an icon name from https://materialdesignicons.com (this component using react-native-vector icons inside)
  expandedTitle?: string,
  collapsedTitle?: string,
  content?(): React.ReactNode,
  textColor?: string,
  subHeaderText?: string,
  horizontalContent?: boolean,
  onSubheaderClick?(): void,
  onLeftButtonClick?(): void,
  onRightButtonClick?(): void,
  contentBackgroundColor?: string,
  subheaderTextColor?: string,
  onExpand?(): void,
  onCollapse?(): void,
  rightButtonIcon?: string // an icon name from https://materialdesignicons.com (this component using react-native-vector icons inside)
                            // if you give it an icon name icon will be rendered top right of backdrop and you can use it as you want
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

### Material Switch

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/switch.gif" width="30%">
</p>

I Made this switch component exactly based on material.io design guidelines

#### Usage

this is exactly the code of above gif

```typescript jsx
import * as React from 'react'
import { View } from 'react-native'
import MaterialSwitch from "react-native-typescript-material-ui-collection";

// Styles
import styles from './Styles/LaunchScreenStyles'

interface LaunchScreenComponentProps {}

export default class LaunchScreen extends React.Component <LaunchScreenComponentProps> {

  render () {
    return (
      <View style={styles.mainContainer}>
        <MaterialSwitch color='purple'/>
        <MaterialSwitch text="Material switch" color='purple'/>
        <MaterialSwitch text="Material switch" color='purple'/>
        <MaterialSwitch text="Material switch" color='purple'/>

      </View>
    )
  }
}

```

#### Props:

```typescript jsx
  textFont?:string,
  textColor?:string,
  text?:string,
  color?:string
  onValueChanged?(value:boolean):void

```

### Material Radio Group

<p align="center">
<img src="https://raw.githubusercontent.com/lvlrSajjad/ignite-boilerplate-andross-typescript/master/gifs/material-radio-group.gif" width="30%">
</p>

I Made this radio group component exactly based on material.io design guidelines

#### Usage

this is exactly the code of above gif

```typescript jsx
import * as React from 'react'
import { View } from 'react-native'
import MaterialSwitch from "react-native-typescript-material-ui-collection";

// Styles
import styles from './Styles/LaunchScreenStyles'

interface LaunchScreenComponentProps {}

export default class LaunchScreen extends React.Component <LaunchScreenComponentProps> {
  render () {
    return (
      <View style={styles.mainContainer}>
        <MaterialRadioGroup data={[{text:'text1'},{text:'text2'},{text:'text3'},{text:'text4'}]} color='purple'/>
        <MaterialRadioGroup isRtl={true} data={[{text:'text1'},{text:'text2'},{text:'text3'},{text:'text4'}]} color='purple'/>
      </View>
    )
  }
}

```

#### Props:

```typescript jsx
  data: any, // just be sure you have text:string field in datarows
  color: string,
  textFont?: string,
  textColor?: string,
  isRtl?:boolean,
  onItemPress?(item, index): void
```
