"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const react_native_material_ripple_1 = require("react-native-material-ripple");
class MaterialToolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: {
                alignSelf: 'flex-start',
                height: 56,
                width: '100%',
                backgroundColor: this.props.color,
                flexDirection: 'row',
                elevation: 4,
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowRadius: 4,
                shadowOpacity: 0.24
            } },
            this.props.leftIcon &&
                React.createElement(react_native_material_ripple_1.default, { onPress: () => this.props.onLeftIconPress(), style: { borderRadius: 28, overflow: 'hidden', width: 56, height: 56, alignItems: 'center', justifyContent: 'center' } },
                    React.createElement(MaterialCommunityIcons_1.default, { style: { margin: 8 }, name: this.props.leftIcon, size: 24, color: this.props.iconsColor })),
            this.props.content &&
                this.props.content(),
            this.props.rightIcon &&
                React.createElement(react_native_material_ripple_1.default, { onPress: () => this.props.onRightIconPress(), style: { borderRadius: 28, overflow: 'hidden', width: 56, height: 56, alignItems: 'center', justifyContent: 'center' } },
                    React.createElement(MaterialCommunityIcons_1.default, { style: { margin: 8 }, name: this.props.rightIcon, size: 24, color: this.props.iconsColor }))));
    }
}
MaterialToolbar.defaultProps = {
    color: '#eeeeee',
    onLeftIconPress: () => { },
    onRightIconPress: () => { },
    iconsColor: '#212121'
};
exports.default = MaterialToolbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxUb29sYmFyXFxpbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsK0NBQWtDO0FBQ2xDLDZGQUFxRjtBQUNyRiwrRUFBa0Q7QUFrQmxELE1BQXFCLGVBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQXNEO0lBQ3ZHLFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVmLENBQUM7SUFTRCxNQUFNO1FBQ0osT0FBTyxDQUNMLG9CQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFO2dCQUNYLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUMsTUFBTTtnQkFDWixlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNqQyxhQUFhLEVBQUUsS0FBSztnQkFDcEIsU0FBUyxFQUFFLENBQUM7Z0JBQ1osWUFBWSxFQUFFO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLE1BQU0sRUFBRSxDQUFDO2lCQUNWO2dCQUNELFlBQVksRUFBRSxDQUFDO2dCQUNmLGFBQWEsRUFBRSxJQUFJO2FBQ3BCO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUNwQixvQkFBQyxzQ0FBTSxJQUFDLE9BQU8sRUFBRSxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDO29CQUMxSixvQkFBQyxnQ0FBc0IsSUFDckIsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUN2RCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQzVCLENBQ0s7WUFFUixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRXJCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDckIsb0JBQUMsc0NBQU0sSUFBQyxPQUFPLEVBQUUsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDO29CQUMzSixvQkFBQyxnQ0FBc0IsSUFDckIsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUN4RCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQzVCLENBQ0ssQ0FFSixDQUNSLENBQUE7SUFDSCxDQUFDOztBQTVDTSw0QkFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLGVBQWUsRUFBQyxHQUFFLEVBQUUsR0FBQyxDQUFDO0lBQ3RCLGdCQUFnQixFQUFDLEdBQUUsRUFBRSxHQUFDLENBQUM7SUFDdkIsVUFBVSxFQUFDLFNBQVM7Q0FDckIsQ0FBQztBQVhKLGtDQW9EQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJEOlxcQ29kaW5nUHJvamVjdHNcXEdpdGh1YlxcdHlwZXNjcmlwdC1tYXRlcmlhbC11aS1jb2xsZWN0aW9uXFxFeGFtcGxlQW5kVGVzdFxcbGliXFxDb21wb25lbnRzXFxNYXRlcmlhbFRvb2xiYXJcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Vmlld30gZnJvbSBcInJlYWN0LW5hdGl2ZVwiO1xuaW1wb3J0IE1hdGVyaWFsQ29tbXVuaXR5SWNvbnMgZnJvbSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbENvbW11bml0eUljb25zJ1xuaW1wb3J0IFJpcHBsZSBmcm9tICdyZWFjdC1uYXRpdmUtbWF0ZXJpYWwtcmlwcGxlJztcbmltcG9ydCB7UmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gU3R5bGVzXG5cbmludGVyZmFjZSBNYXRlcmlhbFRvb2xiYXJQcm9wcyB7XG4gIGNvbG9yPzogc3RyaW5nLFxuICBvbkxlZnRJY29uUHJlc3M/KCk6dm9pZCxcbiAgb25SaWdodEljb25QcmVzcz8oKTp2b2lkLFxuICBjb250ZW50PygpOlJlYWN0Tm9kZVxuICBpY29uc0NvbG9yPzpzdHJpbmcsXG4gIGxlZnRJY29uPzpzdHJpbmcsXG4gIHJpZ2h0SWNvbj86c3RyaW5nXG59XG5cbmludGVyZmFjZSBNYXRlcmlhbFRvb2xiYXJTdGF0ZSB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsVG9vbGJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCA8TWF0ZXJpYWxUb29sYmFyUHJvcHMsIE1hdGVyaWFsVG9vbGJhclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnI2VlZWVlZScsXG4gICAgb25MZWZ0SWNvblByZXNzOigpPT57fSxcbiAgICBvblJpZ2h0SWNvblByZXNzOigpPT57fSxcbiAgICBpY29uc0NvbG9yOicjMjEyMTIxJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3tcbiAgICAgICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgICAgIGhlaWdodDogNTYsXG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgZWxldmF0aW9uOiA0LFxuICAgICAgICBzaGFkb3dPZmZzZXQ6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDRcbiAgICAgICAgfSxcbiAgICAgICAgc2hhZG93UmFkaXVzOiA0LFxuICAgICAgICBzaGFkb3dPcGFjaXR5OiAwLjI0XG4gICAgICB9fT5cbiAgICAgICAge3RoaXMucHJvcHMubGVmdEljb24gJiZcbiAgICAgICAgPFJpcHBsZSBvblByZXNzPXsoKT0+dGhpcy5wcm9wcy5vbkxlZnRJY29uUHJlc3MoKX0gc3R5bGU9e3tib3JkZXJSYWRpdXM6Mjgsb3ZlcmZsb3c6J2hpZGRlbicsd2lkdGg6NTYsaGVpZ2h0OjU2LGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cbiAgICAgICAgICA8TWF0ZXJpYWxDb21tdW5pdHlJY29uc1xuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDh9fSBuYW1lPXt0aGlzLnByb3BzLmxlZnRJY29ufSBzaXplPXsyNH1cbiAgICAgICAgICAgIGNvbG9yPXt0aGlzLnByb3BzLmljb25zQ29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SaXBwbGU+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMucHJvcHMuY29udGVudCAmJlxuICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudCgpXG4gICAgICAgIH1cbiAgICAgICAge3RoaXMucHJvcHMucmlnaHRJY29uICYmXG4gICAgICAgIDxSaXBwbGUgb25QcmVzcz17KCk9PnRoaXMucHJvcHMub25SaWdodEljb25QcmVzcygpfSBzdHlsZT17e2JvcmRlclJhZGl1czoyOCxvdmVyZmxvdzonaGlkZGVuJyx3aWR0aDo1NixoZWlnaHQ6NTYsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgICAgIDxNYXRlcmlhbENvbW11bml0eUljb25zXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbjogOH19IG5hbWU9e3RoaXMucHJvcHMucmlnaHRJY29ufSBzaXplPXsyNH1cbiAgICAgICAgICAgIGNvbG9yPXt0aGlzLnByb3BzLmljb25zQ29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SaXBwbGU+XG4gICAgICAgIH1cbiAgICAgIDwvVmlldz5cbiAgICApXG4gIH1cblxufVxuIl0sInZlcnNpb24iOjN9