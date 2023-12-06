import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Heart(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(20)}
      height={calcHeight(18)}
      viewBox="0 0 15.385 13.88"
      {...props}
    >
      <Path
        d="M9.72 4.239a4.589 4.589 0 00-6.33 6.643l5.656 5.656a.771.771 0 001.286.064l5.72-5.72A4.589 4.589 0 009.72 4.238zm5.238 1.242a3.021 3.021 0 010 4.31l-5.24 5.24-5.238-5.24a3.047 3.047 0 114.309-4.309l.386.386a.771.771 0 001.091 0l.386-.386a3.1 3.1 0 014.307 0z"
        transform="translate(-2.027 -3.037)"
        fill="#a4ada8"
      />
    </Svg>
  )
}

export default Heart
