import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Phone(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(14)}
            height={calcHeight(20)}
            viewBox="0 0 14 20"
            {...props}
        >
            <Path
                data-name="Path 11"
                d="M16.75 2h-10a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm-10 18V4h10v16z"
                transform="translate(-4.75 -2)"
                fill="#4a5a51"
            />
            <Circle
                data-name="Ellipse 1"
                cx={1}
                cy={1}
                r={1}
                transform="translate(6 15)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Phone
