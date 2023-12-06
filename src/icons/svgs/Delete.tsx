import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Delete(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(15.574)}
            height={calcHeight(17.304)}
            viewBox="0 0 15.574 17.304"
            {...props}
        >
            <G fill={props.color ? props.color : "#a4ada8"}>
                <Path
                    data-name="Path 1081"
                    d="M4.73 17.574a1.73 1.73 0 001.73 1.73h8.652a1.73 1.73 0 001.73-1.73V7.191h1.73v-1.73h-3.459V3.73A1.73 1.73 0 0013.383 2H8.191a1.73 1.73 0 00-1.73 1.73v1.73H3v1.73h1.73zM8.191 3.73h5.191v1.73H8.191zm-.865 3.461h7.787v10.383H6.461V7.191z"
                    transform="translate(-3 -2)"
                />
                <Path
                    data-name="Path 1082"
                    d="M9 10h1.73v6.922H9zm3.461 0h1.73v6.922h-1.73z"
                    transform="translate(-3 -2) translate(-.809 -1.078)"
                />
            </G>
        </Svg>
    )
}

export default Delete
