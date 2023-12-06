import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Faq(props: any) {
    return (
        <Svg
            data-name="Group 230"
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <Path
                d="M10.458 4A3.462 3.462 0 007 7.458h1.383a2.075 2.075 0 114.149 0c0 .739-.314 1.013-1.024 1.559a8.485 8.485 0 00-.848.718 2.694 2.694 0 00-.894 1.872v1.383h1.383V11.6a1.437 1.437 0 01.489-.888 7.257 7.257 0 01.713-.6 3.105 3.105 0 001.564-2.656A3.462 3.462 0 0010.458 4zm-.692 9.682h1.383v1.383H9.766z"
                transform="translate(-.458 .968)"
                fill="#4a5a51"
            />
            <G data-name="Ellipse 32" fill="none" stroke="#4a5a51" strokeWidth={2}>
                <Circle cx={10} cy={10} r={10} stroke="none" />
                <Circle cx={10} cy={10} r={9} />
            </G>
        </Svg>
    )
}

export default Faq
