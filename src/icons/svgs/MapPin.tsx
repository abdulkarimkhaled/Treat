import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function MapPin(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(16)}
            height={calcHeight(20)}
            viewBox="0 0 16 20"
            {...props}
        >
            <Path
                data-name="Path 774"
                d="M12 14a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2z"
                transform="translate(-4 -2)"
                fill="#4a5a51"
            />
            <Path
                data-name="Path 775"
                d="M11.42 21.814a1 1 0 001.16 0C12.884 21.6 20.029 16.44 20 10a8 8 0 00-16-.005c-.029 6.445 7.116 11.605 7.42 11.819zM12 4a6.007 6.007 0 016 6.005c.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735a6.006 6.006 0 016-6z"
                transform="translate(-4 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default MapPin
