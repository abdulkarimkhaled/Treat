import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function User(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(18)}
            height={calcHeight(19)}
            viewBox="0 0 18 19"
            {...props}
        >
            <Path
                data-name="bx-user"
                d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm9 11v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1h2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"
                transform="translate(-3 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default User
