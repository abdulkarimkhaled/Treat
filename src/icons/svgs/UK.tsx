import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcWidth } from "../../config/metrics"

function UK(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(42)}
            height={calcWidth(42)}
            viewBox="0 0 42 42"
            {...props}
        >
            <Circle
                data-name="Ellipse 28"
                cx={20.947}
                cy={20.947}
                r={20.947}
                transform="translate(0 .107)"
                fill="#f0f0f0"
            />
            <G data-name="Group 213" fill="#0052b4">
                <Path
                    data-name="Path 779"
                    d="M12.437 100.142a20.923 20.923 0 00-3.618 7.307h10.925z"
                    transform="translate(.723 .723) translate(-8.819 -92.651)"
                />
                <Path
                    data-name="Path 780"
                    d="M380.93 107.45a20.925 20.925 0 00-3.618-7.307l-7.307 7.307z"
                    transform="translate(.723 .723) translate(-340.376 -92.652)"
                />
                <Path
                    data-name="Path 781"
                    d="M8.819 322.784a20.926 20.926 0 003.618 7.307l7.307-7.307z"
                    transform="translate(.723 .723) translate(-8.819 -297.029)"
                />
                <Path
                    data-name="Path 782"
                    d="M330.089 12.437a20.925 20.925 0 00-7.307-3.618v10.925z"
                    transform="translate(.723 .723) translate(-297.027 -8.819)"
                />
                <Path
                    data-name="Path 783"
                    d="M100.142 377.312a20.925 20.925 0 007.307 3.618v-10.925z"
                    transform="translate(.723 .723) translate(-92.651 -340.376)"
                />
                <Path
                    data-name="Path 784"
                    d="M107.449 8.819a20.925 20.925 0 00-7.307 3.618l7.307 7.307z"
                    transform="translate(.723 .723) translate(-92.651 -8.819)"
                />
                <Path
                    data-name="Path 785"
                    d="M322.783 380.93a20.926 20.926 0 007.307-3.618l-7.307-7.307z"
                    transform="translate(.723 .723) translate(-297.028 -340.376)"
                />
                <Path
                    data-name="Path 786"
                    d="M370.005 322.784l7.307 7.307a20.924 20.924 0 003.618-7.307z"
                    transform="translate(.723 .723) translate(-340.376 -297.029)"
                />
            </G>
            <G data-name="Group 214" fill="#d80027">
                <Path
                    data-name="Path 787"
                    d="M41.822 18.261H23.739V.178a21.193 21.193 0 00-5.478 0v18.083H.178a21.193 21.193 0 000 5.478h18.083v18.083a21.193 21.193 0 005.478 0V23.739h18.083a21.193 21.193 0 000-5.478z"
                />
                <Path
                    data-name="Path 788"
                    d="M322.783 322.783l9.371 9.371q.646-.646 1.234-1.348l-8.023-8.023h-2.583z"
                    transform="translate(-296.305 -296.305)"
                />
                <Path
                    data-name="Path 789"
                    d="M84.351 322.784l-9.371 9.371q.646.646 1.348 1.234l8.023-8.023z"
                    transform="translate(-68.829 -296.306)"
                />
                <Path
                    data-name="Path 790"
                    d="M70.538 84.351l-9.371-9.371q-.646.646-1.234 1.348l8.023 8.023h2.582z"
                    transform="translate(-55.017 -68.829)"
                />
                <Path
                    data-name="Path 791"
                    d="M322.783 70.539l9.371-9.371q-.646-.646-1.348-1.234l-8.023 8.023z"
                    transform="translate(-296.305 -55.018)"
                />
            </G>
        </Svg>
    )
}

export default UK
