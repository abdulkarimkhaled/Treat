import * as React from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"
import { colors } from "../../config/appStyles"
import { calcHeight, calcWidth } from "../../config/metrics"

function Home(props: any) {
  return (
    <Svg
      width={calcWidth(24)}
      height={calcHeight(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.31 1.776a1 1 0 011.38 0l8 7.619 2.5 2.38a1 1 0 01-1.38 1.45l-.81-.773V20a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.548l-.81.772a1 1 0 11-1.38-1.448l2.5-2.381 8-7.62zM5 10.548V20h4v-5a3 3 0 116 0v5h4v-9.452L12 3.88l-7 6.667zM13 20v-5a1 1 0 10-2 0v5h2z"
        fill={props.color ? props.color : "#a4ada8"}
      />
    </Svg>
  )
}

export default Home
