import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function PlusTab(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(16.373)}
      height={calcWidth(16.373)}
      viewBox="0 0 16.373 16.373"
      {...props}
    >
      <Path
        data-name="bx-plus"
        d="M21.373 12.017h-7.017V5h-2.339v7.017H5v2.339h7.017v7.017h2.339v-7.017h7.017z"
        transform="translate(-5 -5)"
        fill={props.color ? props.color : "#a4ada8"}
      />
    </Svg>
  )
}

export default PlusTab
