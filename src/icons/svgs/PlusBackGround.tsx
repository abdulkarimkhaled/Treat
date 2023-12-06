import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function PlusBackGround(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(30)}
            height={calcWidth(30)}
            viewBox="0 0 30 30"
            {...props}
        >
            <G data-name="Group 510" transform="translate(-321 -500)">
                <Circle
                    data-name="Ellipse 50"
                    cx={15}
                    cy={15}
                    r={15}
                    transform="translate(321 500)"
                    fill="#b2866b"
                />
                <Path
                    d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
                    transform="translate(324 503)"
                    fill="#fff"
                />
            </G>
        </Svg>
    )
}

export { PlusBackGround }
