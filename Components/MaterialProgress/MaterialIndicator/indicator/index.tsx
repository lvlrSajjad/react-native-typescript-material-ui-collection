import * as React from 'react'
import { PureComponent } from 'react'
import { Animated, Easing } from 'react-native'

const hasLoopSupport = false;

export interface IndicatorProps {
    animationEasing?(): number,
    animationDuration?: number,

    animating?: any,
    interaction?: boolean,

    renderComponent?({ index, count, progress }): any,
    count?: number
    style?:object
}

export interface IndicatorState {
    progress: any,
    animation: any
}


export default class Indicator extends PureComponent<IndicatorProps,IndicatorState> {
    static defaultProps = {
        animationEasing: Easing.linear,
        animationDuration: 1200,

        animating: true,
        interaction: true,

        count: 1
    };

    mounted;
    state;
    constructor (props) {
        super(props)

        this.renderComponent = this.renderComponent.bind(this)
        this.startAnimation = this.startAnimation.bind(this)
        this.stopAnimation = this.stopAnimation.bind(this)

        this.state = {
            progress: new Animated.Value(0)
        }

        this.mounted = false
    }

    startAnimation ({ finished }={finished:true}) {
        let { progress } = this.state
        let {
            interaction,
            animationEasing,
            animationDuration
        } = this.props

        if (!this.mounted || finished === false) {
            return
        }

        let animation =
            Animated.timing(progress, {
                duration: animationDuration,
                easing: animationEasing,
                useNativeDriver: true,
                isInteraction: interaction,
                toValue: 1
            })

        if (hasLoopSupport) {
            Animated
                .loop(animation)
                .start()
        } else {
            progress.setValue(0)
            animation.start(this.startAnimation)
        }

        this.setState({ animation })
    }

    stopAnimation () {
        let { animation } = this.state

        if (animation == null) {
            return
        }

        animation.stop()

        this.setState({ animation: null })
    }

    componentDidMount () {
        let { animating } = this.props

        this.mounted = true

        if (animating) {
            this.startAnimation()
        }
    }

    componentWillUnmount () {
        this.mounted = false
    }

    componentWillReceiveProps (props) {
        let { animating } = this.props

        if (animating ^ props.animating) {
            if (animating) {
                this.stopAnimation()
            } else {
                this.startAnimation()
            }
        }
    }

    renderComponent (undefined, index) {
        undefined=undefined;
        let { progress } = this.state
        let { renderComponent, count } = this.props

        if (typeof renderComponent === 'function') {
            return renderComponent({ index, count, progress })
        } else {
            return null
        }
    }

    render () {
        let { count, ...props } = this.props

        return (
            <Animated.View {...props}>
                {Array.from(new Array(count), this.renderComponent)}
            </Animated.View>
        )
    }
}
