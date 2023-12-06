import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function PurchaseTag(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20.001"
            {...props}
        >
            <Path
                data-name="Path 1083"
                d="M11.707 2.293A1 1 0 0011 2H6a1 1 0 00-.707.293l-3 3A1 1 0 002 6v5a1 1 0 00.293.707l10 10a1 1 0 001.414 0l8-8a1 1 0 000-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9z"
                transform="translate(-2 -2)"
                fill="#b2866b"
            />
            <Circle
                data-name="Ellipse 48"
                cx={1.647}
                cy={1.647}
                r={1.647}
                transform="translate(4.706 4.706)"
                fill="#b2866b"
            />
        </Svg>
    )
}

export default PurchaseTag
