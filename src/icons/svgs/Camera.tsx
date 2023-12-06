import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Camera(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(18)}
            viewBox="0 0 20 18"
            {...props}
        >
            <G fill="#4a5a51">
                <Path
                    data-name="Path 912"
                    d="M12 8a4 4 0 104 4 4.054 4.054 0 00-4-4zm0 6a2 2 0 112-2 2.053 2.053 0 01-2 2z"
                    transform="translate(-2 -2)"
                />
                <Path
                    data-name="Path 913"
                    d="M20 5h-2.586l-2.707-2.707A1 1 0 0014 2h-4a1 1 0 00-.707.293L6.586 5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM4 18V7h3a1 1 0 00.707-.293L10.414 4h3.172l2.707 2.707A1 1 0 0017 7h3v11z"
                    transform="translate(-2 -2)"
                />
            </G>
        </Svg>
    )
}

export default Camera
