import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Gift(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(16.993)}
            height={calcWidth(16.993)}
            viewBox="0 0 16.993 16.993"
            {...props}
        >
            <Path
                d="M17.294 6.248h-1.028a4.18 4.18 0 00.178-1.274A2.977 2.977 0 0013.47 2c-1.378 0-2.3 1.259-2.892 2.621C9.993 3.334 9.026 2 7.523 2a2.977 2.977 0 00-2.974 2.974 4.207 4.207 0 00.178 1.274H3.7a1.7 1.7 0 00-1.7 1.7v1.7a1.7 1.7 0 001.7 1.7v5.948a1.7 1.7 0 001.7 1.7h10.2a1.7 1.7 0 001.7-1.7v-5.95a1.7 1.7 0 001.7-1.7v-1.7a1.7 1.7 0 00-1.706-1.698zM13.47 3.7a1.276 1.276 0 011.274 1.274c0 1.274-.532 1.274-.85 1.274H11.79c.434-1.339 1.064-2.548 1.68-2.548zM6.248 4.974A1.276 1.276 0 017.523 3.7c.754 0 1.456 1.3 1.867 2.548H7.1c-.32 0-.852 0-.852-1.274zM3.7 7.948h5.947v1.7H3.7zm1.7 9.346v-5.948h4.247v5.948zm10.2 0h-4.254v-5.948h4.248zm-4.254-7.647V8.02l.014-.072h5.933v1.7z"
                transform="translate(-2 -2)"
                fill={props.color ? props.color : "#fff"}
            />
        </Svg>
    )
}

export { Gift }
