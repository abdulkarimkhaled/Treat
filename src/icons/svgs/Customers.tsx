import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function Customers(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={11.517}
            viewBox="0 0 13 11.517"
            {...props}
        >
            <G fill="#a4ada8">
                <Path
                    data-name="Path 1013"
                    d="M15.5 8.56a3.879 3.879 0 00.514-2.354 4.129 4.129 0 00-1.918-3.038l-.756 1.14a2.789 2.789 0 011.31 2.035 2.527 2.527 0 01-.733 2.043L13.1 9.2l1.107.325a4.1 4.1 0 012.929 3.79h1.368A5.46 5.46 0 0015.5 8.56z"
                    transform="translate(-2 -3.168) translate(-3.506)"
                />
                <Path
                    data-name="Path 1014"
                    d="M7.132 9.474a2.737 2.737 0 10-2.737-2.737 2.74 2.74 0 002.737 2.737zm0-4.105a1.368 1.368 0 11-1.369 1.368 1.37 1.37 0 011.369-1.369zm1.026 4.789H6.105A4.109 4.109 0 002 14.263v.684h1.368v-.684a2.74 2.74 0 012.737-2.737h2.053a2.74 2.74 0 012.737 2.737v.684h1.368v-.684a4.109 4.109 0 00-4.105-4.105z"
                    transform="translate(-2 -3.168) translate(0 -.263)"
                />
            </G>
        </Svg>
    )
}

export default Customers
