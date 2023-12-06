import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function SelectArea(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <Circle
                data-name="Ellipse 42"
                cx={4}
                cy={4}
                r={4}
                transform="translate(6 6)"
                fill="#fff"
            />
            <Path
                data-name="Path 1018"
                d="M13 4.069V2h-2v2.069A8.01 8.01 0 004.069 11H2v2h2.069A8.008 8.008 0 0011 19.931V22h2v-2.069A8.007 8.007 0 0019.931 13H22v-2h-2.069A8.008 8.008 0 0013 4.069zM12 18a6 6 0 116-6 6.006 6.006 0 01-6 6z"
                transform="translate(-2 -2)"
                fill="#fff"
            />
        </Svg>
    )
}

export { SelectArea }
