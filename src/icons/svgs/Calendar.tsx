import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Calendar(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(16.535)}
            height={calcHeight(18.373)}
            viewBox="0 0 16.535 18.373"
            {...props}
        >
            <Path
                data-name="Path 757"
                d="M7 11h1.8v1.879H7zm0 3.757h1.8v1.879H7zM10.608 11h1.8v1.879h-1.8zm0 3.757h1.8v1.879h-1.8zM14.216 11h1.8v1.879h-1.8zm0 3.757h1.8v1.879h-1.8z"
                transform="translate(-3.243 -2.812)"
                fill="#4a5a51"
            />
            <Path
                data-name="Path 758"
                d="M4.837 20.373H17.7a1.839 1.839 0 001.837-1.837V5.675A1.839 1.839 0 0017.7 3.837h-1.839V2h-1.837v1.837H8.512V2H6.675v1.837H4.837A1.839 1.839 0 003 5.675v12.86a1.839 1.839 0 001.837 1.838zM17.7 7.512v11.023H4.837V7.512z"
                transform="translate(-3 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Calendar
