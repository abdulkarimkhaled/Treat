import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Edit(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(13.787)}
            height={calcHeight(16.889)}
            viewBox="0 0 13.787 16.889"
            {...props}
        >
            <Path
                d="M16.964 6.71a1.723 1.723 0 000-2.437L15.6 2.906a1.723 1.723 0 00-2.436 0L4 12.038v3.8h3.8zm-2.585-2.586l1.368 1.366-1.37 1.365-1.367-1.366zm-8.656 9.995v-1.365l6.067-6.048 1.367 1.367-6.066 6.046zM4 17.566h13.787v1.724H4z"
                transform="translate(-4 -2.401)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Edit
