import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function Wallet(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcHeight(18)}
            viewBox="0 0 20 18"
            {...props}
        >
            <Path
                d="M20 3H5a3 3 0 00-3 3v12a3 3 0 003 3h15a2 2 0 002-2V5a2 2 0 00-2-2zM5 19a1 1 0 01-1-1V6a1 1 0 011-1h15v3h-6a2 2 0 00-2 2v4a2 2 0 002 2h6v3zm15-9v4h-6v-4z"
                transform="translate(-2 -3)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Wallet
