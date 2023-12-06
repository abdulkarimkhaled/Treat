import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function MasterCard(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(38)}
            height={calcHeight(20)}
            viewBox="0 0 32 20"
            {...props}
        >
            <Circle cx={10} cy={10} r={10} fill="#f93232" />
            <Path
                d="M22 0a9.936 9.936 0 00-5.98 2H16v.014A10.06 10.06 0 0014.893 3h2.214a9.7 9.7 0 01.855 1H14.03a9.932 9.932 0 00-.667 1h5.264a10.27 10.27 0 01.518 1h-6.291a9.833 9.833 0 00-.377 1h7.044c.1.326.186.661.258 1h-7.563a9.917 9.917 0 00-.157 1h7.881a8.457 8.457 0 01.06 1h-8a10 10 0 00.06 1h7.882c-.038.339-.093.672-.162 1h-7.563a9.779 9.779 0 00.261 1h7.044a9.832 9.832 0 01-.377 1h-6.291a9.779 9.779 0 00.509 1h5.264a9.782 9.782 0 01-.669 1H14.03a10.023 10.023 0 00.862 1h2.215a10.049 10.049 0 01-1.107.986A10 10 0 1022 0z"
                fill="#fed049"
            />
        </Svg>
    )
}

export { MasterCard }
