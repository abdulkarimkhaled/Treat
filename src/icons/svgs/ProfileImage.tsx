import * as React from "react"
import Svg, { G, Rect, Path, Circle } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function ProfileImage(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(370)}
            height={calcHeight(154)}
            viewBox="0 0 370 154"
            {...props}
        >
            <G data-name="Group 232" transform="translate(-26 -132)">
                <Rect
                    data-name="Rectangle 34"
                    width={370}
                    height={154}
                    rx={15}
                    transform="translate(26 132)"
                    fill="#d1d4d2"
                />
                <Path
                    d="M28.4 2a14.109 14.109 0 1014.106 14.109A14.109 14.109 0 0028.4 2zm0 22.575a8.465 8.465 0 118.465-8.465 8.465 8.465 0 01-8.465 8.465zm25.4 31.04v-2.822A19.753 19.753 0 0034.04 33.04H22.753A19.753 19.753 0 003 52.793v2.822h5.644v-2.822a14.109 14.109 0 0114.109-14.109H34.04a14.109 14.109 0 0114.109 14.109v2.822z"
                    transform="translate(182.995 180)"
                    fill="rgba(73,91,81,0.2)"
                />
                <G data-name="Group 231" transform="translate(347 140)">
                    <Circle
                        data-name="Ellipse 33"
                        cx={20}
                        cy={20}
                        r={20}
                        fill="rgba(255,255,255,0.8)"
                    />
                    <G fill="#4a5a51">
                        <Path
                            data-name="Path 912"
                            d="M12 8a4 4 0 104 4 4.054 4.054 0 00-4-4zm0 6a2 2 0 112-2 2.053 2.053 0 01-2 2z"
                            transform="translate(10 11) translate(-2 -2)"
                        />
                        <Path
                            data-name="Path 913"
                            d="M20 5h-2.586l-2.707-2.707A1 1 0 0014 2h-4a1 1 0 00-.707.293L6.586 5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM4 18V7h3a1 1 0 00.707-.293L10.414 4h3.172l2.707 2.707A1 1 0 0017 7h3v11z"
                            transform="translate(10 11) translate(-2 -2)"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default ProfileImage
