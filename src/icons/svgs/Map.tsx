import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Map(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={18.002}
            viewBox="0 0 20 18.002"
            {...props}
        >
            <Path
                d="M21.447 6.105l-6-3a1 1 0 00-.9 0L9 5.882 3.447 3.105A1 1 0 002 4v13a1 1 0 00.553.9l6 3a1 1 0 00.9 0L15 18.118l5.553 2.776A1 1 0 0022 20V7a1 1 0 00-.553-.895zM10 7.618l4-2v10.764l-4 2zm-6-2l4 2v10.764l-4-2zm16 12.764l-4-2V5.618l4 2z"
                transform="translate(-2 -2.999)"
                fill="#fff"
            />
        </Svg>
    )
}

export default Map
