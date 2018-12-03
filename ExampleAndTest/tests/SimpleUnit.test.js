import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {
    MaterialTextButton,
    MaterialOutlinedButton,
    MaterialContainedButton,
    MaterialFab,
    MaterialExtendedFab,
    MaterialTextInput,
    MaterialContainer,
    MaterialHorizontalLinear,
    MaterialVerticalLinear,
    MaterialProgress,
    MaterialCheckbox,
    MaterialCollapsibleToolbarContainer,
    MaterialBackdrop,
    MaterialSwitch,
    MaterialRadioGroup,
    MaterialCard,
    MaterialCardContent,
    MaterialToolbar,
    MaterialToolbarContent,
} from '../lib'

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialTextButton  text={'text'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialOutlinedButton  text={'text'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialContainedButton text={'text'} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialFab  iconName={'menu'} position={'bottom'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialExtendedFab  iconName={'menu'} position={'bottom'} text={'text'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialTextInput label={'text'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialHorizontalLinear />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialVerticalLinear />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialProgress  color={'red'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialCheckbox />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialCollapsibleToolbarContainer />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialBackdrop />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialRadioGroup />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialCardContent />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialToolbar />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("MaterialTextButton Renders Correctly", () => {
    const tree = renderer.create(<MaterialToolbarContent />).toJSON();
    expect(tree).toMatchSnapshot();
});
