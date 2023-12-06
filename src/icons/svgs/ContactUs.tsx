import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { calcWidth } from "../../config/metrics"

function ContactUs(props: any) {
    return (
        <Svg
            data-name="Group 638"
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(19)}
            height={calcWidth(19)}
            viewBox="0 0 19 19"
            {...props}
        >
            <G fill="#4a5a51">
                <Path
                    data-name="Path 777"
                    d="M15.84 21a1.9 1.9 0 001.358-.56l2.574-2.574a.95.95 0 000-1.339l-3.8-3.8a.95.95 0 00-1.339 0l-1.52 1.51a7.172 7.172 0 01-2.85-1.51 7.238 7.238 0 01-1.51-2.85l1.51-1.52a.95.95 0 000-1.339l-3.8-3.8a.95.95 0 00-1.339 0L2.56 5.8A1.9 1.9 0 002 7.158a14.515 14.515 0 004.085 9.756A14.515 14.515 0 0015.84 21zM5.8 5.239L8.26 7.7 7.034 8.925a.95.95 0 00-.285.864 9.613 9.613 0 002.185 4.275 9.575 9.575 0 004.275 2.185.95.95 0 00.864-.256l1.227-1.255 2.46 2.46-1.9 1.9a12.615 12.615 0 01-8.426-3.524A12.615 12.615 0 013.9 7.139zm13.3 5.31H21A8.369 8.369 0 0012.449 2v1.9a6.431 6.431 0 016.651 6.649z"
                    transform="translate(-2 -1.998)"
                />
                <Path
                    data-name="Path 778"
                    d="M13 7.9c1.995 0 2.85.855 2.85 2.85h1.9C17.75 7.691 16.059 6 13 6z"
                    transform="translate(-2.551 -2.198)"
                />
            </G>
        </Svg>
    )
}

export default ContactUs
