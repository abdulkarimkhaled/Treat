import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function XCircle(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <Path
                data-name="Path 1086"
                d="M9.172 16.242L12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"
                transform="translate(-2 -2)"
                fill="red"
            />
            <Path
                data-name="Path 1087"
                d="M12 22A10 10 0 102 12a10.011 10.011 0 0010 10zm0-18a8 8 0 11-8 8 8.009 8.009 0 018-8z"
                transform="translate(-2 -2)"
                fill="red"
            />
        </Svg>
    )
}

export default XCircle
