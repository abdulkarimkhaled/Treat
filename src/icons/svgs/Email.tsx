import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Email(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcHeight(16)}
            viewBox="0 0 20 16"
            {...props}
        >
            <Path
                data-name="bx-envelope"
                d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 6.223-8-6.222V6zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044V18z"
                transform="translate(-2 -4)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Email
