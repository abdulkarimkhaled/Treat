import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function FilledHeart(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(20)}
      height={calcHeight(18)}
      viewBox="0 0 15.385 14.175"
      {...props}
    >
      <Path
        d="M16.048 4.39a4.563 4.563 0 00-6.328-.152 4.59 4.59 0 00-6.331 6.643l6.33 6.33 6.33-6.33a4.547 4.547 0 00-.001-6.491z"
        transform="translate(-2.027 -3.037)"
        fill="#4a5a51"
      />
    </Svg>
  )
}

export default FilledHeart
