"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const indicator_1 = require("../indicator");
const styles_1 = require("./styles");
class MaterialIndicator extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.renderComponent = this.renderComponent.bind(this);
    }
    renderComponent({ index, count, progress }) {
        count = count;
        let { size, color, animationDuration } = this.props;
        let frames = 60 * animationDuration / 1000;
        let easing = react_native_1.Easing.bezier(0.4, 0.0, 0.7, 1.0);
        let inputRange = Array
            .from(new Array(frames), (undefined, frameIndex) => { undefined = undefined; return frameIndex / (frames - 1); });
        let outputRange = Array
            .from(new Array(frames), (undefined, frameIndex) => {
            undefined = undefined;
            let progress = 2 * frameIndex / (frames - 1);
            let rotation = index
                ? +(360 - 15)
                : -(180 - 15);
            if (progress > 1.0) {
                progress = 2.0 - progress;
            }
            let direction = index
                ? -1
                : +1;
            return (direction * (180 - 30) * easing(progress) + rotation) + 'deg';
        });
        let layerStyle = {
            width: size,
            height: size,
            transform: [{
                    rotate: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [(0 + 30 + 15) + 'deg', (2 * 360 + 30 + 15) + 'deg']
                    })
                }]
        };
        let viewportStyle = {
            width: size,
            height: size,
            transform: [{
                    translateY: index ? -size / 2 : 0
                }, {
                    rotate: progress.interpolate({ inputRange, outputRange })
                }]
        };
        let containerStyle = {
            width: size,
            height: size / 2,
            overflow: 'hidden'
        };
        let offsetStyle = index
            ? { top: size / 2 }
            : null;
        let lineStyle = {
            width: size,
            height: size,
            borderColor: color,
            borderWidth: size / 10,
            borderRadius: size / 2
        };
        return (React.createElement(react_native_1.Animated.View, Object.assign({ style: styles_1.default.layer }, { key: index }),
            React.createElement(react_native_1.Animated.View, { style: layerStyle },
                React.createElement(react_native_1.Animated.View, { style: [containerStyle, offsetStyle], collapsable: false },
                    React.createElement(react_native_1.Animated.View, { style: viewportStyle },
                        React.createElement(react_native_1.Animated.View, { style: containerStyle, collapsable: false },
                            React.createElement(react_native_1.Animated.View, { style: lineStyle })))))));
    }
    render() {
        let _a = this.props, { style, size: width, size: height } = _a, props = __rest(_a, ["style", "size", "size"]);
        return (React.createElement(react_native_1.View, { style: [styles_1.default.container, style] },
            React.createElement(indicator_1.default, Object.assign({ style: { width, height }, renderComponent: this.renderComponent }, props, { count: 2 }))));
    }
}
MaterialIndicator.defaultProps = {
    animationDuration: 2400,
    color: 'rgb(0, 0, 0)',
    size: 40
};
exports.default = MaterialIndicator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiRDpcXENvZGluZ1Byb2plY3RzXFxHaXRodWJcXHR5cGVzY3JpcHQtbWF0ZXJpYWwtdWktY29sbGVjdGlvblxcRXhhbXBsZUFuZFRlc3RcXGxpYlxcQ29tcG9uZW50c1xcTWF0ZXJpYWxQcm9ncmVzc1xcTWF0ZXJpYWxJbmRpY2F0b3JcXG1hdGVyaWFsLWluZGljYXRvclxcaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLGlDQUFzQztBQUV0QywrQ0FBcUQ7QUFFckQsNENBQXFEO0FBQ3JELHFDQUE2QjtBQVM3QixNQUFxQixpQkFBa0IsU0FBUSxxQkFBcUM7SUFPaEYsWUFBYSxLQUFLO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsZUFBZSxDQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVwRCxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksTUFBTSxHQUFHLHFCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksVUFBVSxHQUFHLEtBQUs7YUFDakIsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUUsU0FBUyxHQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sVUFBVSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENB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USxDQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsYUFBYTt3QkFDL0Isb0JBQUMsdUJBQVEsQ0FBQyxJQUFJLElBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsS0FBSzs0QkFDcEQsb0JBQUMsdUJBQVEsQ0FBQyxJQUFJLElBQUMsS0FBSyxFQUFFLFNBQVMsR0FBSSxDQUN2QixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ25CLENBQUE7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksZUFBMkQsRUFBM0QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxPQUF5QixFQUF2Qiw2Q0FBdUIsQ0FBQztRQUVoRSxPQUFPLENBQ0gsb0JBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsQ0FBQyxnQkFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDbEMsb0JBQUMsbUJBQVMsa0JBQ04sS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsSUFDakMsS0FBSyxJQUNULEtBQUssRUFBRSxDQUFDLElBQ1YsQ0FDQyxDQUNWLENBQUE7SUFDTCxDQUFDOztBQTVHTSw4QkFBWSxHQUFHO0lBQ2xCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBTE4sb0NBOEdDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkQ6XFxDb2RpbmdQcm9qZWN0c1xcR2l0aHViXFx0eXBlc2NyaXB0LW1hdGVyaWFsLXVpLWNvbGxlY3Rpb25cXEV4YW1wbGVBbmRUZXN0XFxsaWJcXENvbXBvbmVudHNcXE1hdGVyaWFsUHJvZ3Jlc3NcXE1hdGVyaWFsSW5kaWNhdG9yXFxtYXRlcmlhbC1pbmRpY2F0b3JcXGluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFZpZXcsIEFuaW1hdGVkLCBFYXNpbmcgfSBmcm9tICdyZWFjdC1uYXRpdmUnXG5cbmltcG9ydCBJbmRpY2F0b3Ise0luZGljYXRvclByb3BzfSBmcm9tICcuLi9pbmRpY2F0b3InXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hdGVyaWFsSW5kaWNhdG9yUHJvcHMgZXh0ZW5kcyBJbmRpY2F0b3JQcm9wc3tcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzdHlsZT86b2JqZWN0XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxJbmRpY2F0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE1hdGVyaWFsSW5kaWNhdG9yUHJvcHM+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMjQwMCxcbiAgICAgICAgY29sb3I6ICdyZ2IoMCwgMCwgMCknLFxuICAgICAgICBzaXplOiA0MFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gdGhpcy5yZW5kZXJDb21wb25lbnQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlckNvbXBvbmVudCAoeyBpbmRleCwgY291bnQsIHByb2dyZXNzIH0pIHtcbiAgICAgICAgY291bnQgPSBjb3VudDtcbiAgICAgICAgbGV0IHsgc2l6ZSwgY29sb3IsIGFuaW1hdGlvbkR1cmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBmcmFtZXMgPSA2MCAqIGFuaW1hdGlvbkR1cmF0aW9uIC8gMTAwMDtcbiAgICAgICAgbGV0IGVhc2luZyA9IEVhc2luZy5iZXppZXIoMC40LCAwLjAsIDAuNywgMS4wKTtcblxuICAgICAgICBsZXQgaW5wdXRSYW5nZSA9IEFycmF5XG4gICAgICAgICAgICAuZnJvbShuZXcgQXJyYXkoZnJhbWVzKSwgKHVuZGVmaW5lZCwgZnJhbWVJbmRleCkgPT4ge3VuZGVmaW5lZD11bmRlZmluZWQ7IHJldHVybiBmcmFtZUluZGV4IC8gKGZyYW1lcyAtIDEpfSk7XG5cbiAgICAgICAgbGV0IG91dHB1dFJhbmdlID0gQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKG5ldyBBcnJheShmcmFtZXMpLCAodW5kZWZpbmVkLCBmcmFtZUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkPXVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAyICogZnJhbWVJbmRleCAvIChmcmFtZXMgLSAxKTtcbiAgICAgICAgICAgICAgICBsZXQgcm90YXRpb24gPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICA/ICsoMzYwIC0gMTUpXG4gICAgICAgICAgICAgICAgICAgIDogLSgxODAgLSAxNSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxLjApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAyLjAgLSBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgIDogKzE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKGRpcmVjdGlvbiAqICgxODAgLSAzMCkgKiBlYXNpbmcocHJvZ3Jlc3MpICsgcm90YXRpb24pICsgJ2RlZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBsYXllclN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFt7XG4gICAgICAgICAgICAgICAgcm90YXRlOiBwcm9ncmVzcy5pbnRlcnBvbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmFuZ2U6IFswLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0UmFuZ2U6IFsoMCArIDMwICsgMTUpICsgJ2RlZycsICgyICogMzYwICsgMzAgKyAxNSkgKyAnZGVnJ11cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdmlld3BvcnRTdHlsZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBbe1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IGluZGV4ID8gLXNpemUgLyAyIDogMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogcHJvZ3Jlc3MuaW50ZXJwb2xhdGUoeyBpbnB1dFJhbmdlLCBvdXRwdXRSYW5nZSB9KVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSAvIDIsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgb2Zmc2V0U3R5bGUgPSBpbmRleFxuICAgICAgICAgICAgPyB7IHRvcDogc2l6ZSAvIDIgfVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGxldCBsaW5lU3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBzaXplIC8gMTAsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHNpemUgLyAyXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXtzdHlsZXMubGF5ZXJ9IHsuLi57IGtleTogaW5kZXggfX0+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e2xheWVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17W2NvbnRhaW5lclN0eWxlLCBvZmZzZXRTdHlsZV19IGNvbGxhcHNhYmxlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17dmlld3BvcnRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjb2xsYXBzYWJsZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17bGluZVN0eWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZC5WaWV3PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCB7IHN0eWxlLCBzaXplOiB3aWR0aCwgc2l6ZTogaGVpZ2h0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCBzdHlsZV19PlxuICAgICAgICAgICAgICAgIDxJbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJDb21wb25lbnQ9e3RoaXMucmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXsyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwidmVyc2lvbiI6M30=