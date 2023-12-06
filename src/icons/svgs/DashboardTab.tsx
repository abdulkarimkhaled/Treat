import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function DashboardTab(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(20)}
      height={calcWidth(20)}
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        data-name="bx-pie-chart-alt-2"
        d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm7.931 9H13V4.069A8.008 8.008 0 0119.931 11zM4 12a8.008 8.008 0 017-7.931V12a1 1 0 00.111.438.942.942 0 00.041.093l4.2 6.723A7.984 7.984 0 014 12zm13.052 6.2L13.805 13h6.126a7.992 7.992 0 01-2.879 5.2z"
        transform="translate(-2 -2)"
        fill={props.color ? props.color : "#a4ada8"}
      />
    </Svg>
  )
}

export default DashboardTab
