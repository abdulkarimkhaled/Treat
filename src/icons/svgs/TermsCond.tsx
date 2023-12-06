import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function TermsCond(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(16)}
            height={calcHeight(20)}
            viewBox="0 0 16 20"
            {...props}
        >
            <Path
                data-name="Path 903"
                d="M19.9 8.586a1 1 0 00-.2-.293l-6-6a1 1 0 00-.293-.2.948.948 0 00-.094-.033.991.991 0 00-.259-.051C13.04 2.011 13.021 2 13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9c0-.021-.011-.04-.013-.062a.952.952 0 00-.051-.259.732.732 0 00-.033-.093zM16.586 8H14V5.414zM6 20V4h6v5a1 1 0 001 1h5v10z"
                transform="translate(-4 -2)"
                fill="#4a5a51"
            />
            <Path
                data-name="Path 904"
                d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                transform="translate(-4 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default TermsCond
