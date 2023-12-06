import * as React from "react"
import Svg, { Path, Circle, G } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function MapIndicator(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(120)}
            height={calcWidth(120)}
            viewBox="0 0 120 120"
            {...props}
        >
            <G data-name="Group 379" transform="translate(-115 -432)">
                <Circle
                    data-name="Ellipse 43"
                    cx={60}
                    cy={60}
                    r={60}
                    transform="translate(115 432)"
                    fill="rgba(178,134,107,0.2)"
                />
                <G
                    data-name="Ellipse 43"
                    transform="translate(130 447)"
                    fill="rgba(178,134,107,0.2)"
                    stroke="#b2866b"
                    strokeWidth={1}
                >
                    <Circle cx={45} cy={45} r={45} stroke="none" />
                    <Circle cx={45} cy={45} r={44.5} fill="none" />
                </G>
                <G
                    data-name="Ellipse 45"
                    transform="translate(165 482)"
                    fill="#b2866b"
                    stroke="#fff"
                    strokeWidth={2}
                >
                    <Circle cx={10} cy={10} r={10} stroke="none" />
                    <Circle cx={10} cy={10} r={9} fill="none" />
                </G>
            </G>
        </Svg>
    )
}

export { MapIndicator }
