"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Switch_1 = require("./Switch");
class MaterialSwitch extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: { padding: 16, width: this.props.text ? '100%' : undefined, flexDirection: 'row' } },
            this.props.text &&
                React.createElement(react_native_1.Text, { style: {
                        flex: 1,
                        fontFamily: this.props.textFont,
                        color: this.props.textColor,
                        fontSize: 14
                    } }, this.props.text),
            React.createElement(Switch_1.default, { onValueChanged: (value) => this.props.onValueChanged(value), color: this.props.color })));
    }
}
MaterialSwitch.defaultProps = {
    onValueChanged: () => { }
};
exports.default = MaterialSwitch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxTd2l0Y2hcXGluZGV4LnRzeCIsIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QiwrQ0FBeUM7QUFDekMscUNBQThCO0FBVTlCLE1BQXFCLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBK0I7SUFNL0UsTUFBTTtRQUNKLE9BQU8sQ0FDTCxvQkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUEsQ0FBQyxDQUFBLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDO1lBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDaEIsb0JBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUU7d0JBQ1gsSUFBSSxFQUFDLENBQUM7d0JBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTt3QkFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzt3QkFDM0IsUUFBUSxFQUFFLEVBQUU7cUJBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBUTtZQUV6QyxvQkFBQyxnQkFBTSxJQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQ3hGLENBQ1IsQ0FBQTtJQUNILENBQUM7O0FBakJNLDJCQUFZLEdBQUc7SUFDcEIsY0FBYyxFQUFHLEdBQUcsRUFBRSxHQUFFLENBQUM7Q0FDMUIsQ0FBQztBQUpKLGlDQW9CQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJEOlxcQ29kaW5nUHJvamVjdHNcXEdpdGh1YlxcdHlwZXNjcmlwdC1tYXRlcmlhbC11aS1jb2xsZWN0aW9uXFxFeGFtcGxlQW5kVGVzdFxcbGliXFxDb21wb25lbnRzXFxNYXRlcmlhbFN3aXRjaFxcaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5cbmludGVyZmFjZSBNYXRlcmlhbFN3aXRjaFByb3BzIHtcbiAgdGV4dEZvbnQ/OnN0cmluZyxcbiAgdGV4dENvbG9yPzpzdHJpbmcsXG4gIHRleHQ/OnN0cmluZyxcbiAgY29sb3I/OnN0cmluZ1xuICBvblZhbHVlQ2hhbmdlZD8odmFsdWU6Ym9vbGVhbik6dm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8TWF0ZXJpYWxTd2l0Y2hQcm9wcz4ge1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25WYWx1ZUNoYW5nZWQgOiAoKSA9PiB7fVxuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXt7cGFkZGluZzoxNix3aWR0aDp0aGlzLnByb3BzLnRleHQ/JzEwMCUnOnVuZGVmaW5lZCxmbGV4RGlyZWN0aW9uOidyb3cnfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHQmJlxuICAgICAgICA8VGV4dCBzdHlsZT17e1xuICAgICAgICAgIGZsZXg6MSxcbiAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLnByb3BzLnRleHRGb250LFxuICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogMTR9fT57dGhpcy5wcm9wcy50ZXh0fTwvVGV4dD5cbiAgICAgICAgfVxuICAgICAgICA8U3dpdGNoIG9uVmFsdWVDaGFuZ2VkPXsodmFsdWUpPT50aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2VkKHZhbHVlKX0gY29sb3I9e3RoaXMucHJvcHMuY29sb3J9Lz5cbiAgICAgIDwvVmlldz5cbiAgICApXG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==