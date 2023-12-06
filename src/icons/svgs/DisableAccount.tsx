import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function DisableAccount(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(21.769)}
            height={calcHeight(16.568)}
            viewBox="0 0 21.769 16.568"
            {...props}
        >
            <Path
                data-name="bx-user-x"
                d="M17.142 16.934l2.529-2.54 2.529 2.54 1.568-1.568-2.54-2.529 2.54-2.529-1.568-1.57-2.529 2.54-2.529-2.54-1.568 1.568 2.526 2.53-2.529 2.529zm-4.1-8.516A4.319 4.319 0 008.627 4a4.319 4.319 0 00-4.418 4.418 4.319 4.319 0 004.418 4.418 4.319 4.319 0 004.418-4.418zm-6.627 0a2.11 2.11 0 012.212-2.209 2.11 2.11 0 012.209 2.209 2.11 2.11 0 01-2.209 2.209 2.11 2.11 0 01-2.209-2.209zM4.209 19.463a3.313 3.313 0 013.313-3.313h2.209a3.313 3.313 0 013.313 3.313v1.1h2.209v-1.1a5.522 5.522 0 00-5.522-5.523H7.522A5.522 5.522 0 002 19.463v1.1h2.209z"
                transform="translate(-2 -3.999)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default DisableAccount
