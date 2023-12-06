import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function LocationPin(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcWidth(47.594)}
            height={calcHeight(59.492)}
            viewBox="0 0 47.594 59.492"
            {...props}
        >
            <G fill="#a4ada8">
                <Path
                    data-name="Path 955"
                    d="M19.9 29.8A11.9 11.9 0 108 17.9a11.91 11.91 0 0011.9 11.9zm0-17.848a5.949 5.949 0 11-5.951 5.948 5.955 5.955 0 015.951-5.951z"
                    transform="translate(-4 -2) translate(7.899 7.898)"
                />
                <Path
                    data-name="Path 956"
                    d="M26.072 60.939a2.969 2.969 0 003.451 0c.9-.64 22.158-15.986 22.072-35.142A23.8 23.8 0 004 25.782C3.914 44.953 25.168 60.3 26.072 60.939zM27.8 7.949a17.869 17.869 0 0117.845 17.863c.062 13.2-13.053 25.055-17.848 28.943C23 50.864 9.887 39.007 9.949 25.8A17.866 17.866 0 0127.8 7.949z"
                    transform="translate(-4 -2)"
                />
            </G>
        </Svg>
    )
}

export { LocationPin }
