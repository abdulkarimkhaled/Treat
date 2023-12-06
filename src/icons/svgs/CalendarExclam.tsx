import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function CalendarExclam(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(18)}
            height={calcHeight(20)}
            viewBox="0 0 18 20"
            {...props}
        >
            <Path
                data-name="Path 1088"
                d="M19 4h-2V2h-2v2H9V2H7v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V8h14z"
                transform="translate(-3 -2)"
                fill="#989898"
            />
            <Path
                data-name="Path 1089"
                d="M11 10h2v5h-2zm0 6h2v2h-2z"
                transform="translate(-3 -2)"
                fill="#989898"
            />
        </Svg>
    )
}

export default CalendarExclam
