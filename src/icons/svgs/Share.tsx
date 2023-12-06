import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function Share(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(18.055)}
      height={calcHeight(19)}
      viewBox="0 0 18.055 19"
      {...props}
    >
      <Path
        d="M5.313 14.308a3.323 3.323 0 002.234-.881l5.927 3.389a2.9 2.9 0 00-.114.8 3.342 3.342 0 101.079-2.433L8.513 11.8a2.594 2.594 0 00.114-.72l5.823-3.334a3.3 3.3 0 10-1.089-2.433 3.172 3.172 0 00.114.8L8.087 9.195a3.314 3.314 0 10-2.774 5.113zM16.675 16.2a1.42 1.42 0 11-1.42 1.42 1.42 1.42 0 011.42-1.42zm0-12.308a1.42 1.42 0 11-1.42 1.42 1.42 1.42 0 011.42-1.419zM5.313 9.574a1.42 1.42 0 11-1.42 1.42 1.42 1.42 0 011.42-1.42z"
        transform="translate(-1.99 -1.99)"
        fill="#4a5a51"
      />
    </Svg>
  )
}

export { Share }
