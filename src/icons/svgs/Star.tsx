import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Star(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ? props.width : calcWidth(12)}
            height={props.width ? props.width : calcWidth(12)}
            viewBox="0 0 11.998 12"
            {...props}
        >
            <Path
                d="M4.709 9.392l-.894 3.87a.6.6 0 00.917.634L8 11.719l3.265 2.181a.6.6 0 00.91-.663l-1.1-3.839L13.8 6.945a.6.6 0 00-.355-1.045l-3.42-.272-1.48-3.275a.6.6 0 00-1.093 0l-1.48 3.276-3.42.271a.6.6 0 00-.371 1.028zM6.421 6.8a.6.6 0 00.5-.352L8 4.057l1.078 2.388a.6.6 0 00.5.352l2.383.189L10 8.752a.6.6 0 00-.176.611l.752 2.63L8.332 10.5a.6.6 0 00-.665 0l-2.342 1.56.63-2.727a.6.6 0 00-.166-.564L3.967 6.992l2.454-.2z"
                transform="translate(-2 -1.999)"
                fill="#b2866b"
            />
        </Svg>
    )
}

export default Star
