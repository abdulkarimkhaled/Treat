import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Points(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(16)}
            height={calcHeight(20)}
            viewBox="0 0 16 20"
            {...props}
        >
            <Path
                d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4zm0-2c-3.722 0-6-1.3-6-2v-1.268A13.18 13.18 0 0012 18a13.18 13.18 0 006-1.268V18c0 .7-2.278 2-6 2zm0-16c3.722 0 6 1.3 6 2s-2.278 2-6 2-6-1.3-6-2 2.278-2 6-2zM6 8.732A13.18 13.18 0 0012 10a13.18 13.18 0 006-1.268V10c0 .7-2.278 2-6 2s-6-1.3-6-2zm0 4A13.18 13.18 0 0012 14a13.18 13.18 0 006-1.268V14c0 .7-2.278 2-6 2s-6-1.3-6-2z"
                transform="translate(-4 -2)"
                fill={props.color ? props.color : "#4a5a51"}
            />
        </Svg>
    )
}

export default Points
