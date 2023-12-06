import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function LogOut(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(21.576)}
      height={calcHeight(19.419)}
      viewBox="0 0 21.576 19.419"
      {...props}
    >
      <Path
        data-name="Path 910"
        d="M2 12.315l5.394 4.315v-3.236H17.1v-2.158H7.394V8z"
        transform="translate(-2 -2.605)"
        fill="#4a5a51"
      />
      <Path
        data-name="Path 911"
        d="M13.5 3a9.641 9.641 0 00-6.863 2.844l1.525 1.525a7.552 7.552 0 110 10.679l-1.525 1.525a9.708 9.708 0 1013.73-13.73A9.641 9.641 0 0013.5 3z"
        transform="translate(-1.635 -2.999)"
        fill="#4a5a51"
      />
    </Svg>
  )
}

export default LogOut
