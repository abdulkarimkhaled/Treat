import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function CheckCircle(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <Path
                data-name="Path 1084"
                d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
                transform="translate(-2 -2)"
                fill="#5eaf82"
            />
            <Path
                data-name="Path 1085"
                d="M10 13.587l-2.3-2.3-1.412 1.421L10 16.413l6.706-6.706-1.413-1.414z"
                transform="translate(-2 -2)"
                fill="#5eaf82"
            />
        </Svg>
    )
}

export default CheckCircle
