import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Lang(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(20)}
            height={calcWidth(20)}
            viewBox="0 0 20 20"
            {...props}
        >
            <Path
                data-name="bx-globe"
                d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm7.931 9h-2.764a14.67 14.67 0 00-1.792-6.243A8.013 8.013 0 0119.931 11zm-7.4-6.973A12.991 12.991 0 0115.157 11H9.03a12.754 12.754 0 012.451-6.974c.172-.01.344-.026.519-.026s.354.016.53.027zm-3.842.7A15.142 15.142 0 007.03 11H4.069a8.013 8.013 0 014.619-6.273zM4.069 13h2.974A15.669 15.669 0 008.6 19.23 8.01 8.01 0 014.069 13zm7.381 6.973A11.975 11.975 0 019.041 13h6.113a12.2 12.2 0 01-2.6 6.972c-.182.012-.364.028-.551.028s-.367-.016-.55-.027zm4.011-.772A15.339 15.339 0 0017.152 13h2.778a8 8 0 01-4.469 6.2z"
                transform="translate(-2 -2)"
                fill="#4a5a51"
            />
        </Svg>
    )
}

export default Lang
