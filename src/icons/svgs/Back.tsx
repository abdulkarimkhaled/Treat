import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Back(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(28)}
            height={calcWidth(28)}
            viewBox="0 0 28 28"
            {...props}>
            <Path
                d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
                transform="translate(2.414 1.707)"
                fill={props.color ? props.color : "#050505"}
            />
        </Svg>
    )
}

export default Back
