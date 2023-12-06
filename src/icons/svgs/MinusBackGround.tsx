import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function MinusBackGround(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(30)}
            height={calcWidth(30)}
            viewBox="0 0 30 30"
            {...props}
        >
            <G data-name="Group 510">
                <G
                    data-name="Ellipse 50"
                    transform="translate(-321 -500) translate(321 500)"
                    fill="#fff"
                    stroke="#b2866b"
                    strokeWidth={1}
                >
                    <Circle cx={15} cy={15} r={15} stroke="none" />
                    <Circle cx={15} cy={15} r={14.5} fill="none" />
                </G>
                <Path
                    d="M5 11h14v2H5z"
                    transform="translate(-321 -500) translate(324 503)"
                    fill="#b2866b"
                />
            </G>
        </Svg>
    )
}

export { MinusBackGround }
