import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Telephone(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(19.005)}
            height={calcWidth(19.006)}
            viewBox="0 0 19.005 19.006"
            {...props}
        >
            <Path
                d="M17.707 12.293a1 1 0 00-1.414 0L14.7 13.887a7.489 7.489 0 01-2.992-1.594A7.489 7.489 0 0110.113 9.3l1.594-1.594a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0L3.581 5.005A2 2 0 003 6.44a15.3 15.3 0 004.3 10.268 15.309 15.309 0 0010.269 4.3h.028A1.976 1.976 0 0019 20.42l2.712-2.712a1 1 0 000-1.414l-4-4zm-.127 6.712a13.239 13.239 0 01-8.873-3.712 13.242 13.242 0 01-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 00-.272.912 10.158 10.158 0 002.271 4.5 10.158 10.158 0 004.5 2.271.991.991 0 00.912-.271L17 14.414 19.586 17z"
                transform="translate(-2.995 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Telephone
