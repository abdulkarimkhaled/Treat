import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function MenuTab(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(19.315)}
      height={calcHeight(14.487)}
      viewBox="0 0 19.315 14.487"
      {...props}
    >
      <Path
        data-name="bx-menu"
        d="M4 6h19.315v2.414H4zm0 6.036h19.315v2.414H4zm0 6.036h19.315v2.414H4z"
        transform="translate(-4 -6)"
        fill={props.color ? props.color : "#a4ada8"}
      />
    </Svg>
  )
}

export default MenuTab
