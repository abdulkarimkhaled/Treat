import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Bell(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(18)}
            height={calcWidth(20)}
            viewBox="0 0 18 20"
            {...props}
        >
            <Path
                d="M19 13.586V10a7.006 7.006 0 00-5.145-6.742 2 2 0 00-3.71 0A7.007 7.007 0 005 10v3.586l-1.707 1.707A1 1 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a1 1 0 00-.293-.707zM19 17H5v-.586l1.707-1.707A1 1 0 007 14v-4a5 5 0 0110 0v4a1 1 0 00.293.707L19 16.414zm-7 5a2.98 2.98 0 002.818-2H9.182A2.98 2.98 0 0012 22z"
                transform="translate(-3 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Bell
