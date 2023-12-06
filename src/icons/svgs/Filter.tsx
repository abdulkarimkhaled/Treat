import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Filter(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(18)}
            height={calcHeight(19)}
            viewBox="0 0 18 19"
            {...props}
        >
            <Path
                d="M21 3H5a1 1 0 00-1 1v2.59A2.006 2.006 0 004.583 8L10 13.414V21a1 1 0 001.447.9l4-2A1 1 0 0016 19v-5.586L21.417 8A2.006 2.006 0 0022 6.59V4a1 1 0 00-1-1zm-6.707 9.293A1 1 0 0014 13v5.382l-2 1V13a1 1 0 00-.293-.707L6 6.59V5h14v1.583z"
                transform="translate(-4 -3)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Filter
