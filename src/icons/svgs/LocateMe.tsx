import * as React from "react"
import Svg, { Circle, Defs, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function LocateMe(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(68)}
            height={calcWidth(68)}
            viewBox="0 0 68 68"
            {...props}
        >
            <Defs></Defs>
            <G data-name="Group 377">
                <G transform="translate(-331 -736) translate(331 736)" filter="url(#a)">
                    <Circle
                        data-name="Ellipse 46"
                        cx={25}
                        cy={25}
                        r={25}
                        transform="translate(9 6)"
                        fill="#b2866b"
                    />
                </G>
                <Path
                    d="M2 9.63a1 1 0 00.581.966l7.5 3.442 3.442 7.5a1 1 0 00.909.583h.057a1 1 0 00.894-.686L20.984 4.4a1 1 0 00-1.263-1.263L2.688 8.736A1 1 0 002 9.63zm16.466-3.971l-4.182 12.73-2.534-5.522a1 1 0 00-.492-.492L5.734 9.841l12.732-4.182z"
                    transform="translate(-331 -736) translate(353.483 754.392)"
                    fill="#fff"
                />
            </G>
        </Svg>
    )
}

export default LocateMe
