import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Check(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="10px"
            height="10px"
            {...props}
        >
            <Path
                d="M22.566 4.73l-1.793-1.218a1.088 1.088 0 00-1.507.285l-8.79 12.96-4.038-4.038a1.085 1.085 0 00-1.532 0l-1.535 1.535a1.09 1.09 0 000 1.535L9.582 22c.348.348.895.613 1.387.613s.988-.308 1.308-.773L22.855 6.234a1.082 1.082 0 00-.289-1.504z"
                transform="scale(9.84615)"
                fill="#fff"
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default Check
