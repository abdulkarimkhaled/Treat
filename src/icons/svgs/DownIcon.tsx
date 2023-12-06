import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function DownIcon(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={11.414}
            height={7.121}
            viewBox="0 0 11.414 7.121"
            {...props}
        >
            <Path
                d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                transform="rotate(90 13.5 4.207)"
                fill={props.color ? props.color : "#4A5A51"}
            />
        </Svg>
    )
}

export default DownIcon
