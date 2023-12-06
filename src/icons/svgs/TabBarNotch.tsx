import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function TabBarNotch(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(76)}
            height={calcHeight(18)}
            viewBox="0 0 76 18"
            {...props}
        >
            <Defs>
                <ClipPath id="a">
                    <Path
                        data-name="Rectangle 51"
                        transform="translate(23)"
                        fill="#fff"
                        d="M0 0H76V18H0z"
                    />
                </ClipPath>
            </Defs>
            <G data-name="Mask Group 3" transform="translate(-23)" clipPath="url(#a)">
                <Path
                    data-name="Path 922"
                    d="M57.67 11.94C52.36 6.71 48.42 0 38.3 0h-.6C27.58 0 23.64 6.71 18.33 11.94 14.47 16.76 6.61 17.81 0 18v13h76V18c-6.61-.19-14.47-1.24-18.33-6.06z"
                    transform="translate(23)"
                    fill="#4a5a51"
                />
            </G>
        </Svg>
    )
}

export default TabBarNotch
