import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function Time(props: {
    color?: string
}) {
    return (
        <Svg
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <G fill={props.color ? props.color : "#5eaf82"}>
                <Path
                    data-name="Path 1019"
                    d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
                    transform="translate(-2 -2)"
                />
                <Path
                    data-name="Path 1020"
                    d="M13 7h-2v6h6v-2h-4z"
                    transform="translate(-2 -2)"
                />
            </G>
        </Svg>
    )
}

export { Time }
