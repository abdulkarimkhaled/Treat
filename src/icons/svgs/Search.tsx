import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Search(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(18.707)}
            height={calcWidth(18.707)}
            viewBox="0 0 18.707 18.708"
            {...props}
        >
            <Path
                d="M10 18a7.951 7.951 0 004.9-1.687l4.4 4.395 1.414-1.414-4.4-4.4A7.99 7.99 0 1010 18zm0-14a6 6 0 11-6 6 6.006 6.006 0 016-6z"
                transform="translate(-2 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Search
